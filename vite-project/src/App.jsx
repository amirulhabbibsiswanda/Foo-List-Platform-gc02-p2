// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ProductDetail from './components/ProductDetail'

// import "tailwindcss";

function App() {
  return (
    <>

      <div className="grid place-items-center">

        <div className="mx-5 flex justify-evenly flex-wrap" id="cards-container">
          <div id="per-card" className="w-100 mt-5">
            <img src="https://www.maggi.co.uk/sites/default/files/srh_recipes/2058a74f39245e0065743463242b5f91.jpg" alt="" />
            <div id="product-description" className="text-center py-4">
              <p id="font-name" className="text-2xl font-bold">Name of Product</p>
              <p id="font-description" className="text-xl font-normal">Ini adalah deskripsi dari produk</p>
            </div>
            <a href="#" className="text-blue-500 underline text-lg">see detail</a>
          </div>
          <div id="per-card" className="w-100 mt-5">
            <img src="https://www.shutterstock.com/image-photo/fresh-steamed-edamame-sprinkled-sea-600nw-1066413857.jpg" alt="" />
            <div id="product-description" className="text-center py-4">
              <p id="font-name" className="text-2xl font-bold">Name of Product</p>
              <p id="font-description" className="text-xl font-normal">Ini adalah deskripsi dari produk</p>
            </div>
            <a href="#" className="text-blue-500 underline text-lg">see detail</a>

          </div>
          <div id="per-card" className="w-100 mt-5">
            <img src="https://akisushi.net/cdn/shop/products/AkiSushi31382_1445x.jpg?v=1612841729" alt="" />
            <div id="product-description" className="text-center py-4">
              <p id="font-name" className="text-2xl font-bold">Name of Product</p>
              <p id="font-description" className="text-xl font-normal">Ini adalah deskripsi dari produk</p>
            </div>
            <a href="#" className="text-blue-500 underline text-lg">see detail</a>

          </div>

          <div id="per-card" className="w-100 mt-5">
            <img src="https://images.stockcake.com/public/7/1/1/7118c078-c863-4672-9dfa-33d8ccab5fa4_large/sushi-platter-served-stockcake.jpg" alt="" />
            <div id="product-description" className="text-center py-4">
              <p id="font-name" className="text-2xl font-bold">Name of Product</p>
              <p id="font-description" className="text-xl font-normal">Ini adalah deskripsi dari produk</p>
            </div>
            <a href="#" className="text-blue-500 underline text-lg">see detail</a>

          </div>

          <div id="per-card" className="w-100 mt-5">
            <img src="https://assets.unileversolutions.com/recipes-v2/214697.jpg" alt="" />
            <div id="product-description" className="text-center py-4">
              <p id="font-name" className="text-2xl font-bold">Name of Product</p>
              <p id="font-description" className="text-xl font-normal">Ini adalah deskripsi dari produk</p>
            </div>
            <a href="#" className="text-blue-500 underline text-lg">see detail</a>

          </div>

          <div id="per-card" className="w-100 mt-5">
            <img src="https://production-media.gousto.co.uk/cms/mood-image/2676---Crispy-Chilli-Beef-Udon-Broth12479-1643735729189.jpg" alt="" />
            <div id="product-description" className="text-center py-4">
              <p id="font-name" className="text-2xl font-bold">Name of Product</p>
              <p id="font-description" className="text-xl font-normal">Ini adalah deskripsi dari produk</p>
            </div>
            <a href="#" className="text-blue-500 underline text-lg">see detail</a>

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
