import Item from "./Item"

const itemList = ({productos}) => {
  return (
  <>

  <div className="contenedorProductos">

   <div className="posicionCelular" >
    {productos?.map((celular)=>(
      
     
      <Item
      key={celular.id}
      id={celular.id}
      nombre={celular.nombre}
      precio={celular.precio}
      stock={celular.stock}
      categoria={celular.categoria}
      />
      
      
      ))}

  </div>

  
  </div>
  </>
  );
};



export default itemList;