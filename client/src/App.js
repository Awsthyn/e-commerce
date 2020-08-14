import React, {useState, useEffect} from "react";
// import logo from "./logo.svg";
import "./App.css";
import Product from "./components/product";
import SearchBar from "./components/SearchBar";
//import Catalog from "./components/product"; //cambiar ruta a catalog cuando este subido---> (TRAE PRODUCTO)
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import productComponent from "./components/product";
import Catalog from "./components/catalogo"; //cambiar ruta a catalog cuando este subido
import Nav from "./components/Nav";
import NewProductForm from "./components/NewProductForm"
import EditProductForm from "./components/EditProductForm"

function App() {

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

    const categories = [
        {
            id: 1,
            name: 'category 1'
        },
        {
            id: 2,
            name: 'category 2'
        },
        {
            id: 3,
            name: 'category 3'
        }
    ];
    
    
  let ejemplo = {
    id: 1,
    name: 'agus',
    description: '26 años',
    price: 50,
    stock: 50,
    image: 'lorem',
    category: [1, 2]
  };
  
  // function onSearch(valor) {
  //   //Llamado a la API del clima
  //   fetch(`http://localhost:3001/search?palabra=${valor}`)
  //     .then(r => r.json())
  //     .then((recurso) => { state.pr = recurso
  //     };
            
  {/* <Route
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
      /> */}          
            
            
            
  return (

    <Router>
        <Route path='/' render={Nav} />
        <Route path="/catalog" render={()=> <Catalog array = {array}/>} />
        <Route exact path="/products/:id" component={Product} />

        <Route path="/products/form/new" 
            render={()=> <NewProductForm categories={categories} />}
         />   
        
        <Route path="/products/:id/edit" >
            <EditProductForm categories={categories} product={ejemplo} />
        </Route>
    </Router>

  );
}

export default App; 
