import React from 'react';
import Rating from 'react-rating';

const Branch = ({branch}) => {
    const{Name ,  img , Number , rating , city , address} = branch
    return (
        <div>
             <div>
        <div className="card mb-3 p-3 service">
             <div className="row g-0">
                <div className="col-md-4 mt-3">
                
                <img  className="rounded-circle img-fluid" src={img} alt="" />
                </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title fs-1">{Name}</h5>
                    <p><i class="fas fa-phone-alt fs-5 m-2"></i> {Number}</p>
                    <p>Rating : <Rating
                    initialRating={rating}
                    emptySymbol="fas fa-star icon-color"
                    fullSymbol="far fa-star icon-color"
                    readonly
                    ></Rating></p>
                    <br />
                    <br />
                    <br />
                    <p className="card-text">{address}</p>

                    <h1 className="text-danger fw-bold">$ {city}</h1>
                    
                </div>
            </div>
         </div>
    </div>
    </div>
        </div>
    );
};

export default Branch;