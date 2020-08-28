import React, { Component } from 'react'
import { connect } from 'react-redux'
import OrderLine from '../components/OrderLine';
import swal from 'sweetalert';
import { getGuestCart, emptyGuestCart, confirmCart } from '../Redux/actions/cartActions';


const confirmar = (tit, tex, tim, suc, func) => {
	swal({
		title: tit, //"¿Finalizar compra?",
		text: tex, //"¿Desea completar la compra de los productos del carrito?",
		icon: "warning",
		buttons: ["No", "Si"],
		dangerMode: true,
	})
		.then((willBuy) => {
			if (willBuy) {
				swal({
					text: suc,
					icon: "success",
					timer: tim, //"4000"
				});
			}
			if (func && willBuy) {
				func()
				console.log("ACEPTADO")
			} else {
				console.log("CANCELADO")
			}
		});
}


export class GuestCart extends Component {

	componentDidMount() {
		this.props.getGuestCart();
	}
    render() {
		const { cart, sessionUser } = this.props;
		!sessionUser.id ? null : window.location = '/Order' 
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
								/>
							))}
						</tbody>
					</table>
					<div className="mt-4 d-flex float-right mr-5">

						<div className= "row align-items-start">
							<button className="btn btn-success">
							Confirmar compra</button>
							<button className="btn btn-danger" onClick={() => {
									confirmar("¿Vaciar carrito?", "¿Desea eliminar todos productos del carrito?", "4000", "Su compra ha sido vaciado", this.props.emptyGuestCart)
								}}>
				
								Vaciar carrito
							</button>
						<h5 id="total" className="border border-success p-3 ml-auto float-right" onClick={() => console.log(document.getElementById("total").innerHTML.slice(8))}>
							Total: $
							{cart[0] ? cart.map((e) => e.quantity * e.product.price).reduce((a, b) => a + b) : 0}
						</h5>
						</div>
					</div>
				</div>
			</div>
        )
    }
}

const mapStateToProps = (state) => ({
	cart: state.cart.cart,
	sessionUser: state.session.sessionUser
})

function mapDispatchToProps(dispatch) {
	return {
	getGuestCart: () => dispatch(getGuestCart()),
	emptyGuestCart: () => dispatch(emptyGuestCart()),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestCart)
