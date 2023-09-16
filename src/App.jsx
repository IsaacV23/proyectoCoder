import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../src/components/NavBar";
import ContainerCardItems from "./components/item/ContainerCardItems";
import ItemDetailContainer from "./components/item/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {

  return ( 
    <BrowserRouter>
    <NavBar greeting="2" />
      <Routes>
        <Route path="/" element={<ContainerCardItems />}/>
        <Route path="/item/:id" element={<ItemDetailContainer />}/>
        <Route path="/category/:idCategory" element={<ContainerCardItems />}/>
      </Routes>
    </BrowserRouter>

    

    );
}
  
  
  export default App
