import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import ReviewRow from '../ReviewRow/ReviewRow';
import './MyReviews.css';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
        .catch(err => console.error(err));
    }, [user?.email]);

    return (
        <Container>
            <div className='my-reviews mt-3 mb-5'>
                <h2 className='page-title'>My Reviews {reviews.length}</h2>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th>Service</th>
                                <th>Review</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reviews.map(review => <ReviewRow 
                                    key={review._id}
                                    reviewDetails={review}
                                    reviews={reviews}
                                    setReviews={setReviews}
                                />)
                            }
                        </tbody>

                        <tfoot>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>Total Reviews</th>
                                <th>{reviews.length}</th>
                                <th></th>
                            </tr>
                        </tfoot>

                    </table>
                </div>
            </div>
        </Container>
    );
};

export default MyReviews;