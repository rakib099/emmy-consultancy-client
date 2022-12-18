import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import ServiceStat from '../ServiceStat/ServiceStat';

const Home = () => {
    return (
        <Container className='mb-5'>
            <Banner />
            <ServiceStat />
        </Container>
    );
};

export default Home;