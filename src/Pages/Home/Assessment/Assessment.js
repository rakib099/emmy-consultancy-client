import React from 'react';
import './Assessment.css';
import { Col, Row } from 'react-bootstrap';
import pic from '../../../assets/images/assessment.jpg';

const Assessment = () => {
    return (
        <div className='assessment'>
            <Row xs={1} md={2}>
                <Col>
                    <div className="img-container">
                        <img className='img-fluid' src={pic} alt="assessment-pic" />
                    </div>
                </Col>
                <Col className='d-flex align-items-center'>
                    <div className="text-white">
                        <h2>One-Stop solution for Australia, Canada, UK, USA Immigration from Bangladesh</h2>
                        <p>We are professionals on assessing your profile and giving you the best migration advice possible. So, lookup for a free assessment.</p>
                        <div className="btn-container">
                            <button>Free Assessment</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Assessment;