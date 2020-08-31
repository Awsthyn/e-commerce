import React from 'react';
// import { useHistory } from "react-router-dom";
import { sessionLogin, sessionLogout } from "../../../Redux/actions/sessionActions"
import { connect } from "react-redux";


export class Question extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: ''
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
            alert("enviado")})
            this.setState({email:""})
        // history.push('/Admin')
    }

        render() {
        return (

        <div className="d-flex border border-secondary m-auto m-0 shadow p-3 mb-5 bg-white rounded m-50 d-flex flex-column align-items-center" >
            <h3 className="card-title display-4">Ingresa la respuesta de seguridad.</h3>
            <form onSubmit={this.handleSubmit} className="form-group ">
                <div className="lead">
                    Mail: {this.props.forgottenUser.email}
                </div>
                <div className="dropdown-divider"></div>
                <div className="form-group">
                    <label className="lead">{this.props.forgottenUser.securityQuestion}</label>
                    <input type="text" id="securiryAnswer" name="securiryAnswer" onChange={this.handleChange} className="form-control" value={this.state.securiryAnswer} placeholder={'respuesta de seguridad'}/>
                </div>
                <div className="dropdown-divider"></div>
                <button type="submit" className="btn btn-dark lead" >Enviar</button>
            </form>
        </div>
        )};
    
}

function mapStateToProps(state) {
    return {
        sessionUser: state.session.sessionUser,
        forgottenUser: state.session.forgottenUser,
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
)(Question);
