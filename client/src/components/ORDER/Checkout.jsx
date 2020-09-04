import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { confirmCart } from "../../Redux/actions/cartActions"

export class Checkout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email:"",
			address:"",
			locality:"",
			state:"",
			typeOfCard:"credit",
			cardName:"",
			cardNumber:"",
			cardExpiration:"",
			cardCvv:"",
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e){
	this.setState({[e.target.name]: e.target.value});	
	this.setState({typeOfCard: e.target.value});
	
	}

	handleSubmit(e) {
		e.preventDefault();		
		const checkout = this.state;
		console.log(this.state)

		this.props.confirmCart()
		.then(res => {
				console.info(res)
				this.setState({
					email:"",
					address:"",
					locality:"",
					state:"",
					typeOfCard:"",
					cardName:"",
					cardNumber:"",
					cardExpiration:"",
					cardCvv:"",
				})
				window.location = "/Profile"; 
				alert("Pago Procesado - Gracias por su compra!!")
		}).catch(err => console.error(err))
	}

	render(){
		return (
			<div className="container" >    
				<h4 className="text-center">Terminar Compra</h4>          
				<form onSubmit={this.handleSubmit} className="form-group">
					<div className="container">
						<div className="form-group">
							<label>E-Mail:</label>
							<input type="email" id="email" name="email" onChange={this.handleChange} className="form-control" value={this.state.email} required/>
						</div>
						<div className="form-group">
							<label>Dirección:</label>
							<input type="text" id="address" name="address" onChange={this.handleChange} className="form-control" value={this.state.address} required/>
						</div>
						<div class="row">
							<div className="col-md-6">
								<label>Localidad:</label>
								<input type="text" id="locality" name="locality" onChange={this.handleChange} className="form-control" value={this.state.locality} required />
							</div>
							<div className="col-md-6">
								<label>Provincia/Estado:</label>
								<input type="text" id="state" name="state" onChange={this.handleChange} className="form-control" value={this.state.state} required />
							</div>
						</div>

					<h4>Total $ {console.log(this.props)}</h4>
					
					<h4 class="mb-3">Forma de Pago</h4>
					<div class="d-block my-3">
          <div className="container row">
						<div class="custom-control custom-radio mr-4">
							<input id="credit" name="paymentMethod" type="radio" checked={this.state.typeOfCard === "credit"} onChange={this.handleChange} value="credit" class="custom-control-input"   required/>
							<label class="custom-control-label" name="credit" for="credit">Credito</label>
						</div>
						<div class="custom-control custom-radio">
							<input id="debit" name="paymentMethod" type="radio" checked={this.state.typeOfCard === "debit"} onChange={this.handleChange} value="debit"class="custom-control-input" required/>
							<label class="custom-control-label" name="debit" for="debit">Debito</label>
						</div>  	
					</div>        
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="cc-name">Nombre completo</label>
            <input type="text" class="form-control" name="cardName" onChange={this.handleChange} id="cc-name" value={this.state.cardName} placeholder="" required/>
            <small class="text-muted">Nombre completo como sale en la Tarjeta</small>
            <div class="invalid-feedback">
              El nombre es Requerido
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <label for="cc-number">Numero de Tarjeta</label>
            <input type="text" class="form-control" name="cardNumber" onChange={this.handleChange}id="cc-number" value={this.state.cardNumber} placeholder="" required/>
            <div class="invalid-feedback">
              El numero de la tarjeta es requerido
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 mb-3">
            <label for="cc-expiration">Vencimiento</label>
            <input type="text" class="form-control" name="cardExpiration" onChange={this.handleChange} value={this.state.cardExpiration} id="cc-expiration" placeholder="" required/>
            <div class="invalid-feedback">
              Fecha de vencimiento requerida
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="cc-cvv">CVV</label>
            <input type="text" class="form-control" name="cardCvv" onChange={this.handleChange} id="cc-cvv" value={this.state.cardCvv} placeholder="" required/>
            <div class="invalid-feedback">
              Codigo de Seguridad Requerido
            </div>
          </div>
        </div>
        <hr class="mb-4"/>
				<div className="row">
					<Link to="/Order" className="col-md-6 col-sm-6 col-xs-6 pad-adjust">
						<input type="submit"  className="btn btn-danger btn-lg btn-block" value="Cancelar" />					
					</Link>
					<div className="col-md-6 col-sm-6 col-xs-6 pad-adjust">
        		<button class="btn btn-success btn-lg btn-block" type="submit">Finalizar Compra</button>
					</div>
				</div>
				</div>
      </form>
				
			</div>								
    )}
}

function mapStateToProps(state) {
	return {
			orders: state.orders.orders,
			sessionUser: state.session.sessionUser,
	};
}

function mapDispatchToProps(dispatch){
	return {
    confirmCart: user => dispatch(confirmCart(user))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
