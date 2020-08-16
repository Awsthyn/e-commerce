import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar.jsx';


function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark d-flex justify-content-between">
      <div className="btn-group" role="group" aria-label="Basic example">
        <Link to= "/catalog">
          <button className="btn btn-sm btn-secondary">Catalogo</button>
        </Link>
        <Link to="/products/:id">
          <button className="btn btn-sm btn-secondary">Detalle Producto</button>
        </Link>
        <SearchBar
          onSearch={onSearch}
        />
        <Link to="/products/form/new">
          <button className="btn btn-sm btn-success">New Form</button>
        </Link>
        <Link to="/products/1/edit">
          <button className="btn btn-sm btn-primary">Edit Form---link hardcodeado</button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
