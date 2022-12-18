import React from 'react';
import './ServiceStat.css';

const ServiceStat = () => {
    return (
        <div className='service-stat my-4'>
            <h2 className='text-white text-center'>Hundreds of People Choose Our Services</h2>
            <hr />
            <div className="stats d-flex gap-5 justify-content-center flex-column flex-md-row mt-4">
                <div className="visas align-items-center d-flex flex-column">
                    <h2 className='fw-bold text-warning'>1000+</h2>
                    <span className='text-white me-3'>Visas Granted</span>
                </div>
                <div className="destinations align-items-center d-flex flex-column">
                    <h2 className='fw-bold text-warning'>6</h2>
                    <span className='text-white'>Immigration Destinations</span>
                </div>
                <div className="references align-items-center d-flex flex-column">
                    <h2 className='fw-bold text-warning'>92%</h2>
                    <span className='text-white'>Clients are from references</span>
                </div>
                <div className="cases align-items-center d-flex flex-column">
                    <h2 className='fw-bold text-warning'>100+</h2>
                    <span className='text-white'>Ongoing Cases</span>
                </div>
            </div>
        </div>
    );
};

export default ServiceStat;