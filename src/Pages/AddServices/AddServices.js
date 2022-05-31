import React from 'react';
import './AddServices.css'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';


const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();
   

    const onSubmit = (data) => {
        Swal.fire(
            'added!',
            'Your file has been added.',
            'success');
        fetch('https://chilling-phantom-97094.herokuapp.com/services', {
          method: "POST",
          headers: { 
              "content-type": "application/json"
             },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then(data =>{
            if(data.insertedId){
                alert("Successfully user added")
                
            }
        }) 
          reset();
    };
    
    return (
    <div className="addservices">
        <h1 className="fw-bold">Add Your Services</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
    <input className="input m-3 p-2 mt-5 w-25 text-center  border-0 rounded-pill" placeholder="Add Description" type="text" name="" id="" {...register("description", { required: true })} />
    <br />
      <input className="input m-3 p-2 mt-5 w-25 text-center  border-0 rounded-pill" placeholder="Name" {...register("title" , { required: true }) } />
      <br />
      <input className="input m-3 p-2 mt-5 w-25 text-center  border-0 rounded-pill" type="number" name="" id="" placeholder="Mube be than 10 " {...register("id", { required: true })} />
     <br />
      <input className="input m-3 p-2 mt-5 w-25 text-center  border-0 rounded-pill" placeholder="Give Img Link" type="text" name="" id="" {...register("img", { required: true })} />
      <br />
      <input className="input m-3 p-2 mt-5 w-25 text-center  border-0 rounded-pill" type="number" placeholder="Give Rating" name="" id="" {...register("rating", { required: true })} />
      <br />
      <input className="input m-3 p-2 mt-5 w-25 text-center  border-0 rounded-pill" placeholder="Country" {...register("country", { required: true })} />
      <br />
      <input className="input m-3 p-2 mt-5 w-25 text-center  border-0 rounded-pill" type="number" placeholder="price" name="" id="" {...register("price", { required: true })} />
      <br />

      <input className="px-5 py-2 mt-3 mb-5 rounded-pill btn btn-danger  border-0" type="submit" />
    </form>
    </div>
  );

       
    
};

export default AddServices;