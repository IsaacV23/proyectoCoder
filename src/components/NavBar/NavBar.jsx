import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useCollection } from "../../hooks/useCollection";
import Brand from "../Brand"

const NavBar = () => {
  const { data, loading } = useCollection("categories");
// console.log(data[0]);
// console.log(loading);
  return (
    <Navbar bg="dark" data-bs-theme="dark" >
      <Container>
      <Brand />
      <Link to="/" className="navbar-brand">Home</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {loading ? null : (
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                {data[0].categories.map((category, index) => {
                  return (
                    <NavDropdown.Item key={index}>
                      <Link to={`/category/${category}`} className="navbar-brand">{category}</Link>
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget />
    </Navbar>
  );
};

export default NavBar;