import React from 'react'
import CartWidget from './CartWidget'
import { Text } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { Button} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const NavBar = () => {
  return (
    <div className = "barranavegacion">
      <h1 className = "tituloNavBar" > 
      <Text fontSize='3xl'>Best-cells</Text>  
      </h1>

    <div>
  <Menu>
  <Button className = "botoncelulares" fontSize='2xl'>Catalogo</Button>
  <MenuButton  fontSize='2xl'  className = "botoncelulares" as={Button} rightIcon={<ChevronDownIcon />}>
  <Text >Celulares</Text>
  </MenuButton>
  <MenuList>
    <MenuItem>Iphone</MenuItem>
    <MenuItem>Motorola</MenuItem>
    <MenuItem>Samsung</MenuItem>
  </MenuList>
  </Menu>
    
    </div>
      <CartWidget/>
      
    </div>
  )
}

export default NavBar
