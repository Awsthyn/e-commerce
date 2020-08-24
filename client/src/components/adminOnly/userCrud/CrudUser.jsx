import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getAllUsers, deleteUser } from "../../../Redux/actions/userActions"


class CrudUser extends React.Component{

    componentDidMount(){
        this.props.getAllUsers()
    }

    render () {

        return (
            <div className="container mt-4">
                <Link to="CrudUser/form/new" className="btn btn-success">Nuevo</Link>
                <h2 className="col-11 text-center">Edición de usuarios</h2>
                <table className="table table-hover">
                    <thead className="text-center">
                        <tr>
                            <th>Usuario</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody  className="text-center">
                    {this.props.users.map((e, i) => (
                        <tr key={e.id}>
                            <td>{`${e.first_name} ${e.last_name}`}</td>
                            <td><Link
                                    to={{ pathname: `/Admin/CrudUser/${e.id}/edit`,
                                        state: { user : e }}}
                                    className= "btn btn-success">Editar</Link></td>
                            <td><button onClick={() => this.props.deleteUser(e.id)} className="btn btn-danger">Eliminar</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users.users,
    };
}

function mapDispatchToProps(dispatch) {
    return {
      getAllUsers: () => dispatch(getAllUsers()),
      deleteUser: (id) => dispatch(deleteUser(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CrudUser)
