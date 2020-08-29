import React from "react";
import { NavLink, useHistory, Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import UserIcon from "./UserIcon"
import { getAllProducts, getCategoryProducts } from "../Redux/actions/productActions";
import { getAllCategories } from "../Redux/actions/categoriesActions";
import { connect } from "react-redux";
import { store } from "../Redux/store";
import s from "../css/product.module.css";
import LoginModalForm from "./LoginModal.jsx"

//-------- para traer prods al principio y ya esten disponibles -------
store.dispatch(getAllCategories());
store.dispatch(getAllProducts());

let cart = (JSON.parse(localStorage.getItem('guestCart')))
if (cart == null) window.localStorage.setItem('guestCart', JSON.stringify([]))

export function Nav({ categories, getCategoryProducts, getAllProducts, sessionUser }) {

  function LoggedUser() {
    return <li className="nav-item">
      <NavLink to="/Order" className="nav-link text-info" >
        <i className="fas fa-cart-arrow-down"></i>
      </NavLink>
    </li>;
  }

  function GuestUser() {
    return <li className="nav-item">
      <NavLink to="/GuestCart" className="nav-link text-info" >
        <i className="fas fa-cart-arrow-down"></i>
      </NavLink>
    </li>;
  }

  function UserOrGuest() {
    if (!sessionUser.id) {
      return <GuestUser />;
    }
    return <LoggedUser />
  }


  let history = useHistory();
  return (
    <div>
      <LoginModalForm />
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-justify d-flex justify-content-around align-items-center">
        <Link to="/">
          <div className={s.brand}>
            <img
              className="px-0"
              src={require("../assets/MercadoNegro5.gif")}
              alt="logo"
              width="70px"
            />
            <h4>MERCADO NEGRO</h4>
          </div>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-nav collapse navbar-collapse d-flex align-items-center" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto d-flex justify-content-around collapse navbar-collapse">
            <li>
              <ul>
                <MDBDropdown>
                  <MDBDropdownToggle caret color="dark text-info">
                    Categorias
                  </MDBDropdownToggle>
                  <MDBDropdownMenu basic left>
                    <li
                      className={s.pointer}
                      onClick={(e) => {
                        getAllProducts(e.target.getAttribute("name"));
                        history.push(
                          `/catalog/${e.target.getAttribute("name")}`
                        );
                        e.preventDefault();
                      }}
                    >
                      <b className={s.pointer}>Todos los productos</b>
                    </li>

                    {categories.map((e) => (
                      <MDBDropdownItem
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
                    ))}
                  </MDBDropdownMenu>
                </MDBDropdown>
              </ul>
            </li>
              <UserOrGuest />
              <Link to={"/favourite"}><i className="ml-3 fa fa-heart mt-1" style={{fontSize: "1.4em", color: "#dc3545"}}></i></Link>
            <SearchBar />
            <li>
              <UserIcon />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    categories: state.categories.categories,
    products: state.products,
    sessionUser: state.session.sessionUser,
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
