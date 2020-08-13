import React from 'react';
import Checkbox from './Checkbox';

export default class NewProduct extends React.Component {

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
        this.categories = props.categories

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onCheckboxClicked = this.onCheckboxClicked.bind(this);
  }

    handleChange(e) {
       this.setState({[e.target.name]: e.target.value})
    }

   handleSubmit(e){
       e.preventDefault();
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
