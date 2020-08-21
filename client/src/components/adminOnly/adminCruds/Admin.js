import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

import { connect } from "react-redux";

export function Admin({ categories, getCategoryProducts, getAllProducts }) {

  return (
    <div className="container mt-4">
      <table>
        <thead className="text-center table btn-group">
          <tr>
            <th><Link to="/Admin/CrudProdut"   class="btn btn-outline-warning">Editar Productos</Link></th>
            <th><Link to="/Admin/CrudCategory" class="btn btn-outline-warning">Editar Categorias</Link></th>
            <th><Link to="/Admin/CrudUser"     class="btn btn-outline-warning">Editar Usuarios</Link></th>
            <th><Link to="/Admin/CrudAdmin"    class="btn btn-outline-warning">Editar Administrador</Link></th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
