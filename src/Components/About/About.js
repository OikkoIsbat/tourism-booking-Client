import React from 'react';
import sea from '../../images/sea.jpg';
import './About.css';

const About = () => {
    return (
        <div>
            <div class="card-body mb-5">

                <h5 class="card-title text-center">SeaExplore</h5>
                <h6 class="card-subtitle mb-5 text-muted text-center mb-3">Travel is Life</h6>
                <img src={sea} className="w-50 aboutimg" alt="" srcset="" />
                <p class="card-text">Founded By Kodom Lal and his partner Kodomi kapoor in 2017. Since then this has provided quality services. We have received many positive reviews from people. There were also some negative reviews in which we are still working on. We are hopeful that our service will one day become international.</p>

            </div>
        </div>
    );
};

export default About;