import React, { Component } from 'react'
import { connect } from 'react-redux';
import { editQuantity, deleteProductFromCart } from '../Redux/actions/cartActions';
//import Counter from '../components/Counter';
//import {addToOrder } from "../Redux/actions/orderActions"

export class OrderLine extends Component {
	constructor (props) {
		super(props)
	}
	render() {
		const { dataid, name, price, quantity, deleteProductFromCart, editQuantity, stock } = this.props
		return (
			<tr>
			<td data-id={dataid} type="button btn-sm " className="btn btn-danger btn-sm mb-2"  onClick={(e) => deleteProductFromCart(e.target.getAttribute('data-id'))}>
				X
			</td>
			<td className="border border-info">{name}</td>
			<td className="border border-info">$ {price}</td>
			<td className="border border-info"><input type="number" min="1" max={stock} oninput="validity.valid||(value='');" value={quantity} onChange={(e) => {
				if(e.target.value > stock) alert(`Actualmente solamente poseemos ${stock} unidades de este producto`)
				else editQuantity(dataid, e.target.value)}}/></td>
			<td className="border border-info subtotal">{quantity * price}</td>
		</tr>
		)
	}
}



function mapStateToProps(state) {
	return {
		productDetails: state.products.productDetails,
	};
}
function mapDispatchToProps(dispatch) {
	return {
		deleteProductFromCart: (id) => dispatch(deleteProductFromCart(id)),
		editQuantity: (orderLine, quantity) => dispatch(editQuantity(orderLine, quantity))
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