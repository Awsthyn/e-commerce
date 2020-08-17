import React, { useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";

function Nav({ onSearch, categories, filter, toGetProducts }) {
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
        <a className="navbar-brand" href="/catalog">
          NOMBRE / HOME
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
                          filter(e.target.getAttribute("name"));
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
              <NavLink to="/crud" className="nav-link">
                Administrar Productos
              </NavLink>
            </li>
            <li className="nav-item">

              <NavLink to="/categories/form/new" className="nav-link">
                Agregar Categoría
              </NavLink>
            </li>
          </ul>
          <SearchBar onSearch={onSearch} />
        </div>

               <NavLink to="/CrudCategory" className="nav-link">Administrar Categorías</NavLink>
             </li>
           </ul>
            <SearchBar
              onSearch={onSearch}
            />
            </div>

      </nav>
    </div>
  );
}

export default Nav;
