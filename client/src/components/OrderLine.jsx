import React, {useState} from 'react'
import { connect } from 'react-redux';
import { editQuantity, deleteProductFromCart } from '../Redux/actions/cartActions';
import swal from 'sweetalert';
import Order from '../components/Order';

const confirmar = (tim, fun, dat, prodName) => {
	swal({
		title: "Remover producto del carrito",
		text: `¿Desea eliminar el producto ${prodName} del carrito?`,
		icon: "warning",
		buttons: ["No", "Si"],
		dangerMode: true,
	})
		.then((willBuy) => {
			if (willBuy) {
				swal({
					text: `El producto ${prodName} ha sido eliminado del carrito.`,
					icon: "success",
					timer: tim, //"4000"
				});
			}
			if (willBuy) {
				console.log("ACEPTADO")
				fun(dat)
			} else {
				console.log("CANCELADO")
			}
		});
}

export function OrderLine ({ sessionUser, dataid, name, price, quantity, deleteProductFromCart, editQuantity, stock, productId }){
let [counter, setCounter ] = useState(quantity)
const handleChange = (e) => {
	if(e.target.value > stock) alert(`Actualmente solamente poseemos ${stock} unidades de este producto`)
	else {
		setCounter(e.target.value)
		if(sessionUser.id) editQuantity(dataid, e.target.value, sessionUser.id)
		else {
			let cart = (JSON.parse(localStorage.getItem('guestCart')))
			cart[dataid-1].quantity = e.target.value
			window.localStorage.setItem('guestCart', JSON.stringify(cart))
		}
}
}


		return (
		<tr>
		<td data-id={dataid} type="button btn-sm " className="btn btn-danger btn-sm mb-2" onClick={(e) => {
			confirmar("4000", deleteProductFromCart, e.target.getAttribute('data-id'), name)
				}}>
				X
			</td>
			<td role="button" className="border border-info cursor:pointer;" onClick={() => window.location =`/products/${productId}`}>{name}</td>
			<td className="border border-info">$ {price}</td>
			<td className="border border-info"><input className="text-right" style={{width: "80px"}}  type="number" min="1" max={stock} oninput="validity.valid||(value='');" value={counter} onChange={handleChange}/></td>
			<td className="border border-info subtotal">{quantity * price}</td>
		</tr>
		)

}



function mapStateToProps(state) {
	return {
		productDetails: state.products.productDetails,
		sessionUser: state.session.sessionUser,
	};
}
function mapDispatchToProps(dispatch) {
	return {
		deleteProductFromCart: (id) => dispatch(deleteProductFromCart(id)),
		editQuantity: (orderLineId, quantity, userId) => dispatch(editQuantity(orderLineId, quantity, userId))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderLine);







/*
export function OrderLine({ dataid, name, price, quantity, deleteProductFromCart }) {
	const [count, setCount] = useState(quantity);
	const dispatch = useDispatch()
	return (
		<tr>
			<td data-id={dataid} type="button btn-sm " className="btn btn-danger btn-sm mb-2"  onClick={(e) => deleteProductFromCart(e.target.getAttribute('data-id'))}>
				X
			</td>
			<td className="border border-info">{name}</td>
			<td className="border border-info">$ {price}</td>
			<td className="border border-info"><input type="number" value={count} onChange={(e) => {
				setCount(e.target.value)
				dispatch({ type: 'EDIT_QUANTITY_FROM_CART', payload: [dataid, e.target.value] })}}/></td>
			<td className="border border-info subtotal">{quantity * price}</td>
		</tr>
	);
}
*/
