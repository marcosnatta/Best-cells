import { Card, CardBody, CardFooter,Stack,Heading,Button,Text,Image, Center, Divider, ButtonGroup } from '@chakra-ui/react'
import ItemCount from "./ItemCount"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import {doc, getDoc, getFirestore} from "firebase/firestore"






const ItemDetail = ({celulares}) => {
  const { id } = useParams();
  console.log(id)

  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const importBaseDatos = doc(db, "Celulares Moviles", `${id}`);

    getDoc(importBaseDatos).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto(snapshot.data());
      } else {
        console.log("no existe el producto")
      }
    });
 }, []);
 
 const filtro = celulares.filter((productos) => productos.id === id)

  return (
  <>
  {filtro.map((producto)=>(
  <div key={producto.id} className="DetailEstilos">


    <Center>
      <Card maxW='sm'  bgGradient='linear(red.100 0%, blue.100 25%, green.100 100%)'>
  <CardBody>
  <Image
      src={producto.Imagen}
      />
    <Stack mt='7' spacing='4' color='purple'>
      <Heading size='xl'>{producto.Nombre}</Heading>
      <Text color='black' fontSize='2xl' >
        Descripcion:{producto.Descripcion}
      </Text>
      <Text color='black' fontSize='1xl' >
        Categoria: {producto.Categoria}
      </Text>
      <Text color='black' fontSize='1xl'>
        Stock:{producto.Stock}
      </Text>
      <Text color='black' fontSize='1xl'>
        Precio:$ARS {producto.Precio}
      </Text>
    </Stack>
  </CardBody>
  <Divider/>
  <CardFooter>
  <ButtonGroup>
    <ItemCount 
    stock = {producto.Stock}
    id= {producto.id}
    precio = {producto.Precio}
    nombre = {producto.Nombre}
    />
  </ButtonGroup>
  </CardFooter>
</Card>
</Center>

 </div>


  ))}
  </>
   
  );
}

export default ItemDetail
