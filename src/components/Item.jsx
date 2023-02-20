import imgcelular from "../assets/celular.jpg"
import { Card, CardBody, CardFooter, Stack, Heading,Divider,Button,Image,Text,} from '@chakra-ui/react'
import { Link } from "react-router-dom";

const Item = ({id, nombre, stock, categoria}) => {
  return (

    <div className="contenedorCelulares">
      <div key={id} className="estilosCelus">
    <Card maxW='sm' bgGradient='linear(red.100 0%, blue.100 25%, green.100 100%)'>
  <CardBody>
    <Image
      src={imgcelular}
      />
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


      <Button colorScheme='green'>
    <Link to={`/item/${id}`}>
        Detalles del producto
    </Link>
      </Button>

  </CardFooter>
</Card>
      </div>
</div>


    


  )
};

export default Item
