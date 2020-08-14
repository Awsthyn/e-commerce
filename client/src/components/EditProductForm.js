import React from 'react';
import Checkbox from './Checkbox';

export default class EditProduct extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
            id: props.product.id,
            name: props.product.name,
            description: props.product.description,
            price: props.product.price,
            stock: props.product.stock,
            image:props.product.image,
            category: props.product.category
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
                category: [...this.state.category, category.id]
            })
        } else {
            this.setState({
                category: this.state.category.filter(c => c !== category.id)
            })
        }
    }

   handleSubmit(e){
       e.preventDefault();
       console.info('putting')
       const product = this.state;
       const url = 'http://localhost:3001/products/' + this.state.id;

       fetch(url, {
           method: 'POST',
           body: JSON.stringify(product),
           headers: {
               'Content-Type': 'application/json'
           }
       }).then(res => {
           console.info(res)
       }).catch(err => console.error(err))

   }

  render() {
      return (
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
                  <label>Imagen:</label>
                <input type="text" name="image" onChange={this.handleChange} className="form-control"/>
              </div>

              <label>Categoria:</label>
            <div className="form-check form-check-inline">
                {this.categories.map( category => {
                    const marcado = this.state.category.filter(id => id === category.id).length > 0
                    return (
                        <Checkbox key = {category.id} initialState={marcado} category={category} onChange={this.onCheckboxClicked} />
                    )}
                )}
            </div>

              <button type="submit" className="btn btn-dark">Enviar</button>
          </form>
          </div>
      );
  }

}
