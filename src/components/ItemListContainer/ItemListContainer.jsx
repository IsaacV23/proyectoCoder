import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "../item/image"
import Description from "../item/Description";
import Title from "../item/Title"
import "../../css/containerCardItems.css";

const ItemListContainer = ({ productsData }) => {
const navigate = useNavigate();
  
  return (
    <div className="CardItems">

      {productsData.map((product) => {
        return (
          <Card style={{ width: "18rem" }} key={product.id} className="CardItems">
            <Image variant="top" className="Img" image = {product.img}/>
            <Card.Body>
            <Title title = {product.title}/>
            <Description description = {product.description}/>
              <Button
              className="btn"
                variant="primary"
                onClick={() => navigate(`/item/${product.id}`)}
              >
                Ver Mas
              </Button>
            </Card.Body>
          </Card>
          
        );
      })}
    </div>
    
  );
};

export default ItemListContainer;