import React from "react";
import {
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
  } from "mdbreact";

export default function UserIcon() {

    return(
        <MDBDropdown>
            <MDBDropdownToggle caret color="dark text-info">
            <svg width="30" height="30" viewBox="0 0 16 16" class="bi bi-person-circle text-info" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
            </svg>

            </MDBDropdownToggle>
            <MDBDropdownMenu basic>
                <ul >
                    <button class="btn btn-sm btn-outline-info" onClick={()=>window.location = "/Admin/CrudUser/form/new"}>Crear Usuario</button>
                    <button class="btn btn-sm btn-outline-info" onClick={()=>window.location = "/AdminLogin"}>Iniciar Sesión</button>
                    <button class="btn btn-sm btn-outline-info" onClick={()=>window.location = "/AdminLogin"}>Iniciar como Administrador/a</button>
                    <button class="btn btn-sm btn-outline-info" onClick={()=> alert("Se ha cerrado la Sesión")}>Cerrar Sesión</button>
                </ul>

            </MDBDropdownMenu>
            
        </MDBDropdown>


    )
}

//         <div class="dropdown">
//   <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

//   </button>
//   <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
//     <button class="dropdown-item" type="button">Action</button>
//     <button class="dropdown-item" type="button">Another action</button>
//     <button class="dropdown-item" type="button">Something else here</button>
//   </div>
// </div>