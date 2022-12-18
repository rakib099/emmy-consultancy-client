import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const {createUser, updateUserProfile, providerLogin} = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

    const googleProvider = new GoogleAuthProvider();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            handleUpdateUser(name, photoURL);
            toast.success("Sign up successful! You may login now.");
            form.reset();
        })
        .catch(err => console.error(err));
    }

    // update user's name and photo
    const handleUpdateUser = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
        .then(() => {
            console.log('profile updated');
        })
        .catch(err => console.error(err));
    }

    // Provider login system
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleChecked = e => {
        setAccepted(e.target.checked);
    }

    return (
        <Container>
            <div className='mt-4 mb-5 form-container mx-auto'>
                <h2 className='my-3'>Create An Account</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name='firstName' placeholder="Enter your first name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name='lastName' placeholder="Enter your last name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name="photoURL" placeholder="Enter your photo URL" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={handleChecked} type="checkbox" label="Accept our Terms and Conditions" />
                    </Form.Group>
                    <Button className='btn-submit' variant="primary" type="submit" disabled={!accepted}>
                        Sign up
                    </Button>
                </Form>
                <p className='mt-2'>
                    <small>Already have an account? <Link to="/login">Click here to login!</Link></small>
                </p>
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

export default SignUp;