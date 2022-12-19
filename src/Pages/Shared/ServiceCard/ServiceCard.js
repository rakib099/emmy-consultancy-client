import React from 'react';
import './ServiceCard.css';
import { Card, Col } from 'react-bootstrap';

const ServiceCard = ({ service }) => {
    const { title, img, price, description } = service;

    return (
        <Col>
            <Card className='shadow'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <hr />
                    <div className='d-flex justify-content-between mb-2'>
                        <div className='d-flex align-items-center text-secondary gap-1'>
                            {/* <FaRegClock /> */}
                            <span>{price} / hour</span>
                        </div>
                        <Card.Text className='fw-semibold'>${price}</Card.Text>
                    </div>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </Card.Text>
                    <div className='btn-container text-center'>
                        <button className='btn-details'>View Details</button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ServiceCard;