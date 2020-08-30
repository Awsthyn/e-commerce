import React, { useState } from 'react';
import S from "../css/rating.module.css"
import "@fortawesome/fontawesome-free/css/all.min.css";
import {FaThumbsUp} from "react-icons/fa"
import { connect } from 'react-redux'
import { MDBIcon } from 'mdbreact';



const RatingThumbs = () => {
	const[rating, setRating] = useState(null);
	const[hover, setHover] = useState(null);

	return (
		<div>
			{[...Array(5)].map((star, i) => {
				const ratingValue = i + 1;

				return (
					<label>
						<input type="radio" name="rating" value={ratingValue} onClick={()=> setRating(ratingValue)}/>
						<FaThumbsUp className={S.thumb} color={ratingValue<=(hover || rating) ? "#ffc107":"#e4e5e9"} size={30} onMouseEnter={()=> setHover(ratingValue)} onMouseLeave ={()=>setHover(null)}/>
					</label>
				)
			})}
		</div>
	)
}





// const RatingStatic = ({reviews}) => {
// 	const[rating, setRating] = useState(null);
	
// 	let average = !reviews ? 0 : reviews.map(e => e.rate).reduce((a,b)=>a + b)/reviews.length
	
// 			let stars = []
// 			for(let i = 0; i < Math.floor(average); i++){
// 					stars.push(['thumbs-up', "text-warning"])
// 			}
// 			for(let j = stars.length; j < 5; j++){
// 					stars.push(["thumbs-up", "text-dark"])
// 			}

// 	return (
// 		<div>
// 			{[...Array(5)].map((star, i) => {
// 				for(let i = 0; i < Math.floor(average); i++){

// 				}
// 				const ratingValue = i + 1;

// 				return (
// 					<label>
// 						<input type="radio" name="rating" value={ratingValue} onClick={()=> setRating(ratingValue)}/>
// 						<FaThumbsUp className={S.thumb} color={ratingValue<=rating ? "#ffc107":"#e4e5e9"} size={30}/>
// 					</label>
// 				)
// 			})}
// 		</div>
// 	)
// }
export default RatingThumbs; 









