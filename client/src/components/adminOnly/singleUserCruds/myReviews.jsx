import React from 'react';
import { connect } from 'react-redux';
import { getReview } from '../../../Redux/actions/productActions'


export class MyReviews extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props.sessionUser)
    }

    componentDidMount() {
        this.props.getReview(this.props.sessionUser.id)
    }

    render() {
        const { rev, user } = this.props
        console.log(this.props)
        console.log(user)
        return (
            <div>
                <div>
                    <span>
                        {console.log(this.props.sessionUser)}
                        {this.props.sessionUser.id === this.props.id ? this.props.review : <></>}
                    </span>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        sessionUser: state.session.sessionUser,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getReview: id => dispatch(getReview(id)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyReviews);