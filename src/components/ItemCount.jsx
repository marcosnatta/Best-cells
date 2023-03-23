import { useContext, useState } from 'react';
import { Button} from '@chakra-ui/react';
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import {CartContext} from "../context/ShoppingCartContext";


const ItemCount = ({stock, id, precio, nombre, imagen}) => {

    const{cart, setCart} = useContext(CartContext);
    const[count, setCount] = useState(1)

    const sumar = ()=>{
      const contador = count + 1;
      if (contador <= stock){
        setCount(contador)
      } 
    }

    const restar = ()=>{
      setCount( count - 1)
      if(count < 0){
        setCount(count + 1)
      }
    }

  const AgregarAlCarrito = ()=>{
    setCart((currItems)=>{

     

        const itemAdd = currItems.find((item)=> item.id === id);
        
        
        if(itemAdd){
        return currItems.map((item)=>{
          if (item.id === id) {
            return{...item, cantidad: item.cantidad + count };
          } else{
            return item;
          }
        });
      } else{
        return [...currItems, {id, cantidad: count, precio, imagen, nombre}]
      }
    
    });
  };

  return (
    <>
 <Button variant="solid" colorScheme="gray">
        <MinusIcon onClick={restar} />
      </Button>

      <Button onClick={()=> AgregarAlCarrito()} variant="solid" colorScheme="blue">
      Añadir al carrito: {count}
       </Button>

      <Button variant="solid" colorScheme="gray" onClick={sumar} >
        <AddIcon boxSize={4} />
      </Button>
    

    </>
  )
}

export default ItemCount
