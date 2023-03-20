import { useEffect, useState} from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";


const ItemListContainer = () => {
  const [celulares, setCelulares] = useState([]);
  const { Categoria } = useParams()

  useEffect(() => {
    const db = getFirestore();

    const celusCollection = collection(db, "Celulares Moviles");
    getDocs(celusCollection).then ((querysnapshot) => {
      const celulares = querysnapshot.docs.map((doc) => ({...doc.data(),
      id: doc.id
    }));
    setCelulares(celulares)
      console.log(celulares)
    });
  },[]);
    

 const filtro = celulares.filter((productos) => productos.Categoria === Categoria)

 return (

   <div>
<h2>Celulares por categoria</h2>
{Categoria ? <ItemList celulares={filtro}/> : <ItemList celulares={celulares}/>} 


</div>

) 
}


export default ItemListContainer
