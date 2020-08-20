import React from 'react';
import { withRouter } from "react-router"
import Checkbox from './Checkbox';
import DeleteProduct from './DeleteProduct';
import { onDeleteCategory } from "../Redux/actions/categoriesActions"
import { connect } from "react-redux";

export default  withRouter(class EditProduct extends React.Component {

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
        this.listaProductos = props.listaProducts
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
                category: [...this.state.category, category.id]
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
        console.info('putting')
        const product = this.state;
        const url = 'http://localhost:3001/products/' + this.state.id;

        //if(!this.comparaSiHay(this.listaProductos, this.state)){
           fetch(url, {
           method: 'PUT',
           body: JSON.stringify(product),
           headers: {
               'Content-Type': 'application/json'
           }
       }).then(res => {
           console.info(res)
           alert("El Producto se editó correctamente")
           window.location = "/crud";
       }).catch(err => console.error(err))
        /*} else {alert(`No se puede editar a ${this.state.name} porque ya existe un producto con ese nombre.`)}*/



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
                {this.categories.map( category => {
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
    </div>
      );
  }

}
)
