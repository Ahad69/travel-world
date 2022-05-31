import React, { useEffect, useState } from 'react';
import { Table , Button } from 'react-bootstrap';
import SyncLoader from "react-spinners/SyncLoader";
import Swal from 'sweetalert2';

import './MyBooking.css'

const MyBooking = () => {
    const [booking, setBooking] = useState([]);

  const [control, setConrol] = useState(false);
  const [loading , setLoading] = useState(false)
  useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
          setLoading(false)
      },1000)
  },[])

  useEffect(() => {
    fetch("https://chilling-phantom-97094.herokuapp.com/addbooking")
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [control]);

  // https://assingment11.herokuapp.com
  const handleDelete = (_id) => {
    fetch(`https://chilling-phantom-97094.herokuapp.com/deletebooking/${_id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
        
      })
    Swal.fire({
        
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
    .then((result) => {
            if (result.isConfirmed) {
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success');
            const remainingUsers = booking.filter(user => user._id !== _id);
            setBooking(remainingUsers)
        } else {
          setConrol(false);
        }
      });
    }


    return (

        <div className="bookings">

{
                loading? 
                <SyncLoader
                className="mb-5"
                size={20}
                color={"#123abc"}
                loading={loading}
                />
                :
                <div className="table-responsive">
                    <h1>My Bookings {booking?.length}</h1>
                      <Table responsive>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Booking Title</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Image</th>
                          </tr>
                        </thead>
                        {booking?.map((booking, index) => (
                          <tbody key={booking.id}>
                            <tr>
                              <td>{index+1}</td>
                              <td>{booking.title}</td>
                              <td>{booking.example}</td>
                              <td>{booking.email}</td>
                              <td><img className="w-25 rounded-circle" src={booking.img} alt="" /></td>
                              <Button
                              
                                onClick={() => handleDelete(booking._id)}
                                className="btn bg-info p-2"
                              >
                                Delete
                              </Button>
                            </tr>
                          </tbody>
                        ))}
                      </Table>
                </div>
                
                }
      
      </div>
    );
};

export default MyBooking;