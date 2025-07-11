import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { BrowserRouter, Routes, Route } from "react-router";
import App from './App';
import Login from './pages/Login';
// import LoggedInHomePage from './pages/LoggedInHomePage';
import TableCuisines from './pages/TableCuisines';
import TableCategories from "./pages/TableCategories";
import CreateAndEditProduct from './pages/CreateAndEditProduct';
import MainLayout from './Layouts/MainLayout';
import CuisineDetail from './pages/CuisineDetail';
import AuthLayout from './Layouts/AuthLayout';
import AddUser from './pages/AddUser';
import UploadImage from './pages/UploadImage';
// import CreateAndEditProduct from './pages/CreateAndEditProduct';
// import Login from './pages/login';
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
        <Route path='/cuisine/detail/:id' element={<CuisineDetail />} />

        <Route element={<AuthLayout />}>
          <Route path='/login' element={<Login />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path='/cuisines' element={<TableCuisines />} />
          <Route path='/cuisines/add' element={<CreateAndEditProduct />} />
          <Route path='/cuisines/edit/:id' element={<CreateAndEditProduct />} />
          <Route path='/categories' element={<TableCategories />} />
          <Route path='/users/add' element={<AddUser />} />
          <Route path='/image/upload/:id' element={<UploadImage />} />
        </Route>
        {/* <Route path="/cuisines/add" element={<CreateAndEditProduct />} />
        <Route path="/loggedin" element={<LoggedInHomePage />} /> */}
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
