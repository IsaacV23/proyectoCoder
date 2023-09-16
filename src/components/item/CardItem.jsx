import Card from 'react-bootstrap/Card';
import  Image  from "./image";
import  Description  from "./Description";
import  Title  from "./Title";
import  ButtonAddCart  from "./ButtonAddCart";
import  ButtonDetalles  from "./ButtonDetalles";
import "../../css/containerCardItems.css"

const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;
const CardItem = (props) => {
  return (
    <div className="CardItems">
      <Card style={{ width: '18rem' }}>
        <Image className="Img" image = {props.image}/>
        <Card.Body>
          <Title title = {props.title}/>
          <Description description = {props.description}/>
          <Description description = {"Cantidad: "+props.stock}/>
          <Description description = {"$"+props.price}/>
          <ButtonDetalles />
          {tab}
          <ButtonAddCart />
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardItem;

