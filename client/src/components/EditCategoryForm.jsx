import React from 'react';

export default class EditCategoryForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.category.id,
            name: props.category.name,
            description: props.category.description
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        console.info('putting')
        const category = this.state;
        const url = 'http://localhost:3001/categories/' + this.state.id;

        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(category),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.info(res)
            alert("La Categoría se editó correctamente")
        }).catch(err => console.error(err))

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
                <div>
                <button type="submit" className="btn btn-warning">Editar</button>
                </div>
            </form>
        </div>
        );
    }
}
