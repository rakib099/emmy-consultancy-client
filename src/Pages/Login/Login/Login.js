import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../../hooks/useTitle';

const Login = () => {
    const { signIn, providerLogin } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    useTitle("Login");

    let from = location.state?.from?.pathname || "/";

    const googleProvider = new GoogleAuthProvider();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError("");
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
            });
    }

    // Provider login system
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <Container>
            <div className='mt-4 mb-5 form-container mx-auto'>
                <h2 className='my-3'>Please Login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <p className="text-danger">
                        {error}
                    </p>
                    <Button className='btn-submit' variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                <p className='mt-2'>
                    <small>New to this website? <Link to="/signup">Create an account!</Link></small>
                </p>
                {/* Provider Login */}
                <div className='d-flex align-items-center mt-3'>
                    <hr className='w-25' />
                    <p className='flex-grow-1 text-secondary text-center m-0'><small>Or use one of these methods below</small></p>
                    <hr className='w-25' />
                </div>
                <div className="providers d-flex justify-content-center gap-3 mt-2">
                    <Button onClick={handleGoogleSignIn} variant="outline-primary"><FcGoogle /> Google</Button>
                </div>
            </div>

        </Container>
    );
};

export default Login;