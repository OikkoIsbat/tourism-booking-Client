import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';
import '../Details.css';
const Details = () => {

    const personRef = useRef();
    const addressRef = useRef();
    const serviceRef = useRef();
    const priceRef = useRef();
    const email = sessionStorage.getItem("email");
    const handleAddBooking = e => {
        const serviceName = serviceRef.current.value;
        const person = personRef.current.value;
        const address = addressRef.current.value;

        const price = priceRef.current.value;

        const newBooking = { serviceName, person, address, price, detailsId }
        newBooking.email = email;
        newBooking.status = "pending";
        console.log(newBooking);

        fetch('https://frozen-lowlands-23758.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Booked Successfully')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }


    const { detailsId } = useParams();

    const [service, setService] = useState({});

    useEffect(
        () => {
            fetch(`https://frozen-lowlands-23758.herokuapp.com/services/${detailsId}`)
                .then(res => res.json())
                .then(data => setService(data));

        }, [])
    return (
        <div>
            <h2 className="text-center">Ship:  {service.name}</h2>
            <img src={service.img} className="servicePic" />
            <h2>Description: {service.description}</h2>
            <hr />
            <br />
            <h4 className="text-danger text-center">Fill Up this form to book your journey:</h4>

            <h5 className="text-center text-primary">Please enter how many persons will go and Your address.</h5>
            <br />
            <form className="text-center" onSubmit={handleAddBooking}>
                <input type="text" ref={serviceRef} placeholder="Service Name" defaultValue={service?.name} />
                <br />
                <input type="text" ref={personRef} placeholder="No Of Persons" />
                <br />
                <input type="text" ref={addressRef} placeholder="Address" />
                <br />
                <input type="text" ref={priceRef} placeholder="Price" defaultValue={service?.price} />
                <br />

                <input type="submit" value="Order" />

                <br />
                <br />


            </form>
        </div>
    );
};

export default Details;