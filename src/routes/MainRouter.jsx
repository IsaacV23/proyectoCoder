import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Category from "../pages/Category"
import ItemDetails from "../pages/ItemDetails"
import NavBar from "../components/NavBar/NavBar"


const MainRouter = () => {
  return (
    <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryName" element={<Category />} />
            <Route path="/item/:itemId" element={<ItemDetails />} />
        </Routes>
    </Router>
  )
}

export default MainRouter