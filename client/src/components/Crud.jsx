import React from 'react'
import { Link } from 'react-router-dom';
import DeleteProduct from './DeleteProduct';
import EditProductForm from './EditProductForm';


const Crud = ({products} ) => {

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
        {products.map((e, i) => (
           <tr key={e.id}>
                   <td>{e.name}</td>
                   <td>{e.description}</td>
                   <td>

                   <button className="btn btn-success" >Editar</button></td>
                   <td>
                   <DeleteProduct id={e.id} />
                   </td>
                   <td> <Link
                       to={{
                         pathname: `/products/${e.id}/edit`,
                         state: { product : e }
                       }}
                     >Edi</Link></td>
           </tr>
       ))}


    </tbody>
  </table>
</div>
    )
}

export default Crud
