import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Brand = () => {
  return (
    <Link to="/" className="navbar-brand">
      <Navbar.Brand href="/">Urban Style</Navbar.Brand>
    </Link>
  );
}
export default Brand;