
import React, { useEffect, useState } from 'react';
import './Advantage.css'


const Advantages = () => {
    const [advantages , setAdvantages] = useState([])
useEffect(()=>{
    fetch('https://chilling-phantom-97094.herokuapp.com/advantages')
    .then(res =>res.json())
    .then(data => setAdvantages(data))
},[])

    return (
        <div className="container pt-5 mt-5">
        <h1 className="fw-bold">We Provided you :</h1>
        <div className="advantages mt-5">
        {
            advantages.map(service=>
                
                <div key={service.icon} className="container bg-gray-300"> 
                    <div className="advantage mt-5" key={service.title}>
                        <img height="150px" src={service.icon} alt="" />
                        <br />
                        <h1   className="mt-5 text-danger">{service.title}</h1>
                       
                        <p>{service.description.slice(0,100)}</p>
                        <br />
                      
                    </div>
                 
                 </div> 
            )}
        </div>

    </div>
    );
};

export default Advantages;