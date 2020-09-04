import React, {useState, useEffect} from "react";
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
import UserIcon from "./UserIcon"

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
  const [user, setUser] = useState({})
  const [error, setError] = useState(null);
  const [authenticated, setAuthenticated] = useState(false)

  let history = useHistory();

  useEffect(()=>{
    fetch("http://localhost:3001", {
      method: "GET",
      credentials: "include"
    })
      .then(response => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then(responseJson => {
        console.log(responseJson)
        setAuthenticated(true)
        setUser(responseJson.email)
      })
      .catch(error => {
        setAuthenticated(false)
        setError("Failed to authenticate user")
      });
  }, [])
  
  return (
    <>
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <Link to="/">
  <div className={s.brand}>
    <img className="px-0" src={require("../../assets/MercadoNegro5.gif")} alt="logo" width="70px" />
    <h4 className="d-none d-lg-block mr-4">MERCADO NEGRO</h4>
  </div>
  </Link>
  <SearchBar />
  <ul className="navbar-nav d-flex flex-row mr-2">
    <li className="nav-item dropdown">
      <span role="button" className="ml-2 nav-link dropdown-toggle d-none d-sm-block" id="navbardrop" data-toggle="dropdown">
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
    <UserOrGuest />
    <button className="ml-4 navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarToggler">
  <ul className="navbar-nav">
    <li role="button" className="font-weight-light pt-1 pb-1 d-block d-sm-none text-white" onClick={()=> {history.push('/Order')}}>Carrito</li>
    <li role="button" className="font-weight-light pt-1 pb-1 d-block d-sm-none text-white" data-toggle="collapse" data-target="#collapseCategories">Categorias</li>
    <ul id="collapseCategories" className="collapse navbar-collapse list-unstyled">
        <li className="pt-1 pb-1 nav-item d-block d-sm-none text-muted" onClick={() => {
            history.push('/catalog')
             getAllProducts()}}>
              Todos los productos</li>
            {categories.map(e =><li key={e.name} className="text-muted nav-item d-block d-sm-none" name={e.name} onClick={e => {
             history.push('/catalog')
             getCategoryProducts(e.target.getAttribute("name"))}}>
               {e.name}</li>)}        
    </ul>
    {sessionUser.id ?<li className="font-weight-light pt-1 pb-1 d-block d-sm-none text-white" role="button" onClick={()=>history.push('/Profile')} >Mi perfil</li> : null}
    {sessionUser.id ?<li className="font-weight-light pt-1 pb-1 d-block d-sm-none text-white" role="button" onClick={logout}>Cerrar sesión</li> : null}
    {!sessionUser.id ?<li className="font-weight-light pt-1 pb-1 d-block d-sm-none text-white" role="button" data-toggle="modal" data-target="#modalLoginForm">Iniciar sesión</li> : null}
    {!sessionUser.id ?<li className="font-weight-light pt-1 pb-1 d-block d-sm-none text-white" role="button" onClick={()=>history.push('/register')}>Registrarse</li> : null}
  </ul>
  </div>
  
  <div className="d-flex flex-row">
    <UserIcon />
  {/*  
  {sessionUser.id ? <Link to={"/favourite"}><i className="ml-3 fa fa-heart" style={{ fontSize: "1.4em", color: "#dc3545" }}></i></Link> : null}
  {sessionUser.id ? <i role="button" className="ml-3 text-info fas fa-user-circle" style={{ fontSize: "1.4em"}}></i> : null}
  {sessionUser.id ?<span  role="button" onClick={()=>history.push('/Profile')} className="ml-2  text-info">{sessionUser.first_name}</span> : null}
  {sessionUser.id ? <i role="button" onClick={logout} className="ml-3 text-info fas fa-sign-out-alt" style={{ fontSize: "1.4em"}}></i> : null}
  {sessionUser.id ? null : <i role="button" onClick={()=>history.push('/register')} className="ml-3 text-info fas fa-user-plus" style={{ fontSize: "1.4em"}}></i>}
  {sessionUser.id ? null : <i role="button" data-toggle="modal" data-target="#modalLoginForm" className="ml-3 mr-3 text-info fas fa-sign-in-alt" style={{ fontSize: "1.4em"}}></i>}
  */}</div>
</nav>
<LoginModalForm />
</>
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
