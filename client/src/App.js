import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Product from "./components/Product";
//import Catalog from "./components/product"; //cambiar ruta a catalog cuando este subido---> (TRAE PRODUCTO)
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
//import productComponent from "./components/product";
import Catalog from "./components/catalogo"; //cambiar ruta a catalog cuando este subido
import Nav from "./components/Nav";
import NewProductForm from "./components/NewProductForm";
import EditProductForm from "./components/EditProductForm";
import NewCategoryForm from "./components/NewCategoryForm";
import Crud from "./components/Crud";
import CrudCategory from "./components/CrudCategory";
import EditCategoryForm from "./components/EditCategoryForm";
import Home from "./components/Home.jsx";

function App() {
  const [prodsCatalog, setProdsCatalog] = useState([]);
  const [prodsDetail, setProdsDetail] = useState({});
  const [listCategories, setListCategories] = useState([]);
  const [listProducts, setListProducts] = useState([]);

  function onSearch(valor) {
    fetch(`http://localhost:3001/search?query=${valor}`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setProdsCatalog(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function toProductDetails(id) {
    fetch(`http://localhost:3001/products/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setProdsDetail(data);
        console.log(prodsDetail);
      })
      //console.log('prodsDetail:' + prodsDetail)
      .catch((error) => {
        console.error(error);
      });
  }


    function getCategories() {
        fetch(`http://localhost:3001/categories`)
            .then((r) => r.json())
            .then((data) => {
                setListCategories(data);
            });
    }

  function getProduct() {
    fetch(`http://localhost:3001/products`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setListProducts(data);
      });
  }
  function getCategory(value) {
    fetch(`http://localhost:3001/categories/${value}`)
      .then((r) => r.json())
      .then((data) => {
        setListProducts(data.products);
      });
  }

  useEffect(() => {
    getCategories(); // Your code here
    getProduct(); // Your code here
  }, []);

  function onDeleteProduct(id) {
    setListProducts((prev) => prev.filter((p) => p.id !== id));
  }

    function onDeleteCategory(id) {
        setListCategories( prev =>
            prev.filter(p => p.id !== id)
        )
    }

  return (
    <Router>
      <Route
        path="/"
        render={() => (
          <Nav
            onSearch={onSearch}
            categories={listCategories}
            filter={getCategory}
          />
        )} //aca le paso prop del fetch que hace searchbar
      />
        <Route
        exact path="/"
        render={() => (
          <Home products={listProducts} />
        )}
      />
      <Route
        exact
        path="/crud"
        render={() => (
          <Crud products={listProducts} onDeleteProduct={onDeleteProduct} />
        )}
      />

      <Route
        exact path = "/CrudCategory"
        render={() => <CrudCategory categories = {listCategories} onDeleteCategory = { onDeleteCategory } />}
      />

      <Route
        path="/catalog"
        render={() => (
          <Catalog
            array={listProducts}
            categories={listCategories}
            filter={getCategory}
            toProductDetails={toProductDetails}
            getProd={getProduct}
          />
        )} //aca le pasamos lista de todos los products
      />

      <Route
        path="/catalogo/:categoriaName"
        render={() => (
          <Catalog
            array={listProducts}
            categories={listCategories}
            filter={getCategory}
            toProductDetails={toProductDetails}
            getProd={getProduct}
          />
        )} // Cada categoria tiene su propio path
      />

      <Route
        exact
        path="/category/:id"
        render={() => <Product id={prodsDetail.id} name={prodsDetail.name} />} //aca le pasamos lista de todos los products
      />

      <Route
        path="/search"
        render={() => (
          <Catalog
            array={prodsCatalog}
            categories={listCategories}
            toProductDetails={toProductDetails}
          />
        )} //aca le pasamos lista de todos los products que coinciden (onSearch)
      />
      <Route

        exact
        path="/products/:id"
        render={() => (
          <Product
            stock={prodsDetail.stock}
            id={prodsDetail.id}
            name={prodsDetail.name}
            price={prodsDetail.price}
            image={prodsDetail.images}
            description={prodsDetail.description}
          />
        )} /* ---> hay que pasarle como prop el producto en el que apretas detalle*/
      />
      <Route
        path = "/products/form/new"
        render={() => <NewProductForm categories={listCategories} listaProducts={listProducts}/>} //aca le pasamos lista de todos los products que coinciden (onSearch)
      />
      <Route
        path = "/products/:id/edit"
        render={(props) => (
                <EditProductForm categories={listCategories} product={props.location.state.product} listaProducts={listProducts}/>
            )} //aca le pasamos lista de todos los products que coinciden (onSearch)
      />
      <Route
        path = "/categories/form/new"
        render={() => <NewCategoryForm listaCategories={listCategories}/>}
      />
      <Route path="/categories/form/new" render={() => <NewCategoryForm />} />
    </Router>
  );

}

export default App;
