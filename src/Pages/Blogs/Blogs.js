import React from 'react';
import './Blogs.css';
import { Container } from 'react-bootstrap';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle("Blogs")

    return (
        <Container className='blog-page mt-4 mb-5 questions-container'>
            <h2 className='page-title mb-3'>Conceptual Questions</h2>
            <div className="questions">
                <div className="question">
                    <h3>1. Difference between SQL & NoSQL</h3>
                    <p><span>Ans:</span> Both the databases are viable options still there are certain key differences between the two that users must keep in mind when making a decision.
                    </p>
                    <p><span>SQL:</span></p>
                    <ol>
                        <li>SQL databases are relational</li>
                        <li>SQL databases use structured query language and have a predefined schema</li>
                        <li>SQL databases are vertically scalable</li>
                    </ol>
                    <p><span>NoSQL:</span></p>
                    <ol>
                        <li>NoSQL databases are non-relational</li>
                        <li>NoSQL databases have dynamic schemas for unstructured data.</li>
                        <li>NoSQL databases are horizontally scalable</li>
                    </ol>
                </div>
                <div className="question">
                    <h3>2. What is JWT & How does it work?</h3>
                    <p><span>Ans:</span> JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                    </p>
                    <p>Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties.</p>
                    <p><span>How it works:</span> A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz. Once decoded, you will get two JSON strings, The header and the payload. And on the other The signature. </p>
                </div>
                <div className="question">
                    <h3>3. What is the difference between javascript and NodeJS?</h3>
                    <p><span>Ans:</span> JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                    </p>
                    <p><span>JavaScript:</span> Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.</p>
                    <p><span>NodeJS:</span> NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.</p>
                    <p>JavaScript is a widely-used programming language that almost every web application developer uses. Node JS is a JavaScript library extension, but it includes certain undefined utilities, such as non-blocking operating system operation, which is often critical for meeting company objectives.</p>
                </div>
                <div className="question">
                    <h3>4. How does NodeJS handle multiple requests at the same time?</h3>
                    <p><span>Ans:</span> There's a lot of confusion out there about concurrency and parallelism. Some people use the terms interchangeably, but they actually refer to two different things.
                    </p>
                    <p><span>Concurrency</span> is when two or more tasks can start, run, and complete in overlapping time periods. It doesn't necessarily mean that they'll be running at the same time, but they can be interleaved so that at any given time, there is always one task running.</p>
                    <p>We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded.</p>
                    <p><span>Gist of the ans:</span> NodeJS receives multiple client requests and places them into <span className='fst-italic'>EventQueue</span>. NodeJS is built with the concept of event-driven architecture. NodeJS has its own <span className='fst-italic'>EventLoop</span> which is an infinite loop that receives requests and processes them. <span className='fst-italic'>EventLoop</span> is the listener for the <span className='fst-italic'>EventQueue</span>. </p>
                </div>
            </div>
        </Container>
    );
};

export default Blogs;