import React, {Component} from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import S from "../css/catalogo.module.css";
import { connect } from 'react-redux'
import { getCategories, getProduct } from '../Redux/actions/productActions'


export class catalogo extends Component {
    componentDidMount() {
        this.props.getCategories();
        this.props.getProduct();
      }
    render() {
        console.log(this.props.categories)
        return (

            <div className="container-fluid row">
            <div className="col-md-3">
                <h1 className={S.title}>Categorias</h1>
                <Link>
                    <li>
                        <b>Todos los productos</b>
                    </li>
                </Link>
                
                    {this.props.categories.categories.map((e) => (
                        <Link to={`/catalogo/${e.name}`}>
                            <li
                                key={e}
                                id={e.id}
                                name={e.name}
                                >
                                {e.name}
                               
                            </li>
                        </Link>
                    ))}
                
            </div>
            <div className="row col-md-9">
                {this.props.products.products.map((e) => (
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
        )
    }
}


function mapStateToProps(state){
    return {
        products: state.products,
        categories: state.categories
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
    getProduct: () => dispatch(getProduct()),
    getCategories: () => dispatch(getCategories()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(catalogo)
