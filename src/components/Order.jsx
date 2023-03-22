import { useState } from "react"
import{ collection ,getFirestore, addDoc} from "firebase/firestore"
import { Center, Container, FormControl, FormLabel, Heading, Input, Text  } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";



const Order = () => {    

    const [orderId, setOrderId] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("")
    const [domicilio, setDomicilio] = useState("")

    const db = getFirestore();



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

    const handleSubmit = (e) => {
      e.preventDefault();
      addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
    };

    const order = {
      name,
      email,
      telefono,
      domicilio,
    };

    const ordersCollection = collection(db, "ordenes");
    

  return (
   <div>
    <Center>
      <Heading>
        Enviar orden de compra
      </Heading>
    </Center>

    <Container>
      <FormControl>
        <form onSubmit={handleSubmit}>

        <FormLabel>Nombre Completo:</FormLabel>
        <Input type="text"
         placeholder="ej: marcos" onChange={(e) => setName(e.target.value)}>
        </Input>
        <FormLabel>Direccion de mail:</FormLabel>
        <Input
              placeholder="Ejemplo: marcos@mail.com"
              type="email"
              onChange={(e) => setEmail(e.target.value)}/>
          <FormLabel>Numero de telefono:</FormLabel>
          <Input
              type="number"
              placeholder="11****4444"
              onChange={(e) => setTelefono(e.target.value)}
            />
          <FormLabel>Direccion de domicilio:</FormLabel>
          <Input
              type="text"
              placeholder="J.V.Gonzalez 123"
              onChange={(e) => setDomicilio(e.target.value)}
            />
          <Center>

          <Button type="submit" colorScheme="blue" onClick={botonComprar}>Comprar</Button>
          </Center>
        </form>
      </FormControl>
    </Container>

    {orderId && (

    <Center>
      <Text>
        ID de su compra: {" "}
      </Text>
      <Text>
        {orderId}
      </Text>
    </Center>
    )}
   </div>



  )
}


















export default Order
/*
<Button type="submit">Enviar Orden</Button>
    */