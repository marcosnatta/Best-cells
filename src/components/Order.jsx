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
        <Input
              placeholder="Ejemplo: marcos@mail.com"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              />
          <Input
              type="number"
              placeholder="11****4444"
              onChange={(e) => setTelefono(e.target.value)}
            />
          <Input
              type="text"
              placeholder="J.V.Gonzalez 123"
              onChange={(e) => setDomicilio(e.target.value)}
            />
          <Button type="submit">Enviar Orden</Button>
        </form>
      </FormControl>
    </Container>

    
    <Center>
      <Text>
        ID de su orden: {" "}
      </Text>
      <Text>
        {orderId}
      </Text>
    </Center>
   </div>



  )
}


















export default Order
/*

<div>
      <form onSubmit={handleSubmit}>
        <input type="text"
        placeholder="Nombre y Apellido"
        onChange={(e) => setName(e.target.value)}
         />



         <input type="text"
         placeholder="Email"
         onChange={(e)=> setEmail(e.target.value)}
          />

        <button type="submit">Enviar Informacion</button>
      </form>
    <p>Numero de Orden: {OrderId}</p>      
    </div>

    */