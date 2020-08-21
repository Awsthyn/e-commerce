import React from 'react';
import { addCategory } from "../Redux/actions/categoriesActions"
import { connect } from "react-redux";

class NewCategory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    comparaSiHay(arregloCategorias, obj){
        for (let i = 0; i < arregloCategorias.length; i++) {
            if(obj.name.toUpperCase() === arregloCategorias[i].name.toUpperCase() || obj.description.toUpperCase() === arregloCategorias[i].description.toUpperCase()){
                return true
            }
        }
        return false
    }


    handleSubmit(e){
        e.preventDefault();
        console.log(this.state)
        const category = this.state;
        this.props.addCategory(category).then(() => {
            console.log(this.categories)
            this.setState({
                name: "",
                description: ""
            })
                alert("La categoría se creó correctamente")
                window.location = '/CrudCategory'
        }).catch(() => alert("Se produjo un Error al crear Categoría")
    )

    }

    render() {
        return (

        <div className="container-fluid abs-center">
            <form onSubmit={this.handleSubmit} className="form-group">
                <div className="form-group">
                    <label>Nombre:</label>
                    <input type="text" id="name" name="name" onChange={this.handleChange} className="form-control" value={this.state.name}/>
                </div>
                <div className="form-group">
                    <label>Descripcion:</label>
                    <input type="text" id="description" name="description" onChange={this.handleChange} className="form-control" value={this.state.description}/>
                </div>
                <button type="submit" className="btn btn-dark">Enviar</button>
            </form>
        </div>
        );
    }

}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
  return {
    addCategory: category => dispatch(addCategory(category)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCategory);
