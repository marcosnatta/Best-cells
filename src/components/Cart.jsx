import React from 'react'

import {
  FormControl,
  FormLabel,
  Button,
  FormHelperText,
  Input,
  Select,
  Center
} from '@chakra-ui/react'


const Cart = () => {
  return (
  <div className='fondoCart'>

    <div className='formularioTitle'>

     <h1>Formulario de compra</h1>   

    </div>


   <div className='espaciadoCart'>   
  <Center className='centerForm'>

   <FormControl>
<Center>
  <FormLabel>Correo electronico</FormLabel>
</Center>  
  <Input placeholder='hola@gmail.com' type='email'/>
  <Center>
  <FormHelperText>*En el se enviara su factura de compra</FormHelperText>  
  </Center>
</FormControl>

<FormControl isRequired>
  <br>
  </br>
  <br>
  </br>
<Center>  
  <FormLabel>nombre completo</FormLabel>
</Center>

  <Input placeholder='ej: juan costa' />

</FormControl>

<FormControl>
<Center>
<br>
  </br>
  <br>
  </br>
  <br>
  </br>
  
  <FormLabel>Seleccione su provincia</FormLabel>
  </Center>
  <Center>  
</Center>
  <Select placeholder='Provincia'>
    <option>Gran Buenos aires</option>
    <option>Buenos aires</option>
    <option>Santa Fe</option>
    <option>Cordoba</option>
    <option>La Pampa</option>
    <option>Mendoza</option>
  </Select>
</FormControl>
<br>
  </br>
  <br>
  </br>
<Button bg="violet">Enviar</Button>

  </Center>
   </div>
  </div>
  )
}

export default Cart
