import React from 'react';
import './Banner.css';
import banner from '../../../assets/images/banner.jpg';

const Banner = () => {
    return (
        <div id="travel-carousel" className="carousel slide mt-2" data-bs-ride="false">

            <div className="carousel-inner">
                <div className="carousel-item active position-relative">
                    <div className="img-gradient">
                        <img src={banner} className="banner-img d-block w-100  rounded-3" alt="banner-img" />
                    </div>
                    <div className="carousel-caption d-md-block caption-container">
                        <h2 className='fw-bold'>CHOOSE YOUR DESTINATION!</h2>
                        <p>We provide clear advice for your Migration to numerous countries in the World!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;