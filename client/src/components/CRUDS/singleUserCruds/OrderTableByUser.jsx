import React from 'react';
import { connect } from 'react-redux';
import { getAllOrders, editOrder } from "../../../Redux/actions/orderActions";
import { Link } from "react-router-dom";


class OrderTableByUser extends React.Component {
	constructor(props) {
		super(props)
		this.state = {modal14: false}
		this.handleChange = this.handleChange.bind(this);
	}

	toggle = nr => () => {
		let modalNumber = 'modal' + nr
		this.setState({[modalNumber]: !this.state[modalNumber]});
	}

	componentDidMount() {
		this.props.getAllOrders()        
	}

	handleChange(e) {
		const orderId = Number.parseInt(e.target.getAttribute('data-order-id'))
		const order = this.props.orders.find(o => o.id === orderId)
		order.orderStatus = e.target.value

		this.props.editOrder(order)
			.then(() => alert('El estado de la orden fue modificado.'))
			.catch(err => alert(`Error: ${err}`))
	}

	render() {
		const estadosOptions = ["carrito", "creada", "procesando", "cancelada", "completa"]
		// console.log(this.props.orders)
		console.log(this.props.sessionUser)
		return (
			<div className="container mt-4">
				<h2 className="col-11 text-center">Lista de Ordenes</h2>
				<table className="table table-hover table-responsive " >
					<thead className="text-center ">
						<tr>
							<th>Nro de Orden</th>
							<th>Usuario</th>
							<th>Status</th>							
							<th>Fecha / Hora</th>							
							<th>Total</th>							
							<th>Ver</th>
						</tr>
					</thead>
					<tbody className="text-center">					
					{!!this.props.orders ? 
					this.props.orders.filter(e => e.userId == this.props.sessionUser.id).map(order => (
							<tr key={order.id}>
									<td>{order.id}</td>
									<td>{order.user.first_name}</td>
									<td>{order.orderStatus}</td>
									<td>{order.createdAt}</td>
									{order.orderLines.length > 0 ? <td>${order.orderLines.map(e => e.quantity * e.product.price).reduce((a, b) => a + b)}</td> : <td>$0</td>}											
									<td>
										<button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#order${order.id}`} >Detalles</button>
										<div className="modal fade" id={'order' + order.id} role="dialog">
											<div className="modal-dialog">
												<div className="modal-content">
													<div className="modal-body">
														<table>
															<thead className="text-center">
																<tr>
																	<th>Nombre del producto</th>
																	<th>Cantidad</th>
																	<th>Precio</th>
																	<th>Total</th>																	
																</tr>
															</thead>
															{order.orderLines.map((g) => (
																<tr>
																	<td>{g.product.name}</td>
																	<td>{g.quantity}</td>
																	<td>{g.product.price}</td>
																	<td>{g.product.price * g.quantity}</td>
																	<Link to={`/products/${g.product.id}`}>
																	<button type="button" className="btn btn-warning d-flex align-text-center" data-toggle="modal" data-target={`#order${order.id}`} >Ver</button>
																	</Link>
																</tr>
															))}
														</table>
													</div>
													<div className="modal-footer">
														<button type="button" className="btn btn-warning" data-dismiss="modal">Close</button>
													</div>
												</div>
											</div>
										</div>
									</td>
								</tr>
						)):false
						
						}
					</tbody>
				</table>
				<div>
					<Link to="/Profile">
						<button type="button" className="btn btn-warning" >Volver</button>
					</Link>
				</div>
			</div>
		)

	}
}


function mapStateToProps(state) {
	return {
		orders: state.orders.orders,
		sessionUser: state.session.sessionUser
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getAllOrders: () => dispatch(getAllOrders()),		
		editOrder: (order) => dispatch(editOrder(order)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderTableByUser);
