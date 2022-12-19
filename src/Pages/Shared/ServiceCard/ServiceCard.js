import React from 'react';
import './ServiceCard.css';
import { Card, Col } from 'react-bootstrap';
import { ImStarFull, ImStarHalf, ImStarEmpty } from 'react-icons/im';

const ServiceCard = ({ service }) => {
    const { title, img, charge, description, rating } = service;

    let stars;
    if (rating === 5) {
        stars = <p className='text-warning m-0 d-flex gap-1'>
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
        </p>
    }
    else if (rating === 4.5) {
        stars = <p className='text-warning m-0 d-flex gap-1'>
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarHalf />
        </p>
    }
    else {
        stars = <p className='text-warning m-0 d-flex gap-1'>
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarEmpty />
        </p>
    }

    return (
        <Col>
            <div className="card-container">
                <Card className='shadow'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <hr />
                        <div className='d-flex justify-content-between mb-2'>
                            <div className='d-flex align-items-center text-secondary gap-2'>
                                {stars}
                                <span>{rating}</span>
                            </div>
                            <Card.Text className='fw-semibold'>${charge} / hour</Card.Text>
                        </div>
                        <Card.Text>
                            {
                                description.length > 100 ?
                                    description.slice(0, 100)
                                        .concat("...")
                                    :
                                    description
                            }
                        </Card.Text>
                        <div className='btn-container text-center'>
                            <button className='btn-details'>View Details</button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </Col>
    );
};

export default ServiceCard;