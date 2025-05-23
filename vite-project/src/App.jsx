
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
      const { data } = await axiosInstance.get(path)
      setCuisines(data.data.query)

      setTotalPage(data.data.pagination.totalPage)
      setCurrentPage(data.data.pagination.currentPage)

      // console.log(data.data.query[0].Category, "kategori");
      // console.log(data.data.query, "cui");

      let arrCategories = []
      for (let i = 0; i < data.data.query.length; i++) {
        arrCategories.push(data.data.query[i].Category.name)
      }
      // console.log(arrCategories, "arr kategori  ");
      setCategories(arrCategories)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // console.log("jalan use effect============");
    fetchCuisines()
    // console.log(totalPage, "total page di use effect");
  }, [search, page, sort])

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
  return (
    <>
      {console.log(categories)
      }
      <Navbar />
      <>
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Dropdown button{" "}
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {/* Dropdown menu */}
        <div
          id="dropdown"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>

          </ul>
        </div>
      </>





      <div className='gap-2 my-2 flex flex-col container justify-center place-items-center'>
        <button onClick={() => { setSort("desc") }} className='bg-amber-200 rounded-lg px-1'>Newest Cuisine</button>
        <button onClick={() => { setSort("asc") }} className='bg-amber-200 rounded-lg px-1'>Latest Cuisine</button>
      </div>
      <div>
        <input type="text" value={search} onChange={(e) => { setSearch(e.target.value) }} className='border' placeholder='search by cuisine name' />
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
