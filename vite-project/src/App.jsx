// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import "tailwindcss";

function App() {
  return (
    <>
      {/* Hello world */}
      {/* <div className=" bg-yellow-300 h-35"> */}
      <div>
        <div className="flex justify-between items-center bg-yellow-300 h-35">
          <img className="h-35 rounded-b-lg" src="https://i.pinimg.com/736x/d8/bd/63/d8bd63b0bff920df88eeec64e634c48a.jpg" alt="logo" />
          <div>
            <a className=" text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 rounded-lg  px-5 py-3 text-center me-2 mb-2 font-bold" id="navbar-button" href="#">HOME</a>
            <a className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800  rounded-lg  px-5 py-3 text-center me-2 mb-2 font-bold" id="navbar-button" href="#">MENU</a>
            <a className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800  rounded-lg  px-5 py-3 text-center me-2 mb-2 font-bold" id="navbar-button" href="#">OUR SERVICES</a>
          </div>
          <div>
            <button className="m-1 p-3 bg-slate-200 rounded-2xl font-semibold">SEARCH</button>
            <button className="mx-2 p-3 bg-slate-200 rounded-2xl font-semibold">CONTACT US</button>
          </div>
        </div>

        <div className="" id="cards-container">
          <div id="per-card" className="flex-col w-100">
            <img src="https://www.maggi.co.uk/sites/default/files/srh_recipes/2058a74f39245e0065743463242b5f91.jpg" alt="" />
            <div id="product-description">
              <p id="font-name" className="text-2xl font-bold">Name of Product</p>
              <p id="font-description" className="text-xl font-normal">Ini adalah deskripsi dari produk</p>
            </div>
          </div>
        </div>

      </div>
      {/* </div> */}

    </>

  )
}

export default App
