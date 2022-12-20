import React, { useContext, useEffect, useState } from 'react';
import './ServiceDetails.css';
import { Col, Container, Row } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import ReviewCard from '../ReviewCard/ReviewCard';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../../hooks/useTitle';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const serviceDetails = useLoaderData();
    const [reviews, setReviews] = useState([]);
    useTitle("Service Details");

    const { _id, img, title, shortTitle, para1, para2, para3, para4, para5, para6, advantages, requirements, rating, charge } = serviceDetails;

    // Loading reviews service id wise
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?serviceId=${_id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setReviews(data);
            })
            .catch(err => console.error(err));
    }, [_id, reviews]);


    const handleAddReview = (e) => {
        e.preventDefault();

        const form = e.target;
        const reviewText = form.review.value;
        form.reset();

        const review = {
            serviceId: _id,
            serviceTitle: shortTitle,
            userEmail: user.email,
            userName: user.displayName,
            userPhoto: user.photoURL,
            serviceImg: img,
            rating: rating,
            charge: charge,
            review: reviewText
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("Review added");
                }
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="details-page mb-5">
            <PhotoProvider>
                <PhotoView src={img}>
                    <img className='img-fluid country-img' src={img} alt="country-img" />
                </PhotoView>
            </PhotoProvider>

            <Container className='mt-4 mt-lg-5'>
                <h1 className='mb-4'>{title}</h1>
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
                                <form onSubmit={handleAddReview}>
                                    <textarea className='p-3' name='review' cols="120" rows="5" placeholder="Type here..."></textarea>
                                    <button type='submit' className='btn btn-primary d-block'>Add review</button>
                                </form>
                                <h3 className='mt-5 mb-3'>Reviews</h3>
                                {
                                    reviews < 1 ?
                                        <div className='p-5'>
                                            <h2 className='text-muted text-center '>No reviews added yet</h2>
                                        </div>
                                        :
                                        <>
                                            {
                                                reviews.map(review => <ReviewCard
                                                    key={review._id}
                                                    review={review}
                                                />)
                                            }
                                        </>
                                }
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