import React from 'react'
import { Link } from 'react-router-dom';
import DeleteCategory from './DeleteCategory';
import { onDeleteCategory } from "../../../../Redux/actions/categoriesActions"
import { connect } from "react-redux";


export const CrudCategory = ({ categories }) => {

    return (
        <div className="container mt-4">
            <Link to="/Admin/categories/form/new" className="btn btn-success">Nuevo</Link>
            <h2 className="col-11 text-center">Edición de categorías</h2>
            <table className="table table-hover">
                <thead className="text-center">
                    <tr>
                        <th>Categoría</th>
                        <th>Descripción</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody  className="text-center">

                {categories.map((e, i) => (
                    <tr key={e.id}>
                        <td>{e.name}</td>
                        <td>{e.description}</td>
                        <td>
                            <Link
                                to = {{
                                    pathname: `/Admin/categories/${e.id}/edit`,
                                    state: { category : e }
                                }}
                                className= "btn btn-success">Editar
                            </Link>
                        </td>
                        <td>
                            <DeleteCategory id={e.id} /></td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>)
}

function mapStateToProps(state) {
    return {
        categories: state.categories.categories,
        products: state.products.products 
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
)(CrudCategory);