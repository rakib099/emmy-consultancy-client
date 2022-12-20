import React from 'react';
import { Container } from 'react-bootstrap';
import useTitle from '../../../hooks/useTitle';
import Assessment from '../Assessment/Assessment';
import Banner from '../Banner/Banner';
import ServiceSection from '../ServiceSection/ServiceSection';
import ServiceStat from '../ServiceStat/ServiceStat';

const Home = () => {
    useTitle("Home");

    return (
        <Container className='mb-5'>
            <Banner />
            <ServiceSection />
            <ServiceStat />
            <Assessment />
        </Container>
    );
};

export default Home;