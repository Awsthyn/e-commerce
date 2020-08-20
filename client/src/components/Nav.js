import React, { useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { getAllCategories, getSearchedProducts, getAllProducts, getCategoryProducts } from "../Redux/actions/actions"
import { connect } from "react-redux";

export function Nav({ categories, getCategoryProducts }) {
  let [clase, setClase] = useState("btn btn-success");
  let history = useHistory();

  function handleClick(e) {
    setClase = {
      clase: "btn btn-success active",
    };
    console.log("The link was clicked.");
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          MERCADO NEGRO
        </a>
        <div className="navbar-nav" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/catalog" className="nav-link">
                Catalogo
              </NavLink>
            </li>
            <li>
              <MDBDropdown>
                <MDBDropdownToggle caret color="dark">
                  Categorias
                </MDBDropdownToggle>
                <MDBDropdownMenu basic>
                  {categories.map((e) => (
                    <Link>
                      <MDBDropdownItem
                        key={e}
                        data-id={e.id}
                        name={e.name}
                        onClick={(e) => {
                          getCategoryProducts(e.target.getAttribute("name"))
                          history.push(`/catalog/${e.target.getAttribute("name")}`
                          );
                          e.preventDefault();
                        }}
                      >
                        {e.name}
                      </MDBDropdownItem>
                    </Link>
                  ))}
                </MDBDropdownMenu>
              </MDBDropdown>
            </li>

            <li className="nav-item">
              <NavLink to="/crud" className="nav-link">
                Administrar Productos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/CrudCategory" className="nav-link">
                Administrar Categorías
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/CrudUser" className="nav-link">
                Administrar Usuarios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Order" className="nav-link">
                Orden
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/OrderTable" className="nav-link">
                Tabla de órdenes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/ShoppingCart" className="nav-link">
                Carrito
              </NavLink>
            </li>
          </ul>
          <SearchBar/>
        </div>
      </nav>
    </div>
  );
}


function mapStateToProps(state) {
  return {
      categories: state.categories,
      products: state.products 
  };
}

function mapDispatchToProps(dispatch) {
  return {
      getAllProducts: () => dispatch(getAllProducts()),
      getSearchedProducts: keyword => dispatch(getSearchedProducts(keyword)),
      getCategoryProducts: category => dispatch(getCategoryProducts(category)),
      getAllCategories: () => dispatch(getAllCategories()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
