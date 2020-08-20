import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import S from "../css/catalogo.module.css";
import { getAllCategories, getSearchedProducts, getAllProducts, getCategoryProducts } from "../Redux/actions"
import { connect } from "react-redux";
import store from "../Redux/store"

//-------- para traer cats y prods al principio y ya esten disponibles -------
store.dispatch(getAllCategories());
store.dispatch(getAllProducts());




export const Catalogo = ({categories, products, getAllProducts, getCategoryProducts}) => {

    return (
        
        <div className="container-fluid row">
        <div className="col-md-3">
            <h1 className={S.title}>Categorias</h1>
            <Link>
                <li onClick={()=>(getAllProducts())}>
                    <b>Todos los productos</b>
                </li>
            </Link>
                {categories.map((e) => (
                    <Link to={`/catalogo/${e.name}`}>
                        <li
                            key={e}
                            id={e.id}
                            name={e.name}
                            onClick={(e) =>
                                getCategoryProducts(e.target.getAttribute("name"))
                            }>
                            {e.name}
                        </li>
                    </Link>
                ))}
            
        </div>
        <div className="row col-md-9">
            {products.map((e) => (
                <ProductCard
                    key={e}
                    id = {e.id}
                    name={e.name}
                    price={e.price}
                    image={`http://ecommerce-g5.tk/server-fotos/${e.images[1].url}.jpg`}
                />
            ))}
        </div>
    </div>
        
    );
};



function mapStateToProps(state) {
    return {
        categories: state.categories,
        products: state.products 
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getAllProducts: () => dispatch(getAllProducts()),
        getSearchedProducts: keyword => dispatch(getSearchedProducts(keyword)),
        getCategoryProducts: category => dispatch(getCategoryProducts(category)),
        getAllCategories: () => dispatch(getAllCategories()),

    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Catalogo);



