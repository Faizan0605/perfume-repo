
import Home from "./pages/Home"
import Products from "./pages/Products"
import OneProduct from "./components/product/OneProduct"
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {


  return (
    <>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Products />} />
        <Route path="/product/:id" element={<OneProduct />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
