import React from 'react';
import { connect } from 'react-redux';
import { sessionLogin, sessionLogout } from '../../Redux/actions/sessionActions';

export class LoginModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// let history = useHistory();

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.sessionLogin(this.state).then(() => {
      this.setState({email:"", password:""})
        })
        
    // history.push('/Admin')
}


	render() {
		return (
			<form onSubmit={this.handleSubmit} className="form-group ">
				<div
					className="modal fade mt-4"
					id="modalLoginForm"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="myModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header text-center">
								{/*<h4 className="modal-title w-100 font-weight-bold">Log in</h4>*/}
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<form className="modal-body mx-3">
								<div className="form mb-1">
									<input
										type="email" name="email"
										id="defaultForm-email"
										placeholder="Correo electrónico"
										value={this.state.email} required
										className="form-control validate form-control-lg"
										onChange={this.handleChange}
									/>
									<label data-error="wrong" data-success="right" htmlFor="defaultForm-email"></label>
								</div>

								<div className="form">
									<input
										type="password" name="password"
										id="defaultForm-pass"
										placeholder="Contraseña"
										className="form-control validate form-control-lg"
										value={this.state.password} required
										onChange={this.handleChange}
									/>
									<label data-error="wrong" data-success="right" htmlFor="defaultForm-pass"></label>
								</div>
								<div className="d-flex justify-content-center">
									<input
										className="font-weight-bold btn btn-primary btn-lg"
										style={{ width: '400px' }} type="submit"
										value="Iniciar sesión"
									/>
								</div>
								<a href="/PassForgot" className="text-center mt-1">¿Olvidaste tu contraseña?</a>
							</form>
							<div className="modal-footer d-flex justify-content-center mb-3">
								<button className="font-weight-bold btn btn-success btn-lg" onClick={()=>window.location="/register"}>Crear cuenta</button>
							</div>
						</div>
					</div>
				</div>
			</form>
		);
	}
}

function mapStateToProps(state) {
	return {
		sessionUser: state.session.sessionUser,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		sessionLogin: (user) => dispatch(sessionLogin(user)),
		sessionLogout: () => dispatch(sessionLogout()),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
