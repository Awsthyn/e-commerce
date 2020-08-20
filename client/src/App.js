import React from "react";
import "./App.css";
import ProductComponent from "./components/Product";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Catalog from "./components/catalogo";
import Nav from "./components/Nav";
import NewProductForm from "./components/NewProductForm";
import EditProductForm from "./components/EditProductForm";
import NewCategoryForm from "./components/NewCategoryForm";
import Crud from "./components/Crud";
import CrudCategory from "./components/CrudCategory";
import Home from "./components/Home.jsx";
import CrudUser from "./components/CrudUser";
import OrderTable from "./components/OrderTable.jsx";
import Order from "./components/Order.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";


function App() {

  return (
    <Router>
      <Route
        path="/"
        component= { Nav }
      />
      <Route
        exact path="/"
        component= { Home }
      />
      <Route
        exact path="/crud"
        component= { Crud }
      />
      <Route
        exact path = "/CrudCategory"
        component= { CrudCategory }
      />
      <Route
        exact path = "/CrudUser"
        component= { CrudUser }
      />
      <Route
        exact path = "/OrderTable"
        component= { OrderTable }
      />
      <Route
        exact path = "/Order"
        component= { Order }
      />
      <Route
        exact path = "/ShoppingCart"
        component= { ShoppingCart }
      />
      <Route
        path="/catalog"
        component= { Catalog }
      />
      <Route
        path="/catalog/:categoriaName"
        component= { Catalog }
      />
      <Route
        exact path="/category/:id"
        component= { ProductComponent }
      />
      <Route
        path="/search"
        component= { Catalog }
      />
      <Route
        exact path="/products/:id"
        component= { ProductComponent }
      />
      <Route
        path = "/products/form/new"
        component= { NewProductForm }
      />
      <Route
        path = "/products/:id/edit"
        component= { EditProductForm }
      />
      <Route
        path = "/categories/form/new"
        component= { NewCategoryForm }
      />
    </Router>
  );
}

export default App;
