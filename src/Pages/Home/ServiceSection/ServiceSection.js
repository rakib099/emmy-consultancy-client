import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';

const ServiceSection = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
        .catch(err => console.error(err));
    }, []);

    return (
        <div className='sec-service mt-4'>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    services.map((service, idx) => <ServiceCard 
                        key={idx}
                        service={service}
                    />)
                }
            </Row>
        </div>
    );
};

export default ServiceSection;