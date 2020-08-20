import React from 'react'
import { onDeleteCategory } from "../Redux/actions/categoriesActions"
import { connect } from "react-redux";

export function DeleteCategory({ id, onDeleteCategory }){
    // const CategoryId = id

    // function handleClick() {
    //     console.log('Borrando ' + CategoryId);
    //     const url = 'http://localhost:3001/categories/' + CategoryId;

    //     fetch(url, {
    //         method: 'DELETE',
    //         body: JSON.stringify({ id : CategoryId }),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(res => {
    //         console.info(res)
    //         handleDelete(CategoryId);
    //         alert("La categoría se ha Eliminado correctamente")
    //     })
    //     .catch(err => console.error(err))
    // }

    return (
        <div className="mx-auto">
            <button className="btn btn-danger" onClick={() => onDeleteCategory(id)}>Eliminar</button>
        </div>
    )
}

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
