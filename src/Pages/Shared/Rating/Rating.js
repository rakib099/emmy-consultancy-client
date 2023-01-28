import React from 'react';
import { ImStarFull, ImStarHalf, ImStarEmpty } from 'react-icons/im';

const Rating = ({ rating }) => {

    // setting the ratings
    let stars;
    if (rating === 5 || rating === "5") {
        stars = <>
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
        </>
    }
    else if (rating === 4.5 || rating === "4.5") {
        stars = <>
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarHalf />
        </>
    }
    else if (rating === 4 || rating === "4") {
        stars = <>
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarEmpty />
        </>
    }
    else if (rating === 3.5 || rating === "3.5") {
        stars = <>
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarHalf />
            <ImStarEmpty />
        </>
    }
    else if (rating === 3 || rating === "3") {
        stars = <>
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarEmpty />
            <ImStarEmpty />
        </>
    }
    else if (rating === 2.5 || rating === "2.5") {
        stars = <>
            <ImStarFull />
            <ImStarFull />
            <ImStarHalf />
            <ImStarEmpty />
            <ImStarEmpty />
        </>
    }
    else if (rating === 2 || rating === "2") {
        stars = <>
            <ImStarFull />
            <ImStarFull />
            <ImStarEmpty />
            <ImStarEmpty />
            <ImStarEmpty />
        </>
    }
    else if (rating === 1.5 || rating === "1.5") {
        stars = <>
            <ImStarFull />
            <ImStarHalf />
            <ImStarEmpty />
            <ImStarEmpty />
            <ImStarEmpty />
        </>
    }
    else {
        stars = <>
            <ImStarFull />
            <ImStarEmpty />
            <ImStarEmpty />
            <ImStarEmpty />
            <ImStarEmpty />
        </>
    }

    return (
        <>
            <p className='text-warning m-0 d-flex gap-1'>
                {stars}
            </p>
            <span>{rating}</span>
        </>
    );
};

export default Rating;