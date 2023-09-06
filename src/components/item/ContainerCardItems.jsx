import CardItem from "./CardItem";
import Productos from "../../utils/productos";
import Simulador from "../../utils/fetch";
import { useState, useEffect } from "react";


const ContainerItem = () => {
    const [datos, setDatos] = useState ([]);
  useEffect(() => {
    Simulador(Productos,2000)
    .then(resp => setDatos(resp))
    .catch(error => console.log(error))
  }, [])
 

    return (
        <>
        {
            datos.map(producto => (
               
                <CardItem
                    key={producto.id}
                    title={producto.title}
                    description={producto.description}
                    price={producto.price}
                    image={producto.image}
                    stock={producto.stock}
                />
                ))
        }
        </>
        );
}

export default ContainerItem;