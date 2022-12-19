import React, { useContext } from 'react';
import './ServiceDetails.css';
import { Col, Container, Row } from 'react-bootstrap';
import pic from '../../../assets/images/aus-big.png';
import { ImStarFull, ImStarHalf, ImStarEmpty } from 'react-icons/im';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
    const {user} = useContext(AuthContext);

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
            <img className='img-fluid' src={pic} alt="" />
            <Container className='mt-4'>
                <h2>Immigrate to USA right now!</h2>
                <Row className='flex-column-reverse flex-lg-row'>
                    <Col lg={8}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita excepturi ex sequi recusandae blanditiis labore odit. Totam, et neque beatae aliquam quia vero voluptatem soluta error cum quaerat aspernatur voluptatibus tenetur illum corrupti dolore dolor sequi ipsam nam. Repudiandae odit blanditiis itaque quos suscipit at rerum non, fuga accusantium doloribus debitis provident magnam numquam eveniet corrupti quisquam ipsum, asperiores et? Quidem perferendis minus deserunt quos itaque alias. Error perspiciatis quam nostrum molestias, voluptate modi beatae vitae possimus dicta, est eveniet!</p>
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