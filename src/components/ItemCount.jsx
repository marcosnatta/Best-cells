import { useContext, useState } from 'react';
import { Button} from '@chakra-ui/react';
import {CartContext} from "../context/ShoppingCartContext";


const ItemCount = ({stock, id, price, name}) => {

    const[cart, setCart] = useState(CartContext);
    const[count, setCount] = useState(1)

    const SumarCantidad = ()=>{
      setCount(count + 1);
    }

    const RestarCantidad = ()=>{
      setCount(count - 1);
    }

  const AgregarACarrito = ()=>{
    setCart((currItems)=>{
      const itemEncontrado = currItems.find((item)=> item.id === id);
      if(itemEncontrado){
        return currItems.map((item)=>{
          if (item.id === id) {
            return{...item, cantidad: item.cantidad + count };
          } else{
            return item;
          }
        });
      } else{
        return [...currItems, {id, cantidad: count, precio, nombre}]
      }
    });
  };

  return (
    <>

    

    </>
  )
}

export default ItemCount
