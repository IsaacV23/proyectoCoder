
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";


const ItemListContainer  = (props) => {
  return (
    <Nav className="me-auto">
        <Nav.Link><Link to= "category/Home">{props.item1}</Link></Nav.Link>
        <Nav.Link><Link to= "category/Men">{props.item2}</Link></Nav.Link>
        <Nav.Link><Link to= "category/Woman">{props.item3}</Link></Nav.Link>
    </Nav>
  );
}

export default ItemListContainer;