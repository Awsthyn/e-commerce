import React, { useEffect } from "react";
import { getAllUsers, editUser } from "../Redux/actions/userActions";

import { useHistory } from "react-router-dom";
import { toProductDetails } from "../Redux/actions/productActions";
import {
  addToOrder,
  getCart,
  editQuantity,
} from "../Redux/actions/cartActions";
import { connect } from "react-redux";
import swal from "sweetalert";
import styles from "../css/product.module.css";

import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";

export function UserIcon(id, name, first_name, editUser) {
  return (
    <MDBDropdown>
      <MDBDropdownToggle caret color="dark text-info">
        <svg
          width="30"
          height="30"
          viewBox="0 0 16 16"
          class="bi bi-person-circle text-info"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
          <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          <path
            fill-rule="evenodd"
            d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
          />
        </svg>
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem>
          {/* aca tendria que mostrarme el usuario logueado */}
        </MDBDropdownItem>
        <MDBDropdownItem onClick={() => (window.location = "/AdminLogin")}>
          Iniciar Sesión
        </MDBDropdownItem>
        <MDBDropdownItem
          onClick={() => (window.location = "/Admin/CrudUser/form/new")}
        >
          Crear Usuario
        </MDBDropdownItem>
        <MDBDropdownItem onClick={() => alert("Se ha cerrado la Sesión")}>
          Cerrar Sesión
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}

//-------------------- CONEXIONES REDUX ----------------------------------

function mapStateToProps(state) {
  return {
    productDetails: state.productDetails,
    cart: state.cart.cart,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editUser: () => dispatch(editUser()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserIcon);
