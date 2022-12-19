import React from 'react';
import './Services.css'
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';

const Services = () => {
    const services = useLoaderData();

    return (
        <Container>
            <div className="services-page mt-3 mb-5">
                <h2 className='title mb-3'>All Services</h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    />)
                }
            </Row>
            </div>
        </Container>
    );
};

export default Services;