import React, { useState, useEffect } from "react";
import "./App.css";
import Product from "./components/Product";
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
  const [prodsCatalog, setProdsCatalog] = useState([]);
  const [prodsDetail, setProdsDetail] = useState({});
  const [listCategories, setListCategories] = useState([]);
  const [listProducts, setListProducts] = useState([]);

  function onSearch(valor) {
    fetch(`http://localhost:3001/search?query=${valor}`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        if(!data[0]) { alert(`No se han encontrado productos relacionados con ${valor}`)}
        setProdsCatalog(data)
        console.log('estado: '+prodsCatalog);
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
        // if(!data) {alert(`No se encontraron productos en la categoría ${value}`)}
      });
  }

  useEffect(() => {
    getCategories(); 
    getProduct(); 
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
        )} 
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
        exact path = "/CrudUser"
        render={() => <CrudUser />}
      />
      <Route
        exact path = "/OrderTable"
        render={() => <OrderTable />}
      />
      <Route
        exact path = "/Order"
        render={() => <Order />}
      />
      <Route
        exact path = "/ShoppingCart"
        render={() => <ShoppingCart />}
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
        )} 
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
