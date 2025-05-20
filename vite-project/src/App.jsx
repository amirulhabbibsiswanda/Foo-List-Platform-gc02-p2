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
      <div className="grid place-items-center">
        <div id="navbar" className="flex justify-between items-center bg-yellow-300 h-35 min-w-screen">
          <img className="h-35 rounded-b-lg" src="https://i.pinimg.com/736x/d8/bd/63/d8bd63b0bff920df88eeec64e634c48a.jpg" alt="logo" />
          <div>
            <a className=" text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 rounded-lg  px-5 py-3 text-center me-2 mb-2 font-bold" id="navbar-button" href="#">HOME</a>
            <a className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800  rounded-lg  px-5 py-3 text-center me-2 mb-2 font-bold" id="navbar-button" href="#">MENU</a>
            <a className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800  rounded-lg  px-5 py-3 text-center me-2 mb-2 font-bold" id="navbar-button" href="#">OUR SERVICES</a>
          </div>
          <div>
            <button className="m-1 p-3 bg-slate-200 rounded-2xl font-semibold hover:cursor-pointer" id="side-button">LOGIN</button>
            <button className="mx-2 p-3 bg-slate-200 rounded-2xl font-semibold hover:cursor-pointer" id="side-button">REGISTER</button>
          </div>
        </div>

        <div className="mx-5 flex justify-evenly flex-wrap" id="cards-container">
          <div id="per-card" className="w-100 mt-5">
            <img src="https://www.maggi.co.uk/sites/default/files/srh_recipes/2058a74f39245e0065743463242b5f91.jpg" alt="" />
            <div id="product-description" className="text-center py-4">
              <p id="font-name" className="text-2xl font-bold">Name of Product</p>
              <p id="font-description" className="text-xl font-normal">Ini adalah deskripsi dari produk</p>
            </div>
          </div>
          <div id="per-card" className="w-100 mt-5">
            <img src="https://www.shutterstock.com/image-photo/fresh-steamed-edamame-sprinkled-sea-600nw-1066413857.jpg" alt="" />
            <div id="product-description" className="text-center py-4">
              <p id="font-name" className="text-2xl font-bold">Name of Product</p>
              <p id="font-description" className="text-xl font-normal">Ini adalah deskripsi dari produk</p>
            </div>
          </div>
          <div id="per-card" className="w-100 mt-5">
            <img src="https://akisushi.net/cdn/shop/products/AkiSushi31382_1445x.jpg?v=1612841729" alt="" />
            <div id="product-description" className="text-center py-4">
              <p id="font-name" className="text-2xl font-bold">Name of Product</p>
              <p id="font-description" className="text-xl font-normal">Ini adalah deskripsi dari produk</p>
            </div>
          </div>

          <div id="per-card" className="w-100 mt-5">
            <img src="https://images.stockcake.com/public/7/1/1/7118c078-c863-4672-9dfa-33d8ccab5fa4_large/sushi-platter-served-stockcake.jpg" alt="" />
            <div id="product-description" className="text-center py-4">
              <p id="font-name" className="text-2xl font-bold">Name of Product</p>
              <p id="font-description" className="text-xl font-normal">Ini adalah deskripsi dari produk</p>
            </div>
          </div>

          <div id="per-card" className="w-100 mt-5">
            <img src="https://assets.unileversolutions.com/recipes-v2/214697.jpg" alt="" />
            <div id="product-description" className="text-center py-4">
              <p id="font-name" className="text-2xl font-bold">Name of Product</p>
              <p id="font-description" className="text-xl font-normal">Ini adalah deskripsi dari produk</p>
            </div>
          </div>

          <div id="per-card" className="w-100 mt-5">
            <img src="https://production-media.gousto.co.uk/cms/mood-image/2676---Crispy-Chilli-Beef-Udon-Broth12479-1643735729189.jpg" alt="" />
            <div id="product-description" className="text-center py-4">
              <p id="font-name" className="text-2xl font-bold">Name of Product</p>
              <p id="font-description" className="text-xl font-normal">Ini adalah deskripsi dari produk</p>
            </div>
          </div>
        </div>

        <div>
          <p>FOOTER</p>
        </div>

      </div>
      {/* </div> */}

    </>

  )
}

export default App
