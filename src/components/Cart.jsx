import { Card, CardBody, CardFooter, CardHeader, Center, Container, Heading } from "@chakra-ui/react";
import { useState, useEffect, useContext } from "react"
import { CartContext } from "../context/ShoppingCartContext"
import Order from "./Order"


const Cart = () => {
  const {cart,setCart} = useContext(CartContext);
  const [totales , setTotales] = useState(0)
  
  useEffect(() => {
    let total = 0
    cart?.forEach(item => {
      total += (item.precio*item.cantidad)
    })
    setTotales(total)
  }), [cart];


const borrarItem = (id) => {
  Swal({
    title: "¿seguro quieres borrar el celular?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Eliminar"
  }).then((result) => {
    if(result.isConfirmed){
      const nuevoCarro = cart.filter(item => item.id !== id);
      setCart(nuevoCarro);
      Swal(
        "Eliminado",
        "success"
      )
    }
  })
}

  return <>
  <div >

  <Center h="100px" color="red">
    <Heading as="h1" size="2x1">
        Carrito de compras
    </Heading>
  </Center>
  {(cart?.length == 0) && <span>no hay productos seleccionados</span>}
  {cart?.map((item) => {
    return(
      <div key={item.id}>

      <Container>
        <img src={item.Imagen} alt="" />
        <Card maxW="sm">
          <CardHeader>
            <Heading size="md">{item.Nombre}</Heading>
          </CardHeader>
          <CardBody>
            <Text as="b">cantidad: {item.Cantidad}</Text>
            <Text>Precio: ARS {item.Precio}</Text>
            <Text>Subtotal: ${item.Precio * item.cantidad}</Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme="red"
            onClick = {() => borrarItem(item.id)}>
              Borrar del carrito
            </Button>
          </CardFooter>
        </Card>
      </Container> 
      </div>
    );
  })}
  {((cart?.length > 0) && <h3>Total : ${totales}</h3>)}
  {((cart?.length > 0) && <Order/>)}
  </div>
  
  </>
}

export default Cart;
