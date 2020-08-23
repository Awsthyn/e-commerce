import React from "react";
import ProductCard from "./ProductCard";
import { getSearchedProducts, getAllProducts, getCategoryProducts } from "../Redux/actions/productActions"
import { getAllCategories } from "../Redux/actions/categoriesActions"
import { connect } from "react-redux";

export const Catalogo = ({categories, products, getAllProducts, getCategoryProducts}) => {

    return (
        <div className="container-fluid row">

            <div className="row col-md-12 justify-content-center m-3">
            {
                products.length > 0 ?
                    products.map((e) => (
                        <ProductCard
                            key={e.id}
                            id = {e.id}
                            name={e.name}
                            price={e.price}
                            stock={e.stock}
                            image={`http://ecommerce-g5.tk/server-fotos/${e.images[1].url}.jpg`}
                        />
                    ))
                : <>
                    <ProductCard
                        id = {-1}
                        name={'No existente'}
                        price = {0.00}
                        image={'https://cronicaglobal.elespanol.com/uploads/s1/32/73/32/0/wally.jpeg'}
                    />
                    <p>No se encontraron resultados</p>
                  </>
            }
            </div>
        </div>);
};

function mapStateToProps(state) {
    return {
        categories: state.categories.categories,
        products: state.products.products
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
