import React from 'react';

export default class EditProduct extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
                name: this.props.name,
                description: this.props.description,
                price: this.props.price,
                stock: this.props.stock,
                image:this.props.image
                }

             this.handleChange = this.handleChange.bind(this);
             this.handleSubmit = this.handleSubmit.bind(this);
    }
  handleChange(e) {
       this.setState({[e.target.name]: e.target.value})
   }

   handleSubmit(e){
       e.prevent.default();
       this.setState({
           name: e.value.name,
           description: e.value.description,
           price: e.value.price,
           stock: e.value.stock,
           image: e.value.image

       })
   }
//imagenes con map?
  render() {
      return (
          <div className="conteiner-fluid abs-center">
          <form onSubmit={this.handleSubmit} >
              <div className="form-group">
                  <label>Nombre:</label>
                  <input type="text" id="name" name="name" value={this.props.price} onChange={this.handleChange} className="form-control"/>
              </div>
              <div className="form-group">
                  <label>Descripcion:</label>
                  <input type="text" id="description" name="description" value={this.props.description} onChange={this.handleChange} className="form-control"/>
              </div>
              <div className="form-group">
                  <label>Precio:</label>
                  <input id="price" name="price" onChange={this.handleChange} value={this.props.price} className="form-control"/>
              </div>
              <div className="form-group">
                  <label>Stock:</label>
                  <input id="stock" name="stock" onChange={this.handleChange} value={this.props.stock} className="form-control" />
              </div>
              <div className="form-group">
                  <label>Imagen:</label>
                  <img src={this.props.images} name="image" class="img-fluid" />
              </div>
              <button type="submit" className="btn btn-dark">Enviar</button>
          </form>
          </div>
      );
  }

}
