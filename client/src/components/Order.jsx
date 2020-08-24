import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCart, emptyCart, deleteProductFromCart, confirmCart } from '../Redux/actions/cartActions';
import OrderLine from '../components/OrderLine';

class Order extends Component {

    componentDidMount() {
        this.props.getCart();
    }
    
	render() {
	const {cart} = this.props;
		return ( 
			<div>
				<h1 className="d-flex justify-content-center m-3">Carrito</h1>
				<div className="">
					<table className="table table-hover">
						<thead className="text-center">
							<tr>
								<td></td>
								<td className="font-weight-bold text-info border border-secondary bg-dark">Producto</td>
								<td className="font-weight-bold text-info border border-secondary bg-dark">Precio por unidad</td>
								<td className="font-weight-bold text-info border border-secondary bg-dark">Cantidad</td>
								<td className="font-weight-bold text-info border border-secondary bg-dark">Subtotal</td>
							</tr>
						</thead>
						<tbody className="text-center border bg-light">
							{cart.map((e) => (
								<OrderLine
									dataid={e.id}
									key={e.product.name}
									name={e.product.name}
									price={e.product.price}
									quantity={e.quantity}
									stock={e.product.stock}
									deleteProductFromCart={deleteProductFromCart}
								/>
							))}
						</tbody>
					</table>
					<div className="mt-4 d-flex justify-content-around">
						<h5 id="total" className="border border-success p-3" onClick={()=>console.log(document.getElementById("total").innerHTML.slice(8))}>
							Total: $
							{cart[0] ? cart.map((e) => e.quantity * e.product.price).reduce((a, b) => a + b) : 0}
						</h5>
						<div>
							<button className="btn btn-success" onClick={() => {
								this.props.confirmCart(document.getElementById("total").innerHTML.slice(8))
								alert("La compra se ha procesado exitosamente. En breve nos pondremos en contacto con usted")
								window.location = "/"
							}
								}>Confirmar compra</button>
							<button className="btn btn-danger" onClick={this.props.emptyCart}>
								Vaciar carrito
							</button>
						</div>
					</div>
				</div>
              </div>
		);
	}
}

function mapStateToProps(state) {
	return {
		cart: state.cart.cart,
	};
}

function mapDispatchToProps(dispatch) {
	return {
    getCart: () => dispatch(getCart()),
	emptyCart: () => dispatch(emptyCart()),
	deleteProductFromCart: (id) => dispatch(deleteProductFromCart(id)),
	confirmCart: (total) => dispatch(confirmCart(total))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);
