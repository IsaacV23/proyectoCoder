import Card from 'react-bootstrap/Card';
import  Image  from "./image";
import  Description  from "./Description";
import  Title  from "./Title";
import  ButtonCompra  from "./ButtonCompra";


const CardItem = (props) => {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        <Image image = {props.image}/>
        <Card.Body>
          <Title title = {props.title}/>
          <Description description = {props.description}/>
          <Description description = {"Cantidad: "+props.stock}/>
          <Description description = {"$"+props.price}/>
          <ButtonCompra />
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardItem;

