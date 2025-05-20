import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductDetail from './components/ProductDetail.jsx'
import Login from './login.jsx'
import Navbar from './components/Navbar.jsx'
import TableCuisines from './TableCuisines.jsx'
import CreateAndEditProduct from './components/CreateAndEditProduct.jsx'
import AddStaff from './components/AddStaff.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <App />
    <ProductDetail />
    <Login />
    <TableCuisines />
    <CreateAndEditProduct />

    <AddStaff />

  </StrictMode>,
)
