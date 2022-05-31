import React from 'react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Details.css'
import Swal from 'sweetalert2';




const Details = () => {

    const {id} = useParams()
    const [services, setService] = useState([])
    const {user} = useAuth()
    const { register, handleSubmit , reset ,formState: { errors } } = useForm();
    
    useEffect(()=>{
        fetch('https://chilling-phantom-97094.herokuapp.com/services')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setService(data)
        });
    },[user])

    const service = services?.find(fd => fd.id == id )

    const onSubmit = (data) => {
        data.title = service.title
        Swal.fire(
            'SuccessFully Added',
            'Your file has been added.',
            'success');
            
        fetch("https://chilling-phantom-97094.herokuapp.com/addbooking", {
          method: "POST",
          headers: { 
              "content-type": "application/json"
             },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) =>{
              if(result._id){
                Swal.fire(
                'Added!',
                'Your file has been Added.',
                'success');
              }
              
          })
          reset();
    };

    
    return (
        <div className="single">
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                <img src={service?.img} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                <h1 className="text-danger">{service?.title}</h1>
                <h5>{service?.description} </h5>
                <br />
                <br />
                <br />
          
                </div>
                </div>
            </div>
            <h1><span className="span text-danger fw-bold"> $ {service?.price}</span></h1>
        </div>
        <br />
        <br />
        <hr />
        <br />
        
            <div className="confirm-form">
            <form onSubmit={handleSubmit(onSubmit)}>
            <input className="input m-3 p-2 w-25 text-center border-0 rounded-pill"  {...register("img",)} defaultValue={user?.photoURL}  /> 
            <br />      
            <input className="input m-3 p-2 w-25 text-center  border-0 rounded-pill"  defaultValue={user?.displayName} {...register("example")} /> 
            <br />
            <input className="input m-3 p-2 w-25 text-center  border-0 rounded-pill" defaultValue={user?.email} {...register("email", { required: true })} />
            {errors.email && <span style={{color:"red"}}>This field is required</span>}
            <br />
            
            <input className="input m-3 p-2 w-25 text-center  border-0 rounded-pill" placeholder="Hosen Pur , Lal Mosjid , Sirajgonj " {...register("address", { required: true })} /> 
            <br />
            <input className="input m-3 p-2 w-25  text-center border-0 rounded-pill" placeholder="01******" {...register("Number", { required: true })} /> 
            <br />
            <button className="px-5 py-2 mb-5 rounded-pill btn btn-danger  border-0" type="submit">Confirm</button>
            
            </form>
            </div>
        
    </div>
    );
};


export default Details;