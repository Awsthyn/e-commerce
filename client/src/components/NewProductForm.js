import React from 'react';

export default class NewProduct extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
                name: "",
                description: "",
                price: "",
                stock: "",
                image: ""

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

  render() {
      return (
           <div className="conteiner-fluid abs-center">
          <form onSubmit={this.handleSubmit} className="form-group">
              <div className="form-group">
                  <label>Nombre:</label>
                  <input type="text" id="name" name="name" onChange={this.handleChange} className="form-control"/>
              </div>
              <div className="form-group">
                  <label>Descripcion:</label>
                  <input type="text" id="description" name="description" onChange={this.handleChange} className="form-control"/>
              </div>
              <div className="form-group">
                  <label>Precio:</label>
                  <input id="price" name="price" onChange={this.handleChange} className="form-control"/>
              </div>
              <div className="form-group">
                  <label>Stock:</label>
                  <input id="stock" name="stock" onChange={this.handleChange} className="form-control"/>
              </div>
              <div className="form-group">
                  <label>Imagen:</label>
                <input type="text" name="image" onChange={this.handleChange} className="form-control"/>
              </div>
              <button type="submit" className="btn btn-dark">Enviar</button>
          </form>
          </div>
      );
  }

}
