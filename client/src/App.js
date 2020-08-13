import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Product from "./components/product";
import Catalog from "./components/product"; //cambiar ruta a catalog cuando este subido
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import productComponent from "./components/product";
import NewProductForm from "./components/NewProductForm"
import EditProductForm from "./components/EditProductForm"

function App() {
  let ejemplo = {
    id: 1,
    name: 'agus',
    description: '26 años',
    price: 50,
    stock: 50,
    image: 'lorem',
    category: [1, 2]
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
    // --> hasta aca navBar
    
    
      <Route path="/catalog" component={Catalog} />
      <Route path="/products/:id" component={productComponent} />
    </Router>

  );
}

export default App;
