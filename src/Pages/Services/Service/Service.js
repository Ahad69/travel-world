import React from 'react';
import {Button} from 'react-bootstrap'
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
   
    const{title , id,  img ,price , rating , description} = service
    return (
    <div>
            <div className="card mb-3 p-3 service">
             <div className="row g-0">
                <div className="col-md-4 mt-3">
                
                <img  className="rounded-circle img-fluid" src={img} alt="" />
                </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    
                    <p>Rating : <Rating
                    initialRating={rating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly
                    ></Rating></p>
                    <p className="card-text">{description}</p>

                    <h1 className="text-danger fw-bold">$ {price}</h1>
                    
                </div>
            </div>
            <Link to={`/services/${id}`} ><Button className="ms-3 fw-bold mt-2 px-3 py-3 rounded-pill" variant="outline-success">Book Now</Button></Link>
         </div>
    </div>
 
    </div>
    );
};

export default Service;