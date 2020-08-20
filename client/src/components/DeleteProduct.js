import React from 'react'
import { onDeleteProduct } from "../Redux/actions/productActions"
import { connect } from "react-redux";

export function DeleteProduct({ id, onDeleteProduct }){

    return (
        <div className="mx-auto">
            <button className="btn btn-danger" onClick={() => onDeleteProduct(id)}>Eliminar</button>
        </div>
    )
}


//------------ REDUX --------------------------------

function mapStateToProps(state) {
    return {
        categories: state.categories.categories,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onDeleteProduct: (id) => dispatch(onDeleteProduct(id)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteProduct);

