import CardItem from "./CardItem";
import Productos from "../../utils/productos";
import Simulador from "../../utils/fetch";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../css/containerCardItems.css";
import  ButtonAddCart  from "./ButtonAddCart";
import  ButtonDetalles  from "./ButtonDetalles";

const ItemDetailContainer = () => {
  const [datos, setDatos] = useState ([]);
  const {id} = useParams();
  useEffect(() => {
        Simulador(Productos.filter(filter => filter.id == id),1000)
        .then(resp => setDatos(resp))
        .catch(error => console.log(error))
    
    
  }, [id])
 

    return (
        < div className="containerCardItems">
        {
            datos.map(producto => (
               <>
               <CardItem
                    title={producto[0].title}
                    description={producto[0].description}
                    price={producto[0].price}
                    image={producto[0].image}
                    stock={producto[0].stock}
                />
                <ButtonAddCart cant={5}/>
                <ButtonDetalles txt='Agregar al carrito' />
               </>
               
                
                ))

                
        }
        </div>
        );
}

export default ItemDetailContainer;