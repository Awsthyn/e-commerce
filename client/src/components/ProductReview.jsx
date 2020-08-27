import React from 'react'
import IndividualReview from "./IndividualReview"
import { connect } from 'react-redux'
import { MDBIcon } from 'mdbreact';

export const ProductReview = ({reviews}) => {
    let averageRating = !reviews ? 0 : reviews.map(e => e.rating).reduce((a,b)=>a + b)/reviews.length
    let stars = []
    for(let i = 0; i < Math.floor(averageRating); i++){
        stars.push(['star', "text-warning"])
    }
    for(let j = stars.length; j < 5; j++){
        stars.push(["star", "text-dark"])
    }
    return (
        <div className= {!reviews ? null : "border border-secondary m-auto m-0 shadow p-3 mb-5 bg-white rounded mt-4"} style={{width: "900px"}}>
            <h3>Opiniones sobre el producto</h3>
            <div className="d-flex flex-row">
            <h1 className="d-inline mr-3">{averageRating.toFixed(1)}</h1>
            <div className="d-flex flex-column">
                <div>
            {stars.map(e =>  <span><MDBIcon icon={e[0]} className={e[1]} /></span>)}
            </div>
            <p>Promedio entre {!reviews ? 0 : reviews.length} opiniones</p>
            </div>
            </div>
            {!reviews ? null : reviews.map(e => <IndividualReview review={e} />)}
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductReview)
