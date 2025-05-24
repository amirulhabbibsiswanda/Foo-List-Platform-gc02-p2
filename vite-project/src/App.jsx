
import './App.css'
import Navbar from './components/Navbar'
import { useEffect, useState } from 'react'
import axiosInstance from './library/https'
import Card from './components/Card'

function App() {
  // console.log("masuk app");

  const [cuisines, setCuisines] = useState([])
  const [search, setSearch] = useState("")
  const [totalPage, setTotalPage] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [sort, setSort] = useState("")
  const [page, setPage] = useState(1)

  const [dropDown, setDropDown] = useState(false)
  const [categories, setCategories] = useState([])
  const [filterCategory, setFilterCategory] = useState("")


  async function fetchCategories() {
    try {
      const { data } = await axiosInstance.get("/apis/pub/restaurant-app/categories")
      // console.log(data.data, "ini categories");
      setCategories(data.data)
    } catch (error) {
      console.log(error, "ini error di cateogries");

    }
  }

  async function fetchCuisines() {
    try {
      // console.log("jalan fetch ");

      let path = "/apis/pub/restaurant-app/cuisines"

      if (search) {
        path = path + `?q=${search}`
      }

      if (page) {
        if (search) {
          path = path + `&page=${page}`
        } else {
          path = path + `?page=${page}`
        }
      }

      if (sort) {
        if (search || page) {
          path = path + `&sort=${sort}`
        } else {
          path = path + `?sort=${sort}`
        }
      }

      if (filterCategory) {
        if (search || page || sort) {
          path = path + `&i=${filterCategory}`
        } else {
          path = path + `i=${filterCategory}`
        }
      }
      const { data } = await axiosInstance.get(path)
      setCuisines(data.data.query)

      setTotalPage(data.data.pagination.totalPage)
      setCurrentPage(data.data.pagination.currentPage)

      // console.log(data.data.query[0].Category, "kategori");
      // console.log(data.data.query, "cui");

    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(() => {
  //   fetchCategories()
  // }, [])

  useEffect(() => {
    // console.log("jalan use effect============");
    fetchCuisines()
    fetchCategories()
    // console.log(totalPage, "total page di use effect");
  }, [search, page, sort, filterCategory])

  const renderButton = () => {
    // console.log(totalPage, "ini totalpage setelah diset");

    let arrButton = []
    for (let i = 1; i <= totalPage; i++) {
      arrButton.push(<button key={i}
        onClick={() => { setPage(i) }}
        className="hover:cursor-pointer" style={{ color: i === currentPage ? "red" : "black" }}>{i}</button>)
    }
    return arrButton

  }

  const handleCategoryButton = () => {
    if (dropDown) {
      setDropDown(false)
    } else {
      setDropDown(true)
    }
  }

  const handleFilterCategory = (categoryName) => {
    setDropDown(false)
    setFilterCategory(categoryName)
  }

  const clearFilter = () => {
    setSearch("")
    setPage(1)
    setSort("")
    setFilterCategory("")
  }
  return (
    <>

      <Navbar />
      {/* {JSON.stringify(categories)} */}
      <div className="flex items-start justify-between gap-4 px-4 py-4">
        <>
          <div className="relative">
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
              onClick={handleCategoryButton}
            >
              Categories
            </button>

            {/* Dropdown menu */}
            {dropDown && (
              <div className="absolute mt-2 bg-amber-200 rounded-lg shadow w-36 flex flex-col gap-1 z-10">
                {categories.map((el) => (
                  <p
                    key={el.id}
                    onClick={() => handleFilterCategory(el.name)}
                    className=" bg-amber-300 hover:cursor-pointer hover:bg-amber-500 rounded"
                  >
                    {el.name}
                  </p>
                ))}
              </div>
            )}
          </div>
        </>



        <div className="flex flex-col items-center gap-2 self-start">
          <button
            onClick={() => setSort("desc")}
            className="bg-amber-200 rounded-lg px-3 py-1 hover:bg-amber-300"
          >
            Newest Cuisine
          </button>
          <button
            onClick={() => setSort("asc")}
            className="bg-amber-200 rounded-lg px-3 py-1 hover:bg-amber-300"
          >
            Latest Cuisine
          </button>
        </div>

        <div className="self-start">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-300"
            placeholder="search by cuisine name"
          />
        </div>

        <button onClick={clearFilter} className='hover:cursor-pointer bg-red-200 rounded px-4 py-2 self-start'>
          Clear Filter</button>
      </div>


      <div className='mx-5 flex justify-evenly flex-wrap'>
        {
          cuisines.map((cuisine) => {
            return (<Card cuisine={cuisine} key={cuisine.id} />)
          })
        }
      </div>
      <div className="flex gap-3 justify-center">
        {renderButton()}
      </div>

    </>

  )
}

export default App
