import React from 'react';
import founder from '../../images/Founders/founder.jpg';
import cofounder from '../../images/Founders/coFounder.jpg';
import './Experts.css';

const Experts = () => {
    return (
        <div>
            <h1 className="text-center mb-3">Our Founder and Co Founder</h1>
            <div class="row mb-5">
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <img src={founder} className="psy-img" alt="" srcset="" />
                            <h5 class="card-title">Kodol Lal </h5>
                            <p>(2017-)</p>
                            <p class="card-text">
                                kodom Lal born in Rajshahi on 1996. He founded this travel agency in 2017 with his partner kodomi kapoor. He graduated in 2021 in computer science and engineering from BRAC University.
                            </p>

                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card d-flex justify-content-center">
                        <div class="card-body ">
                            <img src={cofounder} className="psy-img" alt="" srcset="" />
                            <h5 class="card-title">Kodomi Kapoor </h5>
                            <p> (2017-)</p>
                            <p class="card-text">Kodomi born in Rajshahi in 1996 co founded this in 2017. She graduated in 2021 in computer science and engineering from BRAC University. She has always been facsinated about travel.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experts;