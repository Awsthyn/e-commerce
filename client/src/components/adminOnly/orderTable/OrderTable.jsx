import React from 'react'

import { connect } from 'react-redux'
import { getAllOrders , editOrder } from "../../../Redux/actions/orderActions"

class OrderTable extends React.Component {
    constructor (props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.getAllOrders();
    }

    handleChange(e) {
        const orderId = Number.parseInt(e.target.getAttribute('data-order-id'))
        const order = this.props.orders.find(o => o.id === orderId)
        order.orderStatus = e.target.value

        this.props.editOrder(order)
        .then(() => alert('El estado de la orden fue modificado.'))
        .catch(err => alert(`Error: ${err}`))
    }

    render () {
        const estadosOptions = ["carrito", "creada", "procesando", "cancelada", "completa"]
        const tot = 0;
        return (

            <div className="container mt-4">
                <h2 className="col-11 text-center">Lista de Ordenes</h2>
                <table className="table table-responsive">
                    <thead className="text-center">
                    <tr>
                        <th>Nro de Orden</th>
                        <th>Status</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Editar Estado</th>
                        <th>Total</th>
                    </tr>
                </thead>
            <tbody>
            {console.log(this.props.orders.map(e => e.orderLines))}
            {this.props.orders.map(order =>(
                <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.orderStatus}</td>
                    <td>{order.user.first_name}</td>
                    <td>{order.user.last_name}</td>
                    <td>{order.user.email}</td>
                    <td>
                    <select name='orderStatus' data-order-id={order.id} value={order.orderStatus.toLowerCase()} onChange={this.handleChange}>
                        {
                            estadosOptions.map((o) => (
                                <option key={o} value={o}>{o}</option>
                            ))
                        }
                    </select>
                    </td>

                    {order.total !== null? <td>${order.total}</td>:<></>}

                    {order.orderLines.length >0 ? <td>${order.orderLines.map(e => e.quantity * e.product.price).reduce((a, b) => a + b)}</td> : <td>$0</td>}
                </tr>)
            )}
            </tbody>
            </table>
            </div>
    )}
}


function mapStateToProps(state) {
  return {
      orders: state.orders.orders,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllOrders: () => dispatch(getAllOrders()),
    editOrder: (order) => dispatch(editOrder(order)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderTable);
