import Navbar from "./Components/Navbar/Navbar"
import {BrowserRouter, Route, Routes} from "react-router-dom"

import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup"
import Footer from "./Components/Footer/Footer"
import men_banner from "./assets/banner.jpg"
import women_banner from "./assets/women_banner.avif"
import kids_banner from "./assets/kids_banner.jpg"
import Shop from "./Pages/Shop";

function App() {
 
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/men" element={<ShopCategory category="men" banner={men_banner} />} />
        <Route path="/women" element={<ShopCategory category="women" banner={women_banner} />} />
        <Route path="/kids" element={<ShopCategory category="kids" banner={kids_banner} />} />
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
     
  )
}

export default App