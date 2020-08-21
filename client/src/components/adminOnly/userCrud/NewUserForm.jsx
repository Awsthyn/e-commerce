import React from 'react';
import { Link } from 'react'
import {createUser} from "../../../Redux/actions/userActions"
import {connect} from "react-redux"


export class NewUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            first_name: "",
            last_name: "",
            address: "",
            locality: "",
            state: "",
            password: "",
            admin: false
        }
        this.listUsers = props.listUsers
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    comparaPassword() {
        if (!this.state.password || !this.state.repeatPassword) {
            alert('Por favor complete los campos (*)')
        }
        if (this.state.password !== this.state.repeatPassword && this.state.admin !== true) {
            alert('Las contraseñas no coinciden')
            return false;
        } else {
            return true;

        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state)
        const newUser = this.state;
              this.props.createUser(newUser)
              .then(res => {
                  console.info(res)
                  this.setState({
                      email: "",
                      first_name: "",
                      last_name: "",
                      address: "",
                      locality: "",
                      state: "",
                      password: "",
                      admin: false
                  })
                  window.location = "/users";
                  alert("El usuario se creó correctamente")
              }).catch(err => console.error(err))
          }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="form-group">
                    <div className="form-group">
                        <label>Correo:*</label>
                        <input type="email" id="email" name="email" onChange={this.handleChange} className="form-control" value={this.state.email} />
                    </div>
                    <div className="form-group">
                        <label>Nombre:*</label>
                        <input type="text" id="first_name" name="first_name" onChange={this.handleChange} className="form-control" value={this.state.first_name} />
                    </div>
                    <div className="form-group">
                        <label>Apellido:*</label>
                        <input type="text" id="last_name" name="last_name" onChange={this.handleChange} className="form-control" value={this.state.last_name} />
                    </div>
                    <div className="form-group">
                        <label>Dirección:*</label>
                        <input type="text" id="address" name="address" onChange={this.handleChange} className="form-control" value={this.state.address} />
                    </div>
                    <div className="form-group">
                        <label>Localidad:*</label>
                        <input type="text" id="locality" name="locality" onChange={this.handleChange} className="form-control" value={this.state.locality} />
                    </div>
                    <div className="form-group">
                        <label>Provincia/Estado:*</label>
                        <input type="text" id="state" name="state" onChange={this.handleChange} className="form-control" value={this.state.state} />
                    </div>
                    <div className="form-group">
                        <label>Contraseña:*</label>
                        <input type="password" id="password" name="password" onChange={this.handleChange} className="form-control" value={this.state.password} />
                    </div>
                    <div className="form-group">
                        <label>Repetir contraseña:*</label>
                        <input type="password" id="repeatPassword" name="repeatPassword" onChange={this.handleChange} className="form-control" value={this.state.repeatPassword} />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-warning">Enviar</button>
                    </div>
                </form>

            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
    }
}
function mapDispatchToProps(dispatch) {
  return {
    createUser: user => dispatch(createUser(user)),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewUser);
