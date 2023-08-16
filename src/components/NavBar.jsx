import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Brand from "./Brand";
import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";

const NavBar  = ({greeting}) => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Brand />
          <ItemListContainer/>
        </Container>
        <CartWidget/>
        <samp>{greeting}</samp>
      </Navbar>
      
    </>
  );
}

export default NavBar;