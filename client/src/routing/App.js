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
import OrderTable from "../components/adminOnly/orderTable/OrderTable.jsx";
import Order from "../components/Order.jsx";
import ShoppingCart from "../components/ShoppingCart.jsx";
import Profile from "../components/adminOnly/adminCruds/Profile.jsx";
import { Admin } from "../components/adminOnly/adminCruds/Admin"
import { CrudAdmin } from "../components/adminOnly/adminCruds/CrudAdmin"
import NewUser from "../components/adminOnly/userCrud/NewUserForm";
import EditUser from "../components/adminOnly/userCrud/EditUserForm";
import GuestCart from "../components/GuestCart";
import MyReviews from "../components/adminOnly/singleUserCruds/myReviews";
import EditData from "../components/adminOnly/singleUserCruds/editData";
import PurchaseState from "../components/adminOnly/singleUserCruds/purchaseState";
import Review from "../components/Review";
import Login from "../components/adminOnly/adminCruds/Login.js";
import { Favoritos } from "../components/Favoritos"


function App() {

  return (
    <Router>
      <Route
        path="/"
        component={Nav}
      />
      <Route
        exact path="/"
        component={Home}
      />
      <Route
        exact path="/Profile"
        component={Profile}
      />
      <Route
        path="/Profile/:id/myreviews"
        // render={props =>
        //   <MyReviews sessionUser={props.location.state.sessionUser} />
        // }
        component={MyReviews}
      />
      <Route
        path="/Profile/:id/editdata"
        // render={props =>
        //   <EditData sessionUser={props.location.state.sessionUser} />
        // }
        component={EditData}
      />
      <Route
        path="/Profile/:id/purchasestate"
        // render={props =>
        //   <PurchaseState sessionUser={props.location.state.sessionUser} />
        // }
        component={PurchaseState}
      />
      {/* -------------- ADMINS ------------------ */}
      <Route
        exact path="/favourite"
        component={Favoritos}
      />
      {/* -------------- ADMINS ------------------ */}
      <Route
        path="/Admin"
        component={Admin}
      />
      <Route
        exact path="/Login"
        component={Login}
      />
      <Route
        exact path="/Admin/CrudAdmin"
        component={CrudAdmin}
      />
      <Route
        exact path="/Admin/OrderTable"
        component={OrderTable}
      />
      {/* -------------- CRUDS PRODUCT ------------------ */}
      <Route
        exact path="/Admin/CrudProduct"
        component={CrudProduct}
      />
      <Route
        exact path="/Admin/products/form/new"
        component={NewProductForm}
      />
      <Route
        exact path="/Admin/products/:id/edit"
        //component= { EditProductForm }
        render={props =>
          <EditProductForm product={props.location.state.product} />
        }
      />
      <Route
        exact path="/products/:id/nuevareview"
        component={Review}
      />
      {/* -------------- CRUDS CATEGORY ------------------ */}
      <Route
        exact path="/Admin/CrudCategory"
        component={CrudCategory}
      />
      <Route
        exact path="/Admin/categories/form/new"
        component={NewCategoryForm}
      />
      <Route
        exact path="/Admin/categories/:id/edit"
        render={props =>
          <EditCategoryForm category={props.location.state.category} />
        }
      />
      {/* -------------- CRUDS USER ------------------ */}
      <Route
        exact path="/Admin/CrudUser"
        component={CrudUser}
      />
      <Route
        exact path="/Admin/CrudUser/form/new"
        component={NewUser}
      />
      <Route
        exact path="/Admin/CrudUser/:id/edit"
        render={props =>
          <EditUser user={props.location.state.user} />}
      />
      {/* -------------- ORDEN Y CARRITO ------------------ */}
      <Route
        exact path="/OrderTable"
        component={OrderTable}
      />
      <Route
        exact path="/Order"
        component={Order}
      />
      <Route
        exact path="/GuestCart"
        component={GuestCart}
      />
      <Route
        exact path="/ShoppingCart"
        component={ShoppingCart}
      />
      {/* -------------- CATALOGO ------------------ */}
      <Route
        exact path="/catalog"
        component={Catalog}
      />
      <Route
        path="/catalog/:categoriaName"
        component={Catalog}
      />
      {/* <Route
        exact path="/category/:id"
        component= { ProductComponent }
      /> */}
      <Route
        path="/search"
        component={Catalog}
      />
      <Route
        exact path="/products/:id"
        component={ProductComponent}
      />
    </Router>
  );
}

export default App;
