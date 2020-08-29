import React from "react";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import { sessionLogin, sessionLogout } from "../Redux/actions/sessionActions";
import { connect } from "react-redux";
import swal from "sweetalert";

export function UserIcon(props) {
  return (
    <MDBDropdown>
      <MDBDropdownToggle caret color="dark text-info">
        <svg
          width="30"
          height="30"
          viewBox="0 0 16 16"
          className="bi bi-person-circle text-info"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
          <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          <path
            fillRule="evenodd"
            d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
          />
        </svg>
      </MDBDropdownToggle>

      <MDBDropdownMenu right basic>
        <MDBDropdownItem onClick={() => (window.location = "/Profile")}>
          Usuario: {props.sessionUser.first_name}
        </MDBDropdownItem>
        <hr></hr>

        <MDBDropdownItem
          onClick={() => (window.location = "/register")}
        >
          Registrarse
        </MDBDropdownItem>
        <MDBDropdownItem onClick={() => (window.location = "/Login")}>
          Iniciar Sesión
        </MDBDropdownItem>
        <hr></hr>
        <MDBDropdownItem
          onClick={props.sessionLogout}
        // ,swal("Se ha cerrado sesión"))}

        >

          Cerrar Sesión
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}

function mapStateToProps(state) {
  return {
    sessionUser: state.session.sessionUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sessionLogin: (user) => dispatch(sessionLogin(user)),
    sessionLogout: () => dispatch(sessionLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserIcon);
