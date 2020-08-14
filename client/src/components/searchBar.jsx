import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
// import styles from "./SearchBar.module.css";

export default function SearchBar({onSearch}) {
  const [prod, setProd] = useState("");//setea el estado que todavia no definimos
  let history = useHistory()
  return (
    <form className="navbar navbar--dark bg-dark" onSubmit={(e) => {
      history.push('/search')
      e.preventDefault();
      onSearch(prod);
      setProd("");//vacia el placeholder
    }}>
    <input
      type="text"
      placeholder="Buscar..."
      value={prod}
      onChange={e=>setProd(e.target.value)}
      />
    <input className="btn btn-sm btn-outline-success" type="submit" value= "Mostrar"/>
    </form>
  );
}



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