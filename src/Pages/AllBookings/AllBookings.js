import React, { useEffect, useState } from 'react';
import { Table , Button } from 'react-bootstrap';
import ClipLoader from "react-spinners/ClipLoader";
import Swal from 'sweetalert2';


const AllBookings = () => {
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

const handleDelete = (id) => {
  fetch(`https://chilling-phantom-97094.herokuapp.com/deletebooking/${id}`, {
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
          const remainingUsers = booking.filter(user => user._id !== id);
          setBooking(remainingUsers)
      } else {
        setConrol(false);
      }
    });
  }
    return (
        <div className="bookings ">

          {
                loading? 
                <ClipLoader
                className="m-5"
                size={60}
                color={"#123abc"}
                loading={loading}
                />
                : 
              <div>
                <h1>Manage Bookings {booking?.length}</h1>
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
                    <tbody>
                      <tr>
                        <td>{index+1}</td>
                        <td>{booking.title}</td>
                        <td>{booking.example}</td>
                        <td>{booking.email}</td>
                        <td><img className="w-25 rounded-circle" src={booking.img} alt="" /></td>
                        <Button
                        key={booking.id}
                          onClick={() => handleDelete(booking._id)}
                          className="btn bg-danger p-2"
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

export default AllBookings;