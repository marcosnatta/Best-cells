import { Card, CardBody, CardFooter, CardHeader, Center, Container, Heading } from "@chakra-ui/react";
import { useState, useContext } from "react"
import { CartContext } from "../context/ShoppingCartContext"
import Order from "./Order"


const Cart = () => {
  const {cart,setCart} = useContext(CartContext);
  const [nombreUsuario, setNombreUsuario] = useState("")
  const [mailUsuario, setMailUsuario] = useState("")

   
  return <>
  <Center h="100px" color="red">
    <Heading as="h2" size="2x1">
      Carrito
    </Heading>
  </Center>
  {cart.map((item) => {
    return(
      <Container key={item.id}>
        <Card maxW="sm">
          <CardHeader>
            <Heading size="md">{item.Nombre}</Heading>
          </CardHeader>
          <CardBody>
            <Text as="b">cantidad: {item.cantidad}</Text>
            <Text>Precio: ARS {item.Precio}</Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme="red"
            onClick = {() => console.log("eliminando")}>
              Borrar del carrito
            </Button>
          </CardFooter>
        </Card>
      </Container> 
    );
  })}
  <Order/>
  </>
}

export default Cart;
