import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
const Card = (props) => {



    const { _id, name, description, img, price } = props.activity;
    return (
        <div className="col">

            <div className="service text-center border-warning">
                <img src={img} className="card-img-top w-100 img"
                    alt="" />
                <div className="card-body">

                    <h5 className="card-title text-danger">{name}</h5>

                    <p className="card-text">{description}</p>

                    <p className="card-text">Price: {price}$</p>

                    <Link to={`/Details/${_id}`}>

                        <button className="btn-primary">Book Now</button>
                    </Link>

                </div>
            </div>

        </div>
    );
};

export default Card;