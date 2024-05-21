import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Liked from './components/LikedProducts/Liked'
import Pannier from './components/Pannier/Pannier'
import NoPage from './components/NoPage/NoPage'
import Products from './components/Products/Products'
import './App.css'
import './index.css'
import Contact from './components/Contact/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Products" element={<Products />} />
            <Route path="Liked" element={<Liked />} />
            <Route path="Pannier" element={<Pannier />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
