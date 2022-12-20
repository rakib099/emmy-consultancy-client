import React, { useState } from 'react';
import ConfirmModal from '../../Shared/ConfirmModal/ConfirmModal';

const ReviewRow = ({ reviewDetails, reviews, setReviews }) => {
    const { _id, serviceImg, serviceTitle, review, charge } = reviewDetails
    const [show, setShow] = useState(false);

    //show confirm modal
    const handleShow = () => setShow(true);

    const handleDelete = () => {
        // show delete modal
        handleShow();
    }

    return (
        <tr>
            <th>

            </th>
            <td>
                <div className="d-flex align-items-center gap-2">
                    <div className="avatar">
                        <img className='rounded' src={serviceImg} alt="service-img" />
                    </div>
                    <div>
                        <div className="font-bold">
                            {serviceTitle}
                        </div>
                        <div className="text-sm opacity-50">
                            ${charge}</div>
                    </div>
                </div>
            </td>
            <td>
                {review}
            </td>
            <td>
                <button className="btn btn-light">
                    Edit
                </button>
            </td>
            <th>
                <button onClick={handleDelete}
                    className="btn btn-light">Delete</button>
            </th>
            <ConfirmModal show={show}
                setShow={setShow}
                _id={_id}
                serviceTitle={serviceTitle}
                reviews={reviews}
                setReviews={setReviews}
            />
        </tr>
    );
};

export default ReviewRow;