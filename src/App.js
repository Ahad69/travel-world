import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter , Switch , Route} from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Services from './Pages/Services/Services/Services';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import PrivateRoute from './Hooks/PrivateRoute';
import AuthProvider from './Hooks/AuthProvider';
import Details from './Pages/Details/Details';
import MyBooking from './Pages/MyBooking/MyBooking';
import AllBookings from './Pages/AllBookings/AllBookings';
import NotFound from './Pages/NotFound/NotFound';
import Branches from './Pages/Branches/Branches/Branches';
import Footer from './Pages/Shared/Footer/Footer';
import AboutUs from './Pages/AboutUs/AboutUs';
import ClipLoader from "react-spinners/ClipLoader";
import AddServices from './Pages/AddServices/AddServices';
import { useEffect, useState } from 'react';

function App() {

      const [loading , setLoading] = useState(false)
      useEffect(()=>{
          setLoading(true)
          setTimeout(()=>{
              setLoading(false)
          },1000)
      },[])

  return (
    <div className="App">

{
                loading? 
                <ClipLoader
                
                size={60}
                color={"#F32D0F"}
                loading={loading}
                />
                : 
                <AuthProvider>
                        <BrowserRouter>
                        <Header></Header>
                        <Switch>
                          <Route exact path="/">
                          <Home></Home>
                          </Route>
                          <Route exact path="/home">
                          <Home></Home>
                          </Route>
                          <PrivateRoute exact path="/services/:id">
                            <Details></Details>
                          </PrivateRoute>
                          <Route path="/services">
                            <Services></Services>
                          </Route>
                          <Route path="/branch">
                            <Branches></Branches>
                          </Route>
                          <PrivateRoute path="/mybooking">
                            <MyBooking></MyBooking>
                          </PrivateRoute>
                          <PrivateRoute path="/allbookings">
                            <AllBookings></AllBookings>
                          </PrivateRoute>
                          <Route path="/about">
                            <AboutUs></AboutUs>
                          </Route>
                          <PrivateRoute path="/addservices">
                            <AddServices></AddServices>
                          </PrivateRoute>
                        <Route path="/login">
                          <Login></Login>
                        </Route>
                        <Route path="*">
                          <NotFound></NotFound>
                        </Route>
                        </Switch>
                        <Footer></Footer>
                        </BrowserRouter>
                        </AuthProvider>
                }
      
    </div>
  );
}

export default App;
