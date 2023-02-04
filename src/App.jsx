import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting= "----CATEGORIAS----"/>
      <ItemListContainer greeting= "Iphone"/>
      <ItemListContainer greeting= "Samsung"/>
      <ItemListContainer greeting= "Motorola"/>
    </div>

  )
}

export default App