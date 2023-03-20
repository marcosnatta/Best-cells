import Item from "./Item"
import { Container } from "@chakra-ui/react";



const itemList = ({celulares}) => {
  
return (

  <div>

  <Container>
    
    {celulares?.map((productos)=>(

  <Item
  key={productos.id}
  id={productos.id}
  nombre={productos.Nombre}
  precio={productos.Precio}
  stock={productos.Stock}
  categoria={productos.Categoria}
  imagen = {productos.Imagen}
  />
  

))}
  </Container>
</div>

)

};



export default itemList;

