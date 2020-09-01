import React from "react";
import { useHistory, Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import { getAllProducts, getCategoryProducts } from "../../Redux/actions/productActions";
import { getAllCategories } from "../../Redux/actions/categoriesActions";
import { connect } from "react-redux";
import { store } from "../../Redux/store";
import s from "../../css/product.module.css";
import LoginModalForm from "./LoginModal.jsx"
import { sessionLogin, sessionLogout } from "../../Redux/actions/sessionActions";
import swal from "sweetalert";

//-------- para traer prods al principio y ya esten disponibles -------
store.dispatch(getAllCategories());
store.dispatch(getAllProducts());

let cart = (JSON.parse(localStorage.getItem('guestCart')))
if (cart == null) window.localStorage.setItem('guestCart', JSON.stringify([]))

export function Nav({ categories, getCategoryProducts, getAllProducts, sessionUser, sessionLogout }) {

  const logout = () => {
    sessionLogout()
    swal("Se ha cerrado sesión")
    window.location.reload();
  }

  function LoggedUser() {
    return  <i role="button" className="ml-2  fas fa-cart-arrow-down text-info" style={{ fontSize: "1.4em"}} 
    onClick={()=> {history.push('/Order')}}></i>
  }

  function GuestUser() {
    return  <i role="button" className="ml-2 fas fa-cart-arrow-down text-info" style={{ fontSize: "1.4em"}}
    onClick={()=> {history.push('/GuestCart')}}></i>
 
  }

  function UserOrGuest() {
    if (!sessionUser.id) {
      return <GuestUser />;
    }
    return <LoggedUser />
  }


  let history = useHistory();
  return (
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
<LoginModalForm />
  <Link to="/">
  <div className={s.brand}>
    <img className="px-0 d-none d-lg-block" src={require("../../assets/MercadoNegro5.gif")} alt="logo" width="70px" />
    <h4 className="d-none d-lg-block">MERCADO NEGRO</h4>
  </div>
  </Link>
  <SearchBar />
  <ul className="navbar-nav d-flex flex-row">
    <li className="nav-item dropdown">
      <span role="button" className="ml-2 nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">
        Categorías
      </span>
      <div className="dropdown-menu">
        <span className="dropdown-item" role="button" onClick={() => {
             history.push('/catalog')
             getAllProducts()}}>Todos los productos
        </span>
              {categories.map(e => 
              <span role="button" key={e.id} data-id={e.id} 
              name={e.name} className="dropdown-item" onClick={e => {
             history.push('/catalog')
             getCategoryProducts(e.target.getAttribute("name"))}}>{e.name}
              </span>)}
      </div>
    </li>
    </ul>
    <div className="d-flex flex-row">
    <UserOrGuest />
  {sessionUser.id ? <Link to={"/favourite"}><i className="ml-3 fa fa-heart" style={{ fontSize: "1.4em", color: "#dc3545" }}></i></Link> : null}
  {sessionUser.id ? <i role="button" className="ml-3 text-info fas fa-user-circle" style={{ fontSize: "1.4em"}}></i> : null}
  {sessionUser.id ?<span  role="button" onClick={()=>history.push('/Profile')} className="ml-2  text-info">{sessionUser.first_name}</span> : null}
  {sessionUser.id ? <i role="button" onClick={logout} className="ml-3 text-info fas fa-sign-out-alt" style={{ fontSize: "1.4em"}}></i> : null}
  {sessionUser.id ? null : <i role="button" className="ml-3 text-info fas fa-user-plus" style={{ fontSize: "1.4em"}}></i>}
  {sessionUser.id ? null : <i role="button" data-toggle="modal" data-target="#modalLoginForm" className="ml-3 mr-3 text-info fas fa-sign-in-alt" style={{ fontSize: "1.4em"}}></i>}
    </div>
</nav>
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
    sessionLogin: (user) => dispatch(sessionLogin(user)),
    sessionLogout: () => dispatch(sessionLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
