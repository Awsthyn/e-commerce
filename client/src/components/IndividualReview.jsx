import React from 'react'
import { MDBIcon } from 'mdbreact';

const IndividualReview = ({review}) => {
    let stars = []
    for(let i = 0; i < Math.floor(review.rating); i++){
        stars.push(['star', "text-warning"])
    }
    for(let j = stars.length; j < 5; j++){
        stars.push(["star", "text-dark"])
    }


    return (
        <div className="mt-4">
            {stars.map(e =>  <span><MDBIcon icon={e[0]} className={e[1]} /></span>)}
            <div className="mt-2">
                <h5>{review.user.first_name + ' ' + review.user.last_name}</h5>
                <p>{review.description}</p></div>
        </div>
    )
}

export default IndividualReview
