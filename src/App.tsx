import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Men from './components/MenProducts/Men'
import Woman from './components/WomanProducts/Woman'
import Liked from './components/LikedProducts/Liked'
import Pannier from './components/Pannier/Pannier'
import NoPage from './components/NoPage/NoPage'
import './App.css'
import './index.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Men" element={<Men />} />
            <Route path="Woman" element={<Woman />} />
            <Route path="Liked" element={<Liked />} />
            <Route path="Pannier" element={<Pannier />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
