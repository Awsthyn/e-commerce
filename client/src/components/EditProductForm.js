import React from 'react';
import { withRouter } from "react-router"
import { connect } from "react-redux";

import { getAllCategories } from '../Redux/actions/categoriesActions'
import { editProduct } from '../Redux/actions/productActions'

import Checkbox from './Checkbox';
import DeleteProduct from './DeleteProduct';

class EditProduct extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
            id: props.product.id,
            name: props.product.name,
            description: props.product.description,
            price: props.product.price,
            stock: props.product.stock,
            image:props.product.image,
            category: props.product.categories
        }

        this.categories = props.categories

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onCheckboxClicked= this.onCheckboxClicked.bind(this);
    }

    handleChange(e) {
       this.setState({[e.target.name]: e.target.value})
    }

    onCheckboxClicked(category, isChecked) {
        if(isChecked){
            this.setState({
                category: [...this.state.category, category]
            })
        } else {
            this.setState({
                category: this.state.category.filter(c => c !== category.id)
            })
        }

    }

    comparaSiHay(arreglo, obj){
        for (let i = 0; i < arreglo.length; i++) {
            if(obj.name.toUpperCase() === arreglo[i].name.toUpperCase() || obj.description.toUpperCase() === arreglo[i].description.toUpperCase()){
                return true
            }
        }
        return false
    }

    handleSubmit(e){
        e.preventDefault();
        console.info('putting', this.state)
        const product = this.state;
        this.props.editProduct(product)
   }

  render() {
    const imgOptions = ["billetera", "boom", "botas", "buda", "cohetemenem",
    "conejo", "croma","escaleraalcielo","excalibur","horrocrux", "lorem", "manodedios",
     "mesa","momia", "necronomicon", "santogrial"]
    return (
    <div>
        <div className="container-fluid abs-center">
          <form onSubmit={this.handleSubmit} >
              <div className="form-group">
                  <label>Nombre:</label>
                  <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} className="form-control"/>
              </div>
              <div className="form-group">
                  <label>Descripcion:</label>
                  <input type="text" id="description" name="description" value={this.state.description} onChange={this.handleChange} className="form-control"/>
              </div>
              <div className="form-group">
                  <label>Precio:</label>
                  <input id="price" name="price" onChange={this.handleChange} value={this.state.price} className="form-control"/>
              </div>
              <div className="form-group">
                  <label>Stock:</label>
                  <input id="stock" name="stock" onChange={this.handleChange} value={this.state.stock} className="form-control" />
              </div>
              <div className="form-group">
              <label>
                Imagen:
                <select value={this.state.image} name="image" onChange={this.handleChange}>
                  {imgOptions.map(e =>{ return (<option value={e}>{e}</option>)})}
          </select>
          </label>
              </div>

              <label>Categoria:</label>
            <div className="form-check form-check-inline">
                {this.props.categories.map( category => {
                    const marcado = this.state.category.filter(c => c.id === category.id).length > 0
                    return (
                        <Checkbox key = {category.id} initialState={marcado} category={category} onChange={this.onCheckboxClicked} />
                    )}
                )}
            </div>
            <div>
            <button type="submit" className="btn btn-warning">Editar</button>
            </div>
          </form>
          </div>
    </div>);
    }

}

function mapStateToProps(state) {
    return {
        categories: state.categories.categories,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getAllCategories: () => dispatch(getAllCategories()),
        editProduct: product => dispatch(editProduct(product)),
    };
}


export default connect (
    mapStateToProps,
    mapDispatchToProps
)(withRouter(EditProduct))
