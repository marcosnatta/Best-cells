import ItemList from "./ItemList";
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const[products, setProducts] = useState([])

    useEffect(() =>{
        const db = getFirestone();

const itemsCollection = collection(db, "celulares");
getDocs(itemsCollection).then((snapshot)=>{
    const docs = snapshot.docs.map((doc)=> doc.data())
    setProducts(docs);
});
},[]);






  return (
    <div>
      {products.map((prod)=>
      <div key={prod.marca}>
        <h4>marca: {prod.marca}</h4>
        <p>${prod.precio}</p>
      </div>
      )}
    </div>
  )
}

/*
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
*/

export default ItemListContainer
