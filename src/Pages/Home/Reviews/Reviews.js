import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import './Review.css'

const Reviews = () => {
    const [reviews , setReviews] = useState([])
    useEffect(()=>{
        fetch('https://chilling-phantom-97094.herokuapp.com/review')
        .then(res =>res.json())
        .then(data => setReviews(data))
    },[])

    return (
        <div className="container pt-5 mt-5">
        <h1 className="fw-bold">Reviews :</h1>
        <div className="reviews mt-5">
        {
            reviews.map(review=>
                
                <div key={review.Name} className="container bg-gray-300"> 
                    <div className="review mt-5">
                        <img className="rounded-circle" height="150px" src={review.img} alt=""  />
                        <br />
                       <br />
                        <p>Rating : <Rating
                        initialRating={review.rating}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly
                        ></Rating></p>
                        <p>{review.description.slice(0,100)}</p>
                       <h1   className="mt-5 text-danger">{review.Name}</h1>
                       <h5>{review.job}</h5>
                    </div>
                 
                 </div> 
            )}
        </div>

    </div>
    );
};

export default Reviews;

