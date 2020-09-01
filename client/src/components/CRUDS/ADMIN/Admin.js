import React from "react";
import { Link } from "react-router-dom";


export function Admin({ categories, getCategoryProducts, getAllProducts }) {

  return (
    <div className="container mt-4">
      <table>
        <thead className="text-center table btn-group">
          <tr>
            <th><Link to="/Admin/CrudProduct"   className="btn btn-warning">Editar Productos</Link></th>
            <th><Link to="/Admin/CrudCategory" className="btn btn-warning">Editar Categorias</Link></th>
            <th><Link to="/Admin/CrudUser"     className="btn btn-warning">Editar Usuarios</Link></th>
            <th><Link to="/Admin/OrderTable"   className="btn btn-warning">Editar Ordenes</Link></th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
