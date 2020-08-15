import React, { useState } from 'react';
import { Link, NavLink} from 'react-router-dom';
import SearchBar from './searchBar.jsx';


function Nav({onSearch}) {
  let [clase, setClase] = useState("btn btn-success");

 function handleClick(e) {
     setClase = {
         clase: "btn btn-success active"
     }
    console.log('The link was clicked.');
  }
  return (
   <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
          <div className="navbar-nav" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li classNameName="nav-item">
                <NavLink to= "/catalog" className="nav-link">Catalogo</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products/:id" className="nav-link">Detalle Producto</NavLink>
              </li>
            <li className="nav-item">
               <NavLink to="/products/form/new" className="nav-link">Agregar Producto</NavLink>
             </li>
             <li className="nav-item">
                <NavLink to="/products/1/edit" className="nav-link">Editar Producto</NavLink>
              </li>
            <li className="nav-item">
               <NavLink to="/categories/form/new" className="nav-link">Agregar Categoría</NavLink>
             </li>
           </ul>
            <SearchBar
              onSearch={onSearch}
            />
            </div>
      </nav>
    </div>
  );
};

export default Nav;
