import React from 'react'
import DeleteProduct from './DeleteProduct';

const Crud = ({products}) => {
    console.log(products)

    return (
<div className="container mt-4">
  <h2 className="text-center">Edición de productos</h2>
  <table className="table">
    <thead className="text-center">
      <tr>
        <th>Producto</th>
        <th>Descripción</th>
        <th>Editar</th>
        <th>Eliminar</th>
      </tr>
    </thead>
    <tbody>
       {products.map((e, i) =>(
           <tr key={e.id}>
                   <td>{e.name}</td>
                   <td>{e.description}</td>
                   <td><button className="btn btn-success">Editar</button></td>
                   <td>
                   <DeleteProduct id={e.id} />
                   </td>
           </tr>
       ))}


    </tbody>
  </table>
</div>
    )
}

export default Crud
