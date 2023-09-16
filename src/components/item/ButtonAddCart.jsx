import Button from 'react-bootstrap/Button';
import CartWidget  from "../CartWidget";

const ButtonAddCart = (props) => {
  return (
    
    <Button variant="primary">
      <CartWidget />
    </Button>
    );
}

export default ButtonAddCart;