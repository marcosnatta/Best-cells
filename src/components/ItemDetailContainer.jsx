import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";




const ItemDetailContainer = () => {
   const {id} =useParams()
  
  const [productos, setProductos] = useState([]);
  
  useEffect(()=>{
    async function fetchData(){
      try{
        const response = await fetch("/src/data.json")
        const datosFetch = await response.json();
        setProductos(datosFetch);
      }catch(error){   
      }
    }
    fetchData();
  }, []);


  const filtradoproductos = productos.filter((celular)=> celular.id == id);


  return( <>
  {id ? <ItemDetail productos={filtradoproductos}/> : <ItemDetail productos={productos}/>}
  </>
  )
}
export default ItemDetailContainer;