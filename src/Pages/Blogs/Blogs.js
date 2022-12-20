import React from 'react';
import './Blogs.css';
import { Container } from 'react-bootstrap';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle("Blogs")

    return (
        <Container className='blog-page mt-4 mb-5'>
            <h2 className='page-title mb-3'>Conceptual Questions</h2>
            <div className="questions">
                <div className="question">
                    <h3>1. What is CORS?</h3>
                    <p><span>Ans:</span> CORS stands for Cross-Origin Resource Sharing. It is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
                    </p>
                    <p>In Web Dev, we use CORS as a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.</p>
                    <p>Historically, Cross-origin support was originally proposed by Matt Oshry, Brad Porter, and Michael Bodell of Tellme Networks in March 2004 for inclusion in VoiceXML 2.1 to allow safe cross-origin data requests by VoiceXML browsers. The mechanism was deemed general in nature and not specific to VoiceXML and was subsequently separated into an implementation NOTE.</p>
                </div>
            </div>
        </Container>
    );
};

export default Blogs;