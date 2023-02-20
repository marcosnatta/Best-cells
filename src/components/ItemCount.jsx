import { useState } from "react"
import { Button, InputGroup} from '@chakra-ui/react'
const ItemCount = () => {

    const[numero, setNumero] = useState(1)


  if (numero < 0) {
    setNumero(numero + 1)   
  }


  return (
    <>

    <div className="espaciadoDetail">

    <Button onClick={()=> setNumero(numero - 1)}>-</Button>
    <span>{numero}</span>
    <Button onClick={()=> setNumero(numero + 1)}>+</Button>
    </div>

    </>
  )
}

export default ItemCount
