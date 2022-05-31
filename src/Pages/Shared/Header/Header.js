import React from 'react';
import './Header.css'
import { Container,Button, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
// import useAuth from '../../../Hooks/useAuth';
const logo = "https://i.ibb.co/m6vRhrc/pngwing-com-2-1.png"

const Header = () => {
    const {user , logOut} = useAuth()
   

    return (
        <div className=" mt-5">
        <Navbar collapseOnSelect  fixed="top"   expand="lg" className="bg-light"  variant="dark" >
            <Container>
            <Navbar.Brand href="/home" className="text-warning fw-bold">
                <img
                alt=""
                src={logo}
                width="70"
                height="60"
                className="d-inline-block pb-1 align-top"
                />
                <br />
                <h3>Travel World</h3>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-dark" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="m-auto">
                <Nav.Link className="text-dark nav  fw-bold" as={HashLink} to="/home">Home</Nav.Link>
                <Nav.Link className="text-dark nav fw-bold" as={HashLink} to="/services">Services</Nav.Link>
                <Nav.Link className="text-dark nav fw-bold" as={HashLink} to="/branch">Branches</Nav.Link>

                <Nav.Link className="text-dark nav fw-bold" as={HashLink} to="/about">About Us</Nav.Link>
                </Nav>
                
                {
                    user?.email ?  <div className="d-flex">
                        
                        <Nav.Link className="text-dark nav fw-bold" as={HashLink} to="/mybooking">My Bookings</Nav.Link>
                        <Nav.Link className="text-dark nav fw-bold" as={HashLink} to="/addservices">Add Services</Nav.Link>
                        <Nav.Link className="text-dark nav fw-bold" as={HashLink} to="/allbookings">All Bookings</Nav.Link> 
                        <button className="btn btn-danger me-2" onClick={logOut}>Log Out</button>               
                    </div> : 
                        <div>
                            <Link className="login-button " to="/login">Login</Link>
                            <Link to="/register"><Button className="ms-3 fw-bold rounded-pill" variant="outline-danger">Sign Up</Button></Link>
                        </div>
                    }
                     
                 <Navbar.Text>
                 </Navbar.Text>
            </Navbar.Collapse>
          
            </Container>
          
            </Navbar>
            
        </div>
    );
};

export default Header;