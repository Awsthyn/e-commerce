import React from "react";
import Checkbox from "../../Checkbox";
import { addProduct } from "../../../Redux/actions/productActions"
import { connect } from "react-redux";

export class NewProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            price: "",
            stock: "",
            image: "",
            category: []
        }
        this.products = props.products
        this.categories = props.categories
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onCheckboxClicked = this.onCheckboxClicked.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    comparaSiHay(arregloProductos, obj){
        for (let i = 0; i < arregloProductos.length; i++) {
            if(obj.name.toUpperCase() === arregloProductos[i].name.toUpperCase()) {
                return true
            }
        }
        return false
    }

    handleSubmit(e){
        e.preventDefault();
        const product = this.state;

        if(!this.comparaSiHay(this.products, product)){
            this.props.addProduct(product)
            .then(() => {
                this.setState({
                    name: "",
                    description: "",
                    price: "",
                    stock: "",
                    image: "",
                    category: []
                })
            alert("El producto se creó correctamente")
            window.location = '/Admin/CrudProduct'
        }).catch(() => alert("Se produjo un Error al crear el Producto"))
        }else{
            alert("El producto que intentas crear ya existe")
        }
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

    render() {
      const imgOptions = ["billetera", "boom", "botas", "buda", "cohetemenem",
      "conejo", "croma","escaleraalcielo","excalibur","horrocrux", "lorem", "manodedios",
       "mesa","momia", "necronomicon", "santogrial"]
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
                <div className="form-group">
                    <label>Precio:</label>
                    <input id="price" name="price" onChange={this.handleChange} className="form-control" value={this.state.price }/>
                </div>
                <div className="form-group">
                    <label>Stock:</label>
                    <input id="stock" name="stock" onChange={this.handleChange} className="form-control" value={this.state.stock}/>
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
                        return (
                        <Checkbox key = {category.id} initialState={false} category={category} onChange={this.onCheckboxClicked} />
                        )}
                    )}
                </div>
                <button type="submit" className="btn btn-dark">Enviar</button>
            </form>
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories.categories,
        products: state.products.products
    }
}

function mapDispatchToProps(dispatch) {
  return {
    addProduct: product => dispatch(addProduct(product)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewProduct);
