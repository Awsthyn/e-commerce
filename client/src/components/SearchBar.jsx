import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import { getSearchedProducts } from "../Redux/actions/actions"
import { connect } from "react-redux";
// import styles from "./SearchBar.module.css";

export function SearchBar(props) {
  const [prod, setProd] = useState("");//setea el estado que todavia no definimos
  let history = useHistory()
  return (
    <form className="form-inline ml-auto" onSubmit={(e) => {
      history.push('/search')
      e.preventDefault();
      props.getSearchedProducts(prod)
      // props.onSearch(prod);
      setProd("");//vacia el placeholder
    }}>
    <input
      type="text"
      placeholder="Buscar..."
      value={prod}
      onChange={e=>setProd(e.target.value)}
      />
    <input className="btn btn-sm btn-outline-light" type="submit" value= "Mostrar"/>
    </form>
  );
}//


function mapStateToProps(state) {
  return {
      searchedProducts: state.searchedProducts,
      // categories: state.categories
  };
}

function mapDispatchToProps(dispatch) {
  return {
      getSearchedProducts: keyword => dispatch(getSearchedProducts(keyword)),
      // getCategories: () => dispatch(getCategories())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);



/*import React, {useState} from 'react';
// import styles from "./SearchBar.module.css";
export default function SearchBar({onSearch}) {
  const [prod, setProd] = useState("");//setea el estado que todavia no definimos
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(prod);
      setProd("");//vacia el placeholder
    }}>
    <input //className={styles.input}
      type="text"
      placeholder="Buscar..."
      value={prod}
      onChange={e=>setProd(e.target.value)}
      />
    <input //className={styles.boton}
      type="submit"
      value= "Mostrar"
    />
    </form>
  );
}
*/
