import ItemList from "./ItemList";
import React, {useEffect, useState} from "react";


const ItemListContainer = () => {  
  const [productos, setProductos]= useState([]);
  console.log(productos)
  useEffect(()=>{
    async function fetchData(){
      try{
        const response = await fetch("/src/data.json")
        const datosFetch = await response.json();
        setProductos(datosFetch);
      }catch(error){
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return<> 

     <ItemList productos={productos}/>
 
  </>
}

export default ItemListContainer
