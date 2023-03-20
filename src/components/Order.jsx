import { useState } from "react"
import{collection ,getFirestore, addDoc} from "firebase/firestore"


const Order = () => {

    const [OrderId, setOrderId] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const db = getFirestore();

    const handleSubmit = (e) => {
      e.preventDefault();
      addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
    };

    const order = {
      name,
      email,
    };

    const ordersCollection = collection(db, "Celulares Moviles");
    

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"
        placeholder="Nombre y Apellido"
        onChange={(e) => setName(e.target.value)}
         />



         <input type="text"
         placeholder="Email"
         onChange={(e)=> setEmail(e.target.value)}
          />

        <button type="submit">Enviar Informacion</button>
      </form>
    <p>Numero de Orden: {OrderId}</p>      
    </div>
  )
}

export default Order
