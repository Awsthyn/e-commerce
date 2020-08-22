import React from "react";
import ProductComponent from "../components/Product";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Catalog from "../components/catalogo";
import Nav from "../components/Nav";
import NewProductForm from "../components/adminOnly/productCrud/NewProductForm";
import EditProductForm from "../components/adminOnly/productCrud/EditProductForm";
import NewCategoryForm from "../components/adminOnly/categoryCrud/NewCategoryForm";
import EditCategoryForm from "../components/adminOnly/categoryCrud/EditCategoryForm";
import CrudProduct from "../components/adminOnly/productCrud/CrudProdut";
import CrudCategory from "../components/adminOnly/categoryCrud/CrudCategory";
import Home from "../components/Home.jsx";
import CrudUser from "../components/adminOnly/userCrud/CrudUser";
import OrderTable from "../components/OrderTable.jsx";
import Order from "../components/Order.jsx";
import ShoppingCart from "../components/ShoppingCart.jsx";
import AdminLogin from "../components/adminOnly/adminCruds/AdminLogin";
import { Admin } from "../components/adminOnly/adminCruds/Admin"
import { CrudAdmin } from "../components/adminOnly/adminCruds/CrudAdmin"
import NewUser from "../components/adminOnly/userCrud/NewUserForm";
import EditUser from "../components/adminOnly/userCrud/EditUserForm";

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
{/* -------------- ADMINS ------------------ */}
      <Route
        path="/Admin"
        component= { Admin }
      />
      <Route
        exact path="/AdminLogin"
        component= { AdminLogin }
      />
      <Route
        exact path="/Admin/CrudAdmin"
        component= { CrudAdmin }
      />
{/* -------------- CRUDS PRODUCT ------------------ */}
      <Route
        exact path="/Admin/CrudProduct"
        component= { CrudProduct }
      />
      <Route
        exact path = "/Admin/products/form/new"
        component= { NewProductForm }
      />
      <Route
        exact path = "/Admin/products/:id/edit"
        //component= { EditProductForm }
        render = { props =>
            <EditProductForm product={props.location.state.product} />
        }
      />
{/* -------------- CRUDS CATEGORY ------------------ */}
      <Route
        exact path = "/Admin/CrudCategory"
        component= { CrudCategory }
      />
      <Route
        exact path = "/Admin/categories/form/new"
        component= { NewCategoryForm }
      />
      <Route
        exact path="/Admin/categories/:id/edit"
        render = { props =>
            <EditCategoryForm category={props.location.state.category} />
        }
      />
{/* -------------- CRUDS USER ------------------ */}
      <Route
        exact path = "/Admin/CrudUser"
        component= { CrudUser }
      />
      <Route
        exact path = "/Admin/CrudUser/form/new"
        component= { NewUser }
      />
      <Route
        exact path = "/Admin/CrudUser/:id/edit"
        render = { props =>
            <EditUser user={props.location.state.user} /> } 
      />
{/* -------------- ORDEN Y CARRITO ------------------ */}
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
{/* -------------- CATALOGO ------------------ */}
      <Route
        exact path="/catalog"
        component= { Catalog }
      />
      <Route
        path="/catalog/:categoriaName"
        component= { Catalog }
      />
      {/* <Route
        exact path="/category/:id"
        component= { ProductComponent }
      /> */}
      <Route
        path="/search"
        component= { Catalog }
      />
      <Route
        exact path="/products/:id"
        component= { ProductComponent }
      />
    </Router>
  );
}

export default App;