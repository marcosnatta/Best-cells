import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from "./components/Cart"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
     <>
  <BrowserRouter>
  <NavBar/>
  <Routes>
  <Route exact path='/' element={<ItemListContainer/>}/>
    <Route exact path='/catalogo' element={<ItemListContainer/>}/>
    <Route exact path='/categoria/:categoria' element={<ItemListContainer/>}/>
    <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
    <Route exact path='/cart' element={<Cart/>}/>
  </Routes>
  </BrowserRouter>
    
    </>

  )
}

export default App