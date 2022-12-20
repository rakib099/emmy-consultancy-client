import React from 'react';
import './ReviewCard.css';

const ReviewCard = (props) => {
    const {userName, userPhoto, review} = props.review;

    return (
        <div className='review-card border border-info rounded p-3 mb-4'>
            <div className='d-flex align-items-center gap-2'>
                <img className='user-img rounded-circle' src={userPhoto} alt="user-img" />
                <h4>{userName}</h4>
            </div>
            <p>{review}</p>
        </div>
    );
};

export default ReviewCard;