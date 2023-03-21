import React from 'react'
import CartWidget from './CartWidget'
import { Text } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { Button} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className = "barranavegacion">
      <h1 className = "tituloNavBar" > 
      <Link to="/catalogo">
      <Text fontSize='3xl'>Best-cells</Text>  
      </Link>
      </h1>

     
  <Menu>
   
   
  <Link to="/catalogo">
  <Button className = "botoncelulares" fontSize='2xl'>Catalogo</Button>
  </Link>
   
    
  
  <MenuButton  fontSize='2xl'  className = "botoncelulares" as={Button} rightIcon={<ChevronDownIcon />}>

  <Text >Categoria</Text>
  </MenuButton>
   
  <MenuList>
    <Link to={`/categoria/${"iphone"}`}>
    <MenuItem>Iphone</MenuItem>
    </Link>

    <Link to={`/categoria/${"motorola"}`}>
    <MenuItem>Motorola</MenuItem>
    </Link>
    
    <Link to={`/categoria/${"samsung"}`}>
    <MenuItem>Samsung</MenuItem>
    </Link>
  </MenuList>
  </Menu>
    
    <Link to="/cart">  
      <CartWidget/>
    </Link>
      
    </div>
  )
}

export default NavBar
