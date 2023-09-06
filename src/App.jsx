import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../src/components/NavBar";
import ContainerCardItems from "../src/components/item/ContainerCardItems";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {

  return ( 
    <BrowserRouter>
    <NavBar greeting="2" />
      <Routes>
        <Route path="/home" element={<ContainerCardItems />}/>
        <Route path="/men" element={<ContainerCardItems />}/>
        <Route path="/woman" element={<ContainerCardItems />}/>
      </Routes>
    </BrowserRouter>

    

    );
}
  
  
  export default App
