import React from 'react';
// import { useHistory } from "react-router-dom";
import { sessionLogin, sessionLogout } from "../../../Redux/actions/sessionActions"
import { connect } from "react-redux";


export class AdminLogin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // let history = useHistory();

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.sessionLogin(this.state) .then(() => {
            console.log("estad0", this.state)
            alert("enviado")})
        // history.push('/Admin')
    }

        render() {
        return (

        <div className="container-fluid abs-center">
            <form onSubmit={this.handleSubmit} className="form-group">
                <div className="form-group">
                    <label>Nombre:</label>
                    <input type="text" id="email" name="email" onChange={this.handleChange} className="form-control" value={this.state.email}/>
                </div>
                <div className="form-group">
                    <label>Contraseña:</label>
                    <input type="password" id="password" name="password" onChange={this.handleChange} className="form-control" value={this.state.password}/>
                </div>
                <button type="submit" className="btn btn-dark" >Enviar</button>
            </form>
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
)(AdminLogin);
