import { Card, CardBody, CardFooter, Stack, Heading,Divider, Button, Image, Text, Center} from '@chakra-ui/react'
import { Link } from "react-router-dom";


const Item = ({id, nombre, stock, categoria, imagen}) => {

  return (

  <div key={id}>
<Center/>
  <Card maxW='sm' bgGradient='linear(red.100 0%, blue.100 25%, green.100 100%)'>
  <CardBody>
    <Image
      src={imagen}
      className="ajustarImagen"/>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{nombre}</Heading>
      <Text>
        Categoria:{categoria}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        Stock:{stock}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <Center>
      <Button colorScheme="blue">
        <Link to={`/item/${id}`}>Detalles</Link>
      </Button>
    </Center>    
  </CardFooter>
</Card>

  </div>
)

}

export default Item
