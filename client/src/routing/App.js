import React from "react";
import ProductComponent from "../components/CATALOGO/Product";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Catalog from "../components/CATALOGO/catalogo";
import Nav from "../components/NAV/Nav";
import NewProductForm from "../components/CRUDS/productCrud/NewProductForm";
import EditProductForm from "../components/CRUDS/productCrud/EditProductForm";
import NewCategoryForm from "../components/CRUDS/categoryCrud/NewCategoryForm";
import EditCategoryForm from "../components/CRUDS/categoryCrud/EditCategoryForm";
import CrudProduct from "../components/CRUDS/productCrud/CrudProdut";
import CrudCategory from "../components/CRUDS/categoryCrud/CrudCategory";
import Home from "../components/NAV/Home";
import CrudUser from "../components/CRUDS/userCrud/CrudUser";
import OrderTable from "../components/ORDER/OrderTable";
import Order from "../components/ORDER/Order";
import Profile from "../components/CRUDS/singleUserCruds/Profile";
import { Admin } from "../components/CRUDS/ADMIN/Admin"
import NewUser from "../components/CRUDS/userCrud/NewUserForm";
import EditUser from "../components/CRUDS/userCrud/EditUserForm";
import GuestCart from "../components/NAV/GuestCart";
import MyReviews from "../components/CRUDS/singleUserCruds/myReviews";
import OrderTableByUser from "../components/CRUDS/singleUserCruds/OrderTableByUser";
import EditData from "../components/CRUDS/singleUserCruds/editData";
import PurchaseState from "../components/CRUDS/singleUserCruds/purchaseState";
import Review from "../components/CRUDS/reviewCrud/Review";
import { Favoritos } from "../components/NAV/Favoritos"
import AdminRoute from "./AdminRoute"
import PasswordForgot from "../components/CRUDS/singleUserCruds/PasswordForgot"
import ResetPassword from "../components/CRUDS/singleUserCruds/ResetPassword"
import Checkout from "../components/ORDER/Checkout.jsx"

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
      <Route
        path="/Profile/:id/OrderTableByUser"
        // render={props =>
        //   <PurchaseState sessionUser={props.location.state.sessionUser} />
        // }
        component={OrderTableByUser}
      />
      {/* -------------- ADMINS ------------------ */}
      <Route
        exact path="/favourite"
        component={Favoritos}
      />
      <Route
        exact path="/PassForgot"
        component={PasswordForgot}
      />
      <Route
        exact path="/ResetPassword/:token"
        component={ResetPassword}
      />
      {/* -------------- ADMINS ------------------ */}
      <AdminRoute
        path="/Admin"
        component={Admin}
      />
      {/* <AdminRoute exact path="/Admin/CrudAdmin" component={CrudAdmin} /> */}

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
      <Route
        path="/register"
        component={NewUser}
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
      <Route
        exact path="/Checkout"
        component={Checkout}
      />
    </Router>
  );
}

export default App;
