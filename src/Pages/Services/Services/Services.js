import React from 'react';
import './Services.css'
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';
import useTitle from '../../../hooks/useTitle';

const Services = () => {
    const services = useLoaderData();
    useTitle("Services");

    return (
        <Container>
            <div className="services-page mt-4 mb-5">
                <h2 className='page-title mb-3'>All Services</h2>
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