import Item from "./Item"



const itemList = ({celulares}) => {
  
return (

  <div className="contenedoresCelus"> 
    {celulares?.map((productos)=>(

  <Item
  key={productos.id}
  id={productos.id}
  nombre={productos.Nombre}
  precio={productos.Precio}
  stock={productos.Stock}
  categoria={productos.Categoria}
  imagen = {productos.Imagen}
  />
  

))}
</div>

)

};



export default itemList;

