import imgcelular from "../assets/celular.jpg"
import { Card, CardBody, CardFooter,Stack,Heading,Button,Text,Image, Center } from '@chakra-ui/react'
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"

const ItemDetail = ({productos}) => {
  return (<>
  {productos.map((celular)=>(



    <div key={celular.id} className="DetailEstilos">
<div className="contenedorCelulares" >
      <Card maxW='sm'  bgGradient='linear(red.100 0%, blue.100 25%, green.100 100%)'>

  <CardBody>
  <Image
      src={imgcelular}
      />
    <Stack mt='7' spacing='4' color='purple'>
      <Heading size='xl'>{celular.nombre}</Heading>
      <Text color='black' fontSize='2xl' >
        Descripcion:{celular.descripcion}
      </Text>
      <Text color='black' fontSize='1xl' >
        Categoria:{celular.categoria}
      </Text>
      <Text color='black' fontSize='1xl'>
        Stock:{celular.stock}
      </Text>
      <Text color='black' fontSize='1xl'>
        Precio:$ARS {celular.precio}
      </Text>
    </Stack>
  </CardBody>
  <Center>

  <div>
      <ItemCount/>
  </div>
  </Center>
  <Center>
  <CardFooter>
    <Link to="/cart">
      <Button colorScheme='blue'color='black'> 
      <Text>Añadir al carro</Text>
      </Button>
    </Link>
  </CardFooter>
  </Center>
</Card>
</div>
 </div>


  ))}
  </>
   
  )
}

export default ItemDetail
