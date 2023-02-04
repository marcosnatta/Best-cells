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
    <div class = "barranavegacion">
      <h1 class = "tituloNavBar" > 
      <Text fontSize='3xl'>Best-cells</Text>  
      </h1>

    <div>
  <Menu>
  <MenuButton  fontSize='2xl'  class = "botoncelulares" as={Button} rightIcon={<ChevronDownIcon />}>
  <Text >Celulares</Text>
  </MenuButton>
  <MenuList>
    <MenuItem>Nuevos</MenuItem>
    <MenuItem>Usados</MenuItem>
    <MenuItem>Contacto</MenuItem>
  </MenuList>
  </Menu>
    
    </div>
      <CartWidget/>
      
    </div>
  )
}

export default NavBar
