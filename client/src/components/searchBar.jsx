import React, {useState} from 'react';
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