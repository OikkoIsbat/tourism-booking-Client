import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const ManageAllOrders = () => {
    const [orders, setOrder] = useState([]);
    const { user, logOut } = useAuth();

    useEffect(() => {
        fetch('https://frozen-lowlands-23758.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setOrder(data));
    }, []);

    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are You Sure You Want to cancel this order?');
        if (proceed) {
            const url = `https://frozen-lowlands-23758.herokuapp.com/booking/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = orders.filter(order => order._id !== id)
                        setOrder(remaining);
                    }
                })
        }
    }



    return (
        <div>
            <h2>Manage All Orders</h2>

            <h1>All The User Emails and their orders:</h1>
            <ul>
                {
                    orders.map(order => <li
                        key={order._id}
                    >{order.email} : {order.serviceName} - {order.price}$
                        <p>Address: {order.address}</p>
                        <h5>Status : {order.status}</h5>
                        <button onClick={() => handleDeleteOrder(order._id)}>Cancel</button>
                        <hr />
                    </li>)

                }
            </ul>
        </div>
    );
};

export default ManageAllOrders;