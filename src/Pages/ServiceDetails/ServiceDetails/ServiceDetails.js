import React, { useContext } from 'react';
import './ServiceDetails.css';
import { Col, Container, Row } from 'react-bootstrap';
import pic from '../../../assets/images/aus-big.png';
import { ImStarFull, ImStarHalf, ImStarEmpty } from 'react-icons/im';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const serviceDetails = useLoaderData();
    const { img, title, para1, para2, para3, para4, para5, para6, advantages, requirements } = serviceDetails;

    // // setting the ratings
    // let stars;
    // if (rating === 5) {
    //     stars = <p className='text-warning m-0 d-flex gap-1'>
    //         <ImStarFull />
    //         <ImStarFull />
    //         <ImStarFull />
    //         <ImStarFull />
    //         <ImStarFull />
    //     </p>
    // }
    // else if (rating === 4.5) {
    //     stars = <p className='text-warning m-0 d-flex gap-1'>
    //         <ImStarFull />
    //         <ImStarFull />
    //         <ImStarFull />
    //         <ImStarFull />
    //         <ImStarHalf />
    //     </p>
    // }
    // else {
    //     stars = <p className='text-warning m-0 d-flex gap-1'>
    //         <ImStarFull />
    //         <ImStarFull />
    //         <ImStarFull />
    //         <ImStarFull />
    //         <ImStarEmpty />
    //     </p>
    // }

    return (
        <div className="details-page mb-5">
            <img className='img-fluid' src={img} alt="country-img" />
            <Container className='mt-4'>
                <h2>{title}</h2>
                <Row className='flex-column-reverse flex-lg-row mt-lg-3'>
                    <Col lg={8}>
                        <p>{para1}</p>
                        <p>{para2}</p>
                        <p>{para3}</p>
                        <p>{para4}</p>
                        <p>{para5}</p>
                        <p>{para6}</p>
                        {
                            advantages &&
                            <>
                                <p className='m-0'><span className='fw-semibold'>
                                    Advantages:</span></p>
                                <ul>
                                    {
                                        advantages.map((adv, idx) => <li
                                            key={idx}
                                        >{adv}</li>)
                                    }
                                </ul>
                            </>
                        }
                        {
                            requirements &&
                            <p><span className='fw-semibold'>Requirements: </span>{requirements}</p>
                        }
                    </Col>
                    {/* <Col lg={4} className="">
                        <div className="service-info bg-light">
                            <p>Service Charge</p>
                            <p>Rating</p>
                            <p>Free Assessments:</p>
                            <p>Call us anytime</p>
                        </div>
                    </Col> */}
                </Row>
                <div className="review-section mt-3">
                    {
                        user?.uid ?
                            <>
                                <h3>Add a review</h3>
                                <textarea className='p-3' name='review' cols="120" rows="5" placeholder="Type here..."></textarea>
                                <button className='btn btn-primary d-block'>Add review</button>
                            </>
                            :
                            <h5>Please <Link to="/login">Login</Link> to add a review</h5>
                    }
                </div>
            </Container>
        </div>
    );
};

export default ServiceDetails;