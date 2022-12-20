import React from 'react';
import { Container } from 'react-bootstrap';
import useTitle from '../../../hooks/useTitle';

const AddService = () => {
    useTitle("Add Service");

    return (
        <Container className='mt-4 mb-5'>
            <h2 className="page-title">Add a Service</h2>
        </Container>
    );
};

export default AddService;