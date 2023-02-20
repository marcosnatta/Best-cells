import ItemList from "./ItemList";
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Center } from '@chakra-ui/react'

const ItemListContainer = () => {
    
  const {categoria} =useParams()
  

  const [productos, setProductos]= useState([]);
  
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



const filtradoproductos = productos.filter((celular)=> celular.categoria === categoria);

  return<> 
    <div>
   {categoria ? <ItemList productos={filtradoproductos}/> : <ItemList productos={productos}/>}
    </div>
 
  </>
}


export default ItemListContainer
