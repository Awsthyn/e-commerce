import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getAllProducts } from '../../../Redux/actions/productActions'


export class MyReviews extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getAllProducts(this.props.sessionUser.id)
    }

    render() {
        const { products, sessionUser } = this.props;
        return (
            <div>
                <div>
                    <span>
                        {products[0] !== "undefined" ? (
                            <div>
                                {products.map((e) => (
                                    <div>
                                        {e.reviews.map((g) => {
                                            if (g.userId === sessionUser.id) {
                                                return (
                                                    <div>
                                                        <h6>
                                                            {g.description}
                                                        </h6>
                                                        <h4>Rating: {g.rating}</h4>
                                                        <hr />
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
                                ))}
                            </div>
                        ) : console.log("Tu hermana")}
                    </span>
                    <div>
                        <Link to="/Profile">
                            <button type="button" className="btn btn-warning" >Volver</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        sessionUser: state.session.sessionUser,
        products: state.products.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllProducts: id => dispatch(getAllProducts(id)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyReviews);