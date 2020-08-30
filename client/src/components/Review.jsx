import React,{Rating} from 'react'
import { connect } from 'react-redux';
import { addReview, toProductDetails } from "../Redux/actions/productActions";
import swal from 'sweetalert';
import RatingThumbs from "./Rating";


//S58
export class Review extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rating: "",
            description: ""
        }


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    complete() {
        swal({
            title: "Enviado",
            text: "El comentario ha sido enviado con exito",
            icon: "success",
            timer: "4000",
        })
        // setTimeout(() => window.location = "/Profile", 4000)
    }

    handleChange(e) {
        this.setState({ [this.state.name]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addReview(this.props.productDetails.id)
            .then(res => {
                this.setState()
								this.rating()
                console.info(res)
                this.complete()
            }).catch(err => console.error(err))
    }

    componentDidMount() {
        toProductDetails(this.props.productDetails.id)
    }

    render() {
        // console.log(this.props)
        console.log(this.props.productDetails.id)
        return (
            <div>
                {!!this.props.productDetails.id ? (<div>
                    <form onSubmit={this.handleSubmit} className="form-group">
												<RatingThumbs/>												
                        <label>Escriba su comentario. </label>
                        <input type="textarea" id="state" name="description" onChange={this.handleChange} className="form-control" value={this.state.state} required />
                        <div>
                            <button type="submit" className="btn btn-warning">Enviar</button>
                        </div>
                    </form>
                </div>) : false}
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        sessionUser: state.session.sessionUser,
        productDetails: state.products.productDetails
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addReview: id => dispatch(addReview(id)),
        toProductDetails: prodId => dispatch(toProductDetails(prodId)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Review);
