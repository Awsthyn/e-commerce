import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllUsers } from "../Redux/actions/userActions"
import { Link } from 'react-router-dom';
import store from "../Redux/store"


store.dispatch(getAllUsers());
export const CrudUser = ({ users }) => {

    return (
        <div className="container mt-4">
            <Link to="categories/form/new" className="btn btn-success">Nuevo</Link>
            <h2 className="col-11 text-center">Edición de usuarios</h2>
            <table className="table">
                <thead className="text-center">
                    <tr>
                        <th>Usuario</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody  className="text-center">
                {users.map((e, i) => (
                    <tr key={e.id}>
                        <td>{`${e.first_name} ${e.last_name}`}</td>
                        <td><button className="btn btn-success">Editar</button></td>
                        <td><button className="btn btn-danger">Eliminar</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>)
}
function mapStateToProps(state) {
    return {
        users: state.users.users,
    };
}

function mapDispatchToProps(dispatch) {
    return {
      getAllUsers: () => dispatch(getAllUsers())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CrudUser)
