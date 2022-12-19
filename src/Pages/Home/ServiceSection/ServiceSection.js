import React, { useEffect, useState } from 'react';
import './ServiceSection.css';
import { Row } from 'react-bootstrap';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const ServiceSection = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services?page=home')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className='sec-services mt-4'>
            <h2 className='mb-3 title text-center'>Our Services</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    />)
                }
            </Row>
            <div className="btn-see-all-container mt-3">
                <Link to="/services">
                    <button className="btn-see-all mx-auto d-flex align-items-center">
                        <span className='me-2'>See All</span>
                        <BsArrowRight />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceSection;