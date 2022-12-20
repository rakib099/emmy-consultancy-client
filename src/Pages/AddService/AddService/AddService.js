import React from 'react';
import './AddService.css';
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap';
import useTitle from '../../../hooks/useTitle';
import { toast } from 'react-hot-toast';

const AddService = () => {
    useTitle("Add Service");

    const handleAddService = (e) => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const img = form.photoURL.value;
        const rating = form.rating.value;
        const charge = form.charge.value;
        const description = form.description.value;
        form.reset();

        const service = {
            title,
            img,
            rating,
            charge,
            description
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("Service added successfully");
                }
            })
            .catch(err => console.error(err));
    }

    return (
        <Container className='mt-4 mb-5'>
            <h2 className="page-title mt-4">Add a Service</h2>
            <div className="form-container mx-auto">
                <Form onSubmit={handleAddService}>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name='title' placeholder="Title of the service" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='photoURL' placeholder="Photo URL of the service (Size: 260x204)" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicRating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control type="text" name='rating' placeholder="Rating of the service" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCharge">
                        <Form.Label>Charge</Form.Label>
                        <Form.Control type="text" name='charge' placeholder="Service Charge" />
                    </Form.Group>
                    <FloatingLabel className='mb-3 text-muted' controlId="floatingTextarea2" label="Description">
                        <Form.Control
                            as="textarea"
                            placeholder="Type here..."
                            name="description"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default AddService;