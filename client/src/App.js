import React, {useState, useEffect} from "react";
// import logo from "./logo.svg";
import "./App.css";
import Product from "./components/product";
import SearchBar from "./components/SearchBar";
//import Catalog from "./components/product"; //cambiar ruta a catalog cuando este subido---> (TRAE PRODUCTO)
import Catalog from "./components/catalogo"; //Ahora si trae el catalogo
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import productComponent from "./components/product";
import NewProductForm from "./components/NewProductForm"
import EditProductForm from "./components/EditProductForm"

function App() {
{pr: [asdasd, asdasd, asdasd]}
  // let ejemplo = {
  //   id: 1,
  //   name: 'agus',
  //   description: '26 años',
  //   price: 50,
  //   stock: 50,
  //   image: 'lorem',
  //   category: [1, 2]
  // }

  const array = [
    {
      name: "La mano de Dios",
      price: 100000,
      image:
        "https://i.picsum.photos/id/203/200/200.jpg?hmac=fydyJjsULq7iMwTTIg_m6g_PQQ1paJrufNsEiqbJRsg",
    },
    {
        name: "Croma en oferta. Ver descripción.",
        price: 500,
        image: "https://i.picsum.photos/id/203/200/200.jpg?hmac=fydyJjsULq7iMwTTIg_m6g_PQQ1paJrufNsEiqbJRsg"
    },
    {
        name: "Poema de Lorem Ipsum",
        price: 1000,
        image: "https://i.picsum.photos/id/203/200/200.jpg?hmac=fydyJjsULq7iMwTTIg_m6g_PQQ1paJrufNsEiqbJRsg"
    }
  ];

  function onSearch(valor) {
    //Llamado a la API del clima
    fetch(`http://localhost:3001/search?palabra=${valor}`)
      .then(r => r.json())
      .then((recurso) => { state.pr = recurso
      }
  

  return (

    <Router>
      <div> // --> desde aca navBar
        <Link to="/catalog">
          <button>Catalogo</button>
        </Link>
      </div>
      <div>
        <Link to="/products/:id">
          <button>Detalle Producto</button>
        </Link> 
      </div>
      <SearchBar ></SearchBar> // --> function onSearch no definida     
    // --> hasta aca navBar
    
    
      <Route
        path = "/catalog"
        render={() => <Catalog array = {array}/>} //aca le pasamos lista de todos los products
      />
      <Route
        path = "/products/:id"
        render={() => <Product />} //aca le paso prop del fetch que hace searchbar 
      />
      <Route
        path = "/search/:keyword"
        render={() => <Catalog array = {array}/>} //aca le paso prop del fetch que hace searchbar 
      />
    </Router>

  );
}

export default App; 
