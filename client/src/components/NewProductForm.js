import React from 'react';
//import Category from './';

export default class NewProduct extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
            name: "",
            description: "",
            price: "",
            stock: "",
            image: "",
            category: 1
        }
        this.categories = props.categories

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(e) {
       this.setState({[e.target.name]: e.target.value})
    }

   handleSubmit(e){
       e.preventDefault();
       console.log(this.state)
       const product = this.state;
       const url = 'http://localhost:3001/products/';

       fetch(url, {
           method: 'POST',
           body: JSON.stringify({ product }),
           headers: {
               'Content-Type': 'application/json'
           }
       }).then(res => {
           console.info(res)
       }).catch(err => console.error(err))

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
              <label>Categoria:</label>
               {/*<select onChange={ (e)=> {
                   this.setState({
                   category: e.target.value
               })}} >
                    {this.categories.map(category =>(
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))
                }
                </select>*/}
              <button type="submit" className="btn btn-dark">Enviar</button>
          </form>
          </div>
      );
  }

}
