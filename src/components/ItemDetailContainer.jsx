import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore} from "firebase/firestore";
import ItemDetail from "./ItemDetail";
const ItemDetailContainer = () => {

  const [product, setProduct ] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const celusCollection = collection(db, "Celulares Moviles");

    getDocs(celusCollection).then ((snapshot) => {
      const celulares = snapshot.docs.map((doc) => ({...doc.data(),
      id: doc.id
    }));
      setProduct(celulares)
      
    });
  },[]);


  return <ItemDetail celulares ={product}/>
}

export default ItemDetailContainer;

