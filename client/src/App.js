import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Product from "./components/product";
import Catalog from "./components/product"; //cambiar ruta a catalog cuando este subido
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import productComponent from "./components/product";

function App() {
  return (
    <Router>
      <div>
        <Link to="/catalog">
          <button>Catalogo</button>
        </Link>
      </div>
      <div>
        <Link to="/products/:id">
          <button>Detalle Producto</button>
        </Link>
      </div>
      <Route path="/catalog" component={Catalog} />
      <Route path="/products/:id" component={productComponent} />
    </Router>
  );
}

export default App;
