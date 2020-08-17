import React from 'react';

export default class NewCategory extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: ""
        }
        this.categories = props.listaCategories;
        
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
        const url = 'http://localhost:3001/categories/';

        console.log(this.categories)
        if(!this.comparaSiHay(this.categories, this.state)){
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(category),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                console.info(res)
                this.setState({
                    name: "",
                    description: ""
                }
                .alert("La categoría se creó correctamente"))
                
            }).catch(err => alert(err))
        }
        else {alert(`No se puede crear la categoria ${this.state.name} porque ya existe`)}
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

/*
   handleSubmit(e){
       e.preventDefault();
       console.log(this.state)
       const category = this.state;
       const url = 'http://localhost:3001/categories/';

       fetch(url, {
           method: 'POST',
           body: JSON.stringify(category),
           headers: {
               'Content-Type': 'application/json'
           }
       }).then(res => {
           console.info(res)
           this.setState({
                 name: "",
                 description: ""
             })
           alert("La categoría se creó correctamente")
       }).catch(err => console.error(err))

   }

  render() {
      return (
           <div className="container-fluid abs-center">
          <form onSubmit={this.handleSubmit} className="form-group">
              <div className="form-group">
                  <label>Nombre:</label>
                  <input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name} className="form-control"/>
              </div>
              <div className="form-group">
                  <label>Descripcion:</label>
                  <input type="text" id="description" name="description" onChange={this.handleChange} value={this.state.description} className="form-control"/>
              </div>
              <button type="submit" className="btn btn-primary">Crear</button>
          </form>
          </div>
      );
  }

*/
}
