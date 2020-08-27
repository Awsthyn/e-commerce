import React from 'react';
import { Link } from "react-router-dom";
import { sessionLogin, sessionLogout } from "../../../Redux/actions/sessionActions"
import { connect } from "react-redux";


export class Profile extends React.Component {
    constructor(props){
        super(props);
    }


        render() {
        return (

                <div className="container mt-4">
                    <h2 className='card-title text-justify'>Hola! {this.props.sessionUser.first_name}, este es tu perfil.</h2>
                    <h4 className='lead'>Aca podés editar tus datos, verificar el estado de tus compras, ver tus opiniones.</h4>
                <table>
                <thead className="text-center table btn-group">
                    <tr>
                    <th><Link to="/Admin/CrudProduct"   className="btn btn-warning">Editar Mis Datos</Link></th>
                    <th><Link to="/Admin/CrudCategory" className="btn btn-warning">Estado de mis Compras</Link></th>
                    <th><Link to="/Admin/CrudUser"     className="btn btn-warning">Mis Opiniones</Link></th>
                    </tr>
                </thead>
                </table>
            </div>
        )};
    
}

function mapStateToProps(state) {
    return {
        sessionUser: state.session.sessionUser,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sessionLogin: user => dispatch(sessionLogin(user)),
        sessionLogout: () => dispatch(sessionLogout())
    };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
