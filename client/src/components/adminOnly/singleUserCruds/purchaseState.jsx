import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getOrders } from "../../../Redux/actions/orderActions";


export class PurchaseState extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.getOrders(this.props.sessionUser.id)
    }

    render() {
        return (
            <div>
                {this.props.orders !== "null" ? (
                    <div>
                        <table className="table table-responsive">
                            <thead className="text-center">
                                <tr>
                                    <th>Nombre</th>
                                    <th>Descripción</th>
                                    <th>Categoria</th>
                                    <th>Reviews</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {!!this.props.orders.orderLines ?
                                    this.props.orders.orderLines.map((e) => (
                                        <tr>
                                            <td>{e.product.name}</td>
                                            <td>{e.product.description}</td>
                                            <td>{e.product.categories.map((c) => (<p>{c.name}, </p>))}</td>
                                            <td>{e.product.reviews.map((r) => (
                                                <div>
                                                    <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#order${r.id}`} >Detalles</button>


                                                    <div className="modal fade" id={'order' + r.id} role="dialog">
                                                        <div className="modal-dialog">


                                                            <div className="modal-content">
                                                                <div className="moda</div>l-body">
                                                                    <table>
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Descripción</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <td>
                                                                                <h6>{r.description}</h6>
                                                                            </td>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-warning" data-dismiss="modal">Close</button>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            ))}</td>
                                            <td>{e.product.price}</td>
                                            <td>{e.quantity}</td>
                                            <td>{e.quantity * e.product.price}</td>
                                        </tr>
                                    )) : false}
                            </tbody>
                        </table>
                    </div>
                ) : false}
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
        sessionUser: state.session.sessionUser,
        orders: state.orders.orders
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getOrders: id => dispatch(getOrders(id)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PurchaseState);