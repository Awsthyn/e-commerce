import React from 'react'
import { Link } from 'react-router-dom';
import DeleteCategory from './DeleteCategory';
import EditCategoryForm from './EditCategoryForm';
import { onDeleteCategory } from "../Redux/actions"
import { connect } from "react-redux";


export const CrudCategory = ({ categories, onDeleteCategory }) => {

    function handleDelete(category) {
        onDeleteCategory(category)
    }

    return (
        <div className="container mt-4">
            <Link to="categories/form/new" className="btn btn-success">Nuevo</Link>
            <h2 className="col-11 text-center">Edición de categorías</h2>
            <table className="table">
                <thead className="text-center">
                    <tr>
                        <th>Categoría</th>
                        <th>Descripción</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>

                {categories.map((e, i) => (
                    <tr key={e.id}>
                        <td>{e.name}</td>
                        <td>{e.description}</td>
                        <td>
                            <Link
                                to = {{
                                    pathname: `/categories/${e.id}/edit`,
                                    state: { category : e }
                                }}
                                className= "btn btn-success">Editar
                            </Link>
                        </td>
                        <td>
                            <DeleteCategory id={e.id} handleDelete={handleDelete.bind(this)} />
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>)
}

function mapStateToProps(state) {
    return {
        categories: state.categories,
        products: state.products 
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