import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCart, deleteProductFromCart } from '../Redux/actions/orderActions';
import OrderLine from '../components/OrderLine';

class Order extends Component {
  constructor (props) {
    super(props)

}
componentDidMount() {
    this.props.getCart();
}
	render() {
    const {cart} = this.props;
		return ( 
			<div>
				<h1 className="d-flex justify-content-center m-3">Carrito</h1>
				<div className="">
					<table className="table ">
						<thead className="text-center">
							<tr>
								<td>X</td>
								<td>Producto</td>
								<td>Precio</td>
								<td>Cantidad</td>
								<td>Subtotal</td>
							</tr>
						</thead>
						<tbody className="text-center">
							{cart.map((e) => (
								<OrderLine
									dataid={e.id}
									key={e.product.name}
									name={e.product.name}
									price={e.product.price}
									quantity={e.quantity}
								/>
							))}
						</tbody>
					</table>
					<div className="mt-4 d-flex justify-content-around">
						<h5 className="">
							Total: $
							{cart[0] ? cart.map((e) => e.quantity * e.product.price).reduce((a, b) => a + b) : 0}
						</h5>
						<div>
							<button className="btn btn-success">Confirmar compra</button>
							<button className="btn btn-danger" onClick={this.props.deleteProductFromCart}>
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
		deleteProductFromCart: () => dispatch(deleteProductFromCart()),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);
