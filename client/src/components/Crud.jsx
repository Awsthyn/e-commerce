import React from 'react'
import { Link } from 'react-router-dom';
import DeleteProduct from './DeleteProduct';
import EditProductForm from './EditProductForm';
import { onDeleteProduct } from "../Redux/actions"
import { connect } from "react-redux";


const Crud = ({ products, onDeleteProduct} ) => {

    function handleDelete(product) {
        console.info('le digo a app que elimina:', product)
         onDeleteProduct(product)
    }

    return (
        <div className="container mt-4">
        <Link to="products/form/new" className="btn btn-success">Nuevo</Link>
        <h2 className="col-11 text-center">Edición de productos</h2>
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
                           <td> <Link
                               to={{
                                 pathname: `/products/${e.id}/edit`,
                                 state: { product : e }
                               }}
                               className= "btn btn-success"
                             >Editar</Link>
                             </td>
                             <td>

                             <DeleteProduct id={e.id} handleDelete={handleDelete.bind(this)} /></td>
                   </tr>
               ))}

            </tbody>
  </table>
</div>
    )
}

function mapStateToProps(state) {
  return {
      categories: state.categories,
      products: state.products 
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onDeleteProduct: (id) => dispatch(onDeleteProduct())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Crud);
