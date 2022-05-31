import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import SyncLoader from "react-spinners/SyncLoader";
import './Services.css'

const Services = () => {
    const [services , setServices] = useState([])
    const [loading , setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])



    useEffect(()=>{
        fetch('https://chilling-phantom-97094.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="container servi  pb-5" >
            {
                loading? 
                <SyncLoader
                className="mb-5"
                size={20}
                color={"#123abc"}
                loading={loading}
                />
                :
                <div>
                    <h1 className="title  fw-bold"> Our Services : </h1>
                      <div className="services">
                
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                        ></Service>)
                }
                </div>
                </div>
            }
        
      
    </div>
    );
};

export default Services;