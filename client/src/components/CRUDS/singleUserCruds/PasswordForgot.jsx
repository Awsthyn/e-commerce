import React from 'react';
// import { useHistory } from "react-router-dom";
import { sessionLogin, sessionLogout, getForgottenUser, fakeLogUser } from "../../../Redux/actions/sessionActions"
import { connect } from "react-redux";


export class PasswordForgot extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            securiryAnswer: "",
            show: false,
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
        if(this.state.show) {
            this.props.fakeLogUser()
        }
        this.props.getForgottenUser(this.state.email)
        this.setState({show: true})
        // Redirect('/ResetQuestion')
            
        // history.push('/Admin')
    }

        render() {
        return (

        <div className="d-flex border border-secondary m-auto m-0 shadow p-3 mb-5 bg-white rounded m-50 d-flex flex-column align-items-center" >
            <h3 className="card-title display-4">Ingresa el mail de tu cuenta.</h3>
            <form onSubmit={this.handleSubmit} className="form-group ">
                <div className="form-group">
                    <label className="lead">Mail:</label>
                    <input type="text" id="email" name="email" onChange={this.handleChange} className="form-control" value={this.state.email} placeholder={'email@ejemplo.com'}/>
                </div>
                <div className="dropdown-divider"></div>
                {this.state.show ? <div className="lead">
                <label className="lead">{this.props.forgottenUser.securityQuestion}</label>
                <input type="text" id="securiryAnswer" name="securiryAnswer" onChange={this.handleChange} className="form-control" value={this.state.securiryAnswer} placeholder={'respuesta de seguridad'}/>
                </div> :
                    null
                }
        
                {/* <div className="form-group">
                    <label class="lead">Contraseña:</label>
                    <input type="password" id="password" name="password" onChange={this.handleChange} className="form-control" value={this.state.password} placeholder={'contraseña'}/>
                </div> */}

            <button type="submit" className="btn btn-dark lead" >{this.state.show? 'Enviar' : 'Abrir'}</button>
            </form>
        </div>
        )};
    
}

function mapStateToProps(state) {
    return {
        sessionUser: state.session.sessionUser,
        forgottenUser: state.session.forgottenUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sessionLogin: user => dispatch(sessionLogin(user)),
        sessionLogout: () => dispatch(sessionLogout()),
        getForgottenUser: (email) => dispatch(getForgottenUser(email)),
        fakeLogUser: () => dispatch(fakeLogUser())
    };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PasswordForgot);
