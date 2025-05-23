
import './App.css'
import Navbar from './components/Navbar'
import { useEffect, useState } from 'react'
import axiosInstance from './library/https'
import Card from './components/Card'

function App() {
  const [cuisines, setCuisines] = useState([])
  async function fetchCuisines() {
    try {
      const { data } = await axiosInstance.get("/apis/pub/restaurant-app/cuisines")
      setCuisines(data.data.query)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCuisines()
  }, [])
  return (
    <>
      <Navbar />
      <div className='mx-5 flex justify-evenly flex-wrap'>
        {
          cuisines.map((cuisine) => {
            return (<Card cuisine={cuisine} key={cuisine.id} />)
          })
        }
      </div>

    </>

  )
}

export default App
