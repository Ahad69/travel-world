import React, { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import Branch from '../Branch/Branch';

const Branches = () => {
    const [brances , setBrances] = useState([])
    const [loading , setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])
    useEffect(()=>{
        fetch('https://chilling-phantom-97094.herokuapp.com/branch')
        .then(res => res.json())
        .then(data => setBrances(data))
    },[])
    return (
        <div className="container servi  pb-5" >
            {
                loading? 
                <ClipLoader


                
                size={60}
                color={"#123abc"}
                loading={loading}
                />
                :
                <div>
                     <h1 className="title fw-bold"> Our Branches : </h1>
                        <div className="services">
                    
                    {
                        brances.map(branch => <Branch
                            key={branch.id}
                            branch={branch}
                            ></Branch>)
                    }
                    </div>
                </div>
            }
      
    </div>
    );
};

export default Branches;