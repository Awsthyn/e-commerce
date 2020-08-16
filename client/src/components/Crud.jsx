import React from 'react'

const Crud = ({products}) => {
    console.log(products)
    function deleteProduct(id){
        console.log(id)
        const ProductId = id
        const url = 'http://localhost:3001/products/' + ProductId;
    
            fetch(url, {
                method: 'DELETE',
                //body: JSON.stringify({ id : ProductId }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                console.info(res)
                alert("El Producto se ha Eliminado correctamente")
            })
            .catch(err => console.error(err))
        }
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
           <tr>
                   <td>{e.name}</td>
                   <td>{e.description}</td>
                   <td><button className="btn btn-success">Editar</button></td>
                   <td><button data-id={e.id} className="btn btn-danger" onClick={e => deleteProduct(e.target.getAttribute('data-id'))}>Eliminar</button></td>
           </tr>
       ))} 
      

    </tbody>
  </table>
</div>
    )
}

export default Crud
