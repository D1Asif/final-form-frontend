import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import AboutUsPage from './pages/AboutUsPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import ProductManagementPage from './pages/ProductManagementPage'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/products/:productId' element={<ProductDetailsPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/product-management' element={<ProductManagementPage />} />
          <Route path='/about-us' element={<AboutUsPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
