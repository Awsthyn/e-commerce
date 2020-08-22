import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

export function AdminLogin () {
    const [form, setForm] = useState({name: '', password: ''})
    
    let history = useHistory();

    function handleChange(e) {
        setForm({[e.target.name]: e.target.value})
    }

    function handleSubmit() {
        alert("Ha ingresado correctamente");
        history.push('/Admin')
    }

        return (

        <div className="container-fluid abs-center">
            <form onSubmit={() => handleSubmit()} className="form-group">
                <div className="form-group">
                    <label>Nombre:</label>
                    <input type="text" id="name" name="name" onChange={(e) => handleChange(e)} className="form-control" value={form.name}/>
                </div>
                <div className="form-group">
                    <label>Contraseña:</label>
                    <input type="password" id="password" name="password" onChange={(e) => handleChange(e)} className="form-control" value={form.password}/>
                </div>
                <button type="submit" className="btn btn-dark">Enviar</button>
            </form>
        </div>
        );
    
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
  return {
    // addCategory: category => dispatch(addCategory(category)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminLogin);
