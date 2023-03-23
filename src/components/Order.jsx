import { useState, useContext } from "react"
import {CartContext} from "../context/ShoppingCartContext"
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
        <span>Antes de efectuar la compra usted debera obtener su identificiacion de compra "ID"</span>
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
          <Button type="submit">obtener ID de su compra</Button>
        </form>
      </FormControl>
    </Container>
    <Center>
      <Text>
        El ID de su compra es: {" "}
      </Text>
      <Text>
        {orderId}
      </Text>
    </Center>
 
   </div>
  )
}

export default Order
