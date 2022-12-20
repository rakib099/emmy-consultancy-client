import React, { useContext, useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import ReviewRow from '../ReviewRow/ReviewRow';
import './MyReviews.css';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    useTitle("My Reviews");

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, [user?.email]);

    if (loading) {
        return <div className="text-center p-4">
            <Spinner animation="border" variant="primary" />
        </div>
    }

    return (
        <Container>
            {
                reviews < 1 ?
                    <div className='no-review'>
                        <h2 className='text-muted text-center fst-italic'>No reviews were added</h2>
                    </div>
                    :
                    <>
                        <div className='my-reviews mt-4 mb-5'>
                            <h2 className='page-title'>My Reviews</h2>
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
                    </>
            }
        </Container>
    );
};

export default MyReviews;