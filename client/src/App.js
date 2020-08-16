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

//desde aca agrego Ariel

function App() {
  const [prodsCatalog, setProdsCatalog] = useState([]);
  const [prodsDetail, setProdsDetail] = useState({})
  const [listCategories, setListCategories] = useState([]);
  const [listProducts, setListProducts] = useState([]);
  /*const array = [
    {
      id: 2,
      name: "La mano de Dios",
      price: 100000,
      image:
        "https://i.picsum.photos/id/203/200/200.jpg?hmac=fydyJjsULq7iMwTTIg_m6g_PQQ1paJrufNsEiqbJRsg",
    },
    {
        id: 3,
        name: "Croma en oferta. Ver descripción.",
        price: 500,
        image: "https://i.picsum.photos/id/203/200/200.jpg?hmac=fydyJjsULq7iMwTTIg_m6g_PQQ1paJrufNsEiqbJRsg"
    },
    {
        id: 4,
        name: "Poema de Lorem Ipsum",
        price: 1000,
        image: "https://i.picsum.photos/id/203/200/200.jpg?hmac=fydyJjsULq7iMwTTIg_m6g_PQQ1paJrufNsEiqbJRsg"
    }
  ];*/

    let ejemplo = {
        id: 1,
        name: "agus",
        description: "26 años",
        price: 50,
        stock: 50,
        image: "lorem",
        category: [1, 2],
    };

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
      .then(r => r.json())
      .then((data) => {

        setProdsDetail(data)
        console.log(prodsDetail)})
        //console.log('prodsDetail:' + prodsDetail)
      .catch(error => {console.error(error)})
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
                console.log(data)
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


  return (
    <Router>
      <Route
        path = "/"
        render={() => <Nav onSearch = {onSearch}/>} //aca le paso prop del fetch que hace searchbar
      />
      <Route
        path = "/catalog"
        render={() => <Catalog array = {listProducts}
                        categories={listCategories}
                        filter={getCategory} toProductDetails = {toProductDetails}/>} //aca le pasamos lista de todos los products
      />
      <Route
        path = "/search"
        render={() => <Catalog array = {prodsCatalog} categories={listCategories} toProductDetails = {toProductDetails}/>} //aca le pasamos lista de todos los products que coinciden (onSearch)
      />
      <Route
        exact path = "/products/:id"
        render={() => <Product stock= {prodsDetail.stock} id= {prodsDetail.id} name={prodsDetail.name} price={prodsDetail.price} image={prodsDetail.images} description={prodsDetail.description}/>} /* ---> hay que pasarle como prop el producto en el que apretas detalle*/
      />
      <Route
        path = "/products/form/new"
        render={() => <NewProductForm categories={listCategories} />} //aca le pasamos lista de todos los products que coinciden (onSearch)
      />
      <Route
        path = "/products/:id/edit"
        render={() => <EditProductForm categories={listCategories} product={ejemplo} />} //aca le pasamos lista de todos los products que coinciden (onSearch)
      />
      <Route
        path = "/categories/form/new"
        render={() => <NewCategoryForm />}
      />
    </Router>
  );
/*
    return (
        <Router>
            <Route
                path="/"
                render={() => <Nav onSearch={onSearch} />} //aca le paso prop del fetch que hace searchbar
            />
            <Route
                path="/catalog"
                render={() => (
                    <Catalog
                        array={listProducts}
                        categories={listCategories}
                        filter={getCategory}
                    />
                )} //aca le pasamos lista de todos los products
            />
            <Route
                path="/search"
                render={() => (
                    <Catalog array={prodsCatalog} categories={listCategories} />
                )} //aca le pasamos lista de todos los products que coinciden (onSearch)
            />
            <Route
                exact
                path="/products/:id"
                render={() => (
                    <Product />
                )} 
            />
            <Route
                path="/products/form/new"
                render={() => <NewProductForm categories={listCategories} />} //aca le pasamos lista de todos los products que coinciden (onSearch)
            />
            <Route
                path="/products/:id/edit"
                render={() => (
                    <EditProductForm
                        categories={listCategories}
                        product={ejemplo}
                    />
                )} //aca le pasamos lista de todos los products que coinciden (onSearch)
            />
            <Route
                path="/categories/form/new"
                render={() => <NewCategoryForm />}
            />
        </Router>
    );*/

}

export default App;
