import React from 'react';
import { Container } from 'react-bootstrap';
import pic from '../../../assets/images/aus-big.png';

const ServiceDetails = () => {
    return (
        <div className="details-page mb-5">
            <img className='img-fluid' src={pic} alt="" />
            <Container>
                <div>
                    <h2>Service Details</h2>

                </div>
            </Container>
        </div>
    );
};

export default ServiceDetails;