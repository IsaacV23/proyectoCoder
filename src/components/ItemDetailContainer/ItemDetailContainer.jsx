import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ItemCount from "../ItemCount/ItemCount";
import "../../css/containerCardItems.css";
import Image from "../item/image"



const ItemDetailContainer = ({ productData }) => {
  const [stock, setStock] = React.useState(10);
  const [onAdd, setOnAdd] = React.useState(false);

  const buttonStyles = {
    backgroundColor: "blue",
  };

  const buttonStylesOnAdd = {
    backgroundColor: "green",
  };

  return (
    <div className="CardItems">
      <Card style={{ width: "18rem" }} className="CardItems">
      <Card.Img variant="top"  src={productData.img} />
      <Card.Body>
        <Card.Title>{productData.title}</Card.Title>
        <Card.Text>{productData.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{productData.price}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <ItemCount />
        {stock >= 3 ? (
          <strong>Disponible</strong>
        ) : (
          <strong>Ultimas unidades!</strong>
        )}
      </Card.Body>
    </Card>
    </div>
    
  );
};

export default ItemDetailContainer;