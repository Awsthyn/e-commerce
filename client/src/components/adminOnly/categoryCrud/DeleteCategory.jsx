import React from 'react'
import { onDeleteCategory } from "../../../Redux/actions/categoriesActions"
import { connect } from "react-redux";

export function DeleteCategory({ id, onDeleteCategory }){

    return (
        <div className="mx-auto">
            <button className="btn btn-danger" onClick={() => onDeleteCategory(id)}>Eliminar</button>
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
        onDeleteCategory: (id) => dispatch(onDeleteCategory(id)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteCategory);
