
import Nav from 'react-bootstrap/Nav';


const ItemListContainer  = () => {
  return (
    <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#men">Men</Nav.Link>
        <Nav.Link href="#woman">Woman</Nav.Link>
    </Nav>
  );
}

export default ItemListContainer;