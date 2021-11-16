import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Details from '../Details/Details/Details';

const Activities = () => {
    const [act, setActivities] = useState([]);

    useEffect(() => {
        fetch('https://frozen-lowlands-23758.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setActivities(data));
    }, [])
    return (
        <div className="course-container mt-4">
            <h2 className="text-primary text-center mb-4">Our Services</h2>

            <div className="row row-cols-1 row-cols-md-3 g-3">

                {
                    act.map(activity => <Card activity={activity}></Card>)

                }




            </div>

        </div>
    );
};

export default Activities;