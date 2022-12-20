import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import { toast } from 'react-hot-toast';

const ConfirmModal = ({ show, setShow, _id, serviceTitle, reviews, setReviews }) => {

    const handleClose = () => {
        setShow(false);
        console.log('Review deletion aborted');
    };

    const handleConfirmDelete = () => {

        fetch(`https://emmy-consultancy-server.vercel.app/reviews/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Review successfully deleted');
                    const remaining = reviews.filter(review => review._id !== _id);
                    setReviews(remaining);
                }
            })
            .catch(err => console.error(err));
        setShow(false);
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure you want to delete?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    You are about to delete <span className='fst-italic'>"{serviceTitle}"</span> review
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="info" onClick={handleConfirmDelete}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ConfirmModal;