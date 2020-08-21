import React from 'react';
import { Link } from 'react'

export class EditUserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.user.id,
            email: props.user.email,
            first_name: props.user.first_name,
            last_name: props.user.last_name,
            address: props.user.address,
            locality: props.user.locality,
            state: props.user.state,
            password: props.user.password,
            admin: props.user.admin,
        }
        this.users = props.listUsers;


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.email]: e.target.value,
            [e.target.first_name]: e.target.value,
            [e.target.last_name]: e.target.value,
            [e.target.address]: e.target.value,
            [e.target.locality]: e.target.value,
            [e.target.state]: e.target.value,
            [e.target.password]: e.target.value // Revisar acá si hice bien y no termina comparando las contraseñas en la función "comparePws()"
        })
    }
    comparePws() {
        if (!e.target.password || !e.target.repeatPassword) {
            alert('Por favor complete los campos (*)')
        }
        if (e.target.password !== e.target.repeatPassword && this.state.admin !== true) {
            alert('Las contraseñas no coinciden')
            return false;
        } else {
            if (e.target.password !== this.state.password && this.state.admin !== true) {
                alert('La contraseña es incorrecta')
                return false;
            } else {
                return true;
            }
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('editando')
        const user = this.state;
        const url = 'http://localhost:3001/users/' + this.state.id;

        if (comparePws()) {
            fetch(url, {
                method: 'PUT',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                console.info(res)
                alert("El usuario se editó correctamente")
            }).catch(err => console.error(err))
        }
        else { alert(`No se pudo editar el usuario ${this.state.first_name} `) }
    }

    render() {
        return (
            <div className="container-fluid abs-center">
                <form onSubmit={this.handleSubmit} className="form-group">
                    <div className="form-group">
                        <label>Nuevo correo:</label>
                        <input type="email" id="email" name="email" onChange={this.handleChange} className="form-control" value={this.state.email} />
                    </div>
                    <div className="form-group">
                        <label>Nombre:</label>
                        <input type="text" id="first_name" name="first_name" onChange={this.handleChange} className="form-control" value={this.state.first_name} />
                    </div>
                    <div className="form-group">
                        <label>Apellido:</label>
                        <input type="text" id="last_name" name="last_name" onChange={this.handleChange} className="form-control" value={this.state.last_name} />
                    </div>
                    <div className="form-group">
                        <label>Dirección:</label>
                        <input type="text" id="address" name="address" onChange={this.handleChange} className="form-control" value={this.state.address} />
                    </div>
                    <div className="form-group">
                        <label>Localidad:</label>
                        <input type="text" id="locality" name="locality" onChange={this.handleChange} className="form-control" value={this.state.locality} />
                    </div>
                    <div className="form-group">
                        <label>Provincia/Estado:</label>
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
                        <button type="submit" className="btn btn-warning">Editar</button>
                    </div>
                </form>

                <Link to="/newuser">
                    Crear usuario
                    <NewUserForm />
                </Link>
                <Link to="/CrudUser">
                    Volver
                    <CrudUser />
                </Link>
            </div>
        )
    }
}

export default EditUserForm
