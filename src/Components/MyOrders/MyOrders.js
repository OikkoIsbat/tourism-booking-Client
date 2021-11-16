import React, { useEffect, useState } from 'react';

const MyOrders = () => {
    const email = sessionStorage.getItem("email");
    const [orders, setOrder] = useState([]);
    useEffect(() => {
        fetch(`https://frozen-lowlands-23758.herokuapp.com/booking/${email}`)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, []);

    //DELETE AN ORDER
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
            <h2>My Orders {orders.length}</h2>
            <ul>
                {
                    orders.map(order => <li
                        key={order._id}
                    >{order.serviceName} - {order.price}$
                        <button onClick={() => handleDeleteOrder(order._id)}>Cancel</button>
                    </li>)
                }
            </ul>

        </div>
    );
};

export default MyOrders;