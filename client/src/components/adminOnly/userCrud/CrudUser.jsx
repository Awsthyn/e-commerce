import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getAllUsers, deleteUser , promoteUser} from "../../../Redux/actions/userActions"

class CrudUser extends React.Component{
    constructor (props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        this.props.getAllUsers()
    }

    handleChange(e) {
        const userId = e.target.getAttribute("data-user-id")

        if (window.confirm('Presione Aceptar para confirmar la promoción')){
            this.props.promoteUser(userId)
            .then(() => alert('El usuario fue promocionado a Administrador'))
            .catch(err => alert(`Error: ${err}`))
        }
    }

    render () {
        const adminOptions = ["administrador", "usuario"]
        return (
            <div className="container mt-4">
                <Link to="CrudUser/form/new" className="btn btn-success">Nuevo</Link>
                <h2 className="col-11 text-center">Edición de usuarios</h2>
                <table className="table table-hover">
                    <thead className="text-center">
                        <tr>
                            <th>Usuario</th>
                            <td>Tipo</td>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody  className="text-center">
                    {this.props.users.map((user) => (
                        <tr key={user.id}>
                            <td>{`${user.first_name} ${user.last_name}`}</td>
                            <td>
                             {`${user.admin}`}
                            </td>

                            <td>
                            {user.admin ? adminOptions[0] : <label><input type="radio" name="admin" checked={user.admin} onChange={this.handleChange} data-user-id={user.id} />Hacer Administrador</label>}
                            </td>

                            <td><Link
                                    to={{ pathname: `/Admin/CrudUser/${user.id}/edit`,
                                        state: { user : user }}}
                                    className= "btn btn-success">Editar</Link></td>
                            <td><button onClick={() => this.props.deleteUser(user.id)} className="btn btn-danger">Eliminar</button></td>
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
      deleteUser: (id) => dispatch(deleteUser(id)),
      promoteUser: (userId) => dispatch(promoteUser(userId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CrudUser)
