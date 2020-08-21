import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { getAllProducts, getCategoryProducts } from "../Redux/actions/productActions";
import { getAllCategories } from "../Redux/actions/categoriesActions";
import { connect } from "react-redux";
import store from "../Redux/store";
import s from "../css/product.module.css";

//-------- para traer prods al principio y ya esten disponibles -------
store.dispatch(getAllCategories());
store.dispatch(getAllProducts());

export function Nav({ categories, getCategoryProducts, getAllProducts }) {
  let history = useHistory();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-justify">
        <a className="navbar-brand" href="/">
          MERCADO NEGRO
        </a>
        <div className="navbar-nav" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li>
              <MDBDropdown>
                <MDBDropdownToggle caret color="dark">
                  Categorias
                </MDBDropdownToggle>
                <MDBDropdownMenu basic>
                  <li
                    className={s.pointer}
                    onClick={(e) => {
                      getAllProducts(e.target.getAttribute("name"));
                      history.push(`/catalog/${e.target.getAttribute("name")}`);
                      e.preventDefault();
                    }}
                  >
                    <b className={s.pointer}>Todos los productos</b>
                  </li>

                  {categories.map((e) => (
                    <Link to={`/catalog/${e.name}`}>
                      <MDBDropdownItem
                        key={e.id}
                        data-id={e.id}
                        name={e.name}
                        onClick={(e) => {
                          getCategoryProducts(e.target.getAttribute("name"));
                          history.push(
                            `/catalog/${e.target.getAttribute("name")}`
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
              <NavLink to="/Order" className="nav-link">
                <i class="fas fa-cart-arrow-down "></i>
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
            <li className="nav-item">
              <NavLink to="/AdminLogin" className="nav-link">
                AdminLogin
              </NavLink>
            </li>
          </ul>
          <SearchBar />
        </div>
      </nav>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    categories: state.categories.categories,
    products: state.products,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllProducts: () => dispatch(getAllProducts()),
    getCategoryProducts: (category) => dispatch(getCategoryProducts(category)),
    getAllCategories: () => dispatch(getAllCategories()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
