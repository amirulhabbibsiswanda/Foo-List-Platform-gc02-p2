import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { BrowserRouter, Routes, Route } from "react-router";
import App from './App';
import LoggedInHomePage from './pages/LoggedInHomePage';
// import App from './App.jsx'
// import ProductDetail from './components/ProductDetail.jsx'
// import Login from './login.jsx'
// import Navbar from './components/Navbar.jsx'
// import TableCuisines from './TableCuisines.jsx'
// import CreateAndEditProduct from './components/CreateAndEditProduct.jsx'
// import AddStaff from './components/AddStaff.jsx'
// import TableCategories from './TableCategories.jsx'
// import Cards from './components/cards.jsx'
// import Coba from './components/Coba.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/loggedin" element={<LoggedInHomePage />} />
      </Routes>
    </BrowserRouter>

    {/* <Navbar />
    <App />
    <ProductDetail />
    <Login />
    <TableCategories />
    <TableCuisines />
    <CreateAndEditProduct />

    <AddStaff />
    <Cards />


    <Coba /> */}

  </StrictMode>,
)
