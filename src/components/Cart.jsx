import { Card, CardBody, CardFooter, CardHeader, Center, Container, Heading, Button, Text, Image } from "@chakra-ui/react";
import { useState, useEffect, useContext } from "react"
import { CartContext } from "../context/ShoppingCartContext"
import Order from "./Order"
import Swal from "sweetalert"


const Cart = () => {
  const {cart, setCart} = useContext(CartContext);
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
    title: "¿seguro quieres borrarlo de su pedido?",
    icon: "warning",
    buttons: true,

    buttons:["continuar la compra","eliminar"] 
  }).then((result) => {
    if(result){
      const nuevoCarro = cart.filter(item => item.id !== id);
      setCart(nuevoCarro);
      Swal(
        "Eliminado",
        "su producto fue eliminado de la lista de compra"
      )
    }
  })
}

const botonComprar = () => {
  swal(
    {
      title: "¿seguro que desea comprar?",
    buttons:  true,
    buttons:["cancelar compra","comprar"]
  }).then((result) => {
    if(result){
      swal(      
      "muchas gracias por comprar",
      "nuestros vendedores se prondran en contacto con usted",
      "success"
      )
    }
  })
}


  return <>
  <div >

  <Center h="100px" color="red" className="estilosTituloCarro">
    <Heading as="h1" size="2x1">
        Carrito de compras
    </Heading>
  </Center>
  {(cart?.length == 0) && <span className="noHayProductos"> UPS No hay productos seleccionados</span>}
  {cart?.map((item) => {
    return(
      <div key={item.id}>
      <Container>    
      
        <Card maxW="sm">
          <CardHeader>
            <Heading size="md">{item.nombre}</Heading>
          </CardHeader>
        <Image src={item.imagen} className="ajustarImagenCart"/>
          <CardBody>
            <Text as="b">cantidad: {item.cantidad}</Text>
            <Text>Precio: ARS ${item.precio}</Text>
            <Text>Subtotal: ${item.precio*item.cantidad}</Text>
          </CardBody>
          <CardFooter>
          <Center>
            <Button colorScheme="red"
            onClick = {() => borrarItem(item.id)}>
              Borrar del carrito
            </Button>
          </Center>

          </CardFooter>
        </Card>
      </Container> 
      </div>
    );
  })}
  <div>
  <Center>
  {cart.length > 0 && (
        <>
          <Container>
            <Center>
            <Text  fontSize="2xl">
              Total: $ {totales}
            </Text>
            </Center>
            <Order cart={cart} totales={totales}/>
          <Center>
            <Button type="submit" colorScheme="blue" onClick={botonComprar}>Comprar</Button>
          </Center>
          </Container>
          
        </>
          
          )}
          </Center>
  </div>
  </div>
  <div>
   
  </div>
  
  </>
}

export default Cart;
