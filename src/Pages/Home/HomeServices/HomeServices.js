import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap'
import './HomeServices.css'
import Rating from 'react-rating';

const HomeSercvices = () => {
    const [services , setServices] = useState([])
    useEffect(()=>{
        fetch('https://chilling-phantom-97094.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="container pt-5 mt-5">
            <h1 className="fw-bold">Our Services :</h1>
            <div className="homeServices mt-5">
            {
                services.map(service=>
                    <div className="container" key={service.id}> 
                        <div className="homeService mt-5">
                            <img height="150px" className="m-3 rounded" src={service.img} alt="" />
                            <br />
                            <h1 className="mt-5 text-danger">{service.title}</h1>
                            <p>Rating : <Rating
                                initialRating={service.rating}
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                readonly
                                ></Rating></p>
                            <p>{service.description.slice(0,100)}</p>
                            <br />
                            <Link to={`/services/${service.id}`}><Button className="ms-3  fw-bold px-5 py-3 rounded-pill" variant="outline-danger">Book Now</Button></Link>
                        </div>
                     
                     </div> 
                )}
            </div>

        </div>
    );
};

export default HomeSercvices;