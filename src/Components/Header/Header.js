import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import Activities from '../Activities/Activities';
import Banner from '../Banner/Banner';
import Details from '../Details/Details/Details';
import Login from '../Login/Login';
import PrivateRoute from '../Login/PrivateRoute/PrivateRoute';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Experts from '../Experts/Experts';
import './Header.css';
import About from '../About/About';
import AddService from '../AddService/AddService';
import ManageServices from '../ManageServices/ManageServices';
import MyOrders from '../MyOrders/MyOrders';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';

import logo from '../../images/logo.png';
import webname from '../../images/webname.png';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <div className="d-flex justify-content-center topPart">
                <img src={logo} className="logo w-25" alt="" />

                <img src={webname} className="logo h-75 w-50" alt="" />



            </div>

            <Router>
                <nav className="navs d-flex justify-content-center">
                    <Link to="/Home">Home</Link>
                    {user.email && <span >Hello {user.displayName} </span>}
                    {
                        user.email ?
                            <button onClick={logOut}>Logout</button>

                            :
                            <Link to="/login">Login</Link>
                    }

                    {user.email && <Link to="/MyOrders">My Orders</Link>}

                    {user.email && <Link to="/AddService">Add Service</Link>}


                    {user.email && <Link to="/ManageAllOrders">Manage All Orders</Link>}




                    <Link to="/Experts">Founders</Link>

                    <Link to="/About">About</Link>


                </nav>
                <Switch>


                    <Route path="/Login">
                        <Login></Login>

                    </Route>
                    <Route path="/Home">
                        <Banner></Banner>
                        <Activities></Activities>
                    </Route>
                    <Route path="/register">
                        <Register></Register>


                    </Route>

                    <Route exact path="/">
                        <Banner></Banner>
                        <Activities></Activities>
                    </Route>
                    <PrivateRoute path="/Details/:detailsId">
                        <Details></Details>
                    </PrivateRoute>

                    <PrivateRoute path="/MyOrders">
                        <MyOrders></MyOrders>

                    </PrivateRoute>

                    <PrivateRoute path="/AddService">
                        <AddService></AddService>

                    </PrivateRoute>

                    <PrivateRoute path="/ManageAllOrders">
                        <ManageAllOrders></ManageAllOrders>

                    </PrivateRoute>


                    <Route path="/addService">
                        <AddService></AddService>

                    </Route>
                    <Route path="/Experts">
                        <Experts></Experts>
                    </Route>
                    <Route path="/About">
                        <About></About>
                    </Route>
                    <Route path="/manageServices">
                        <ManageServices></ManageServices>

                    </Route>
                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </Router>



        </div>
    );
};

export default Header;