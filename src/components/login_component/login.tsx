import React, { FormEvent, useState } from 'react';
import { HomeNavbar } from '../navbar_component/navbar';
import "./login_component_style.css";
import { Button, Form, Modal, Spinner } from 'react-bootstrap';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const handleLogin = (e: FormEvent) => {
    // You should perform your authentication logic here, e.g., check against a backend API
    // For simplicity, we will hardcode a username and password.
    e.preventDefault();
    setShowLoading(true);

    if (username === 'user' && password === 'password') {
        setIsLoggedIn(true);
        sessionStorage.setItem('isLoggedIn', 'true');
        setShowLoading(false); // Hide the loading pop-up after a successful login
    } 
      
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('isLoggedIn'); // Remove session from sessionStorage
  };

  return (
    <div style={{background: "#ee7742"}}>
        <HomeNavbar isMainPage={false}/>
        <section id="studentCreation" className="container" >
            {isLoggedIn ? (
                <div>
                <p>Welcome, {username}!</p>
                <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div className="login-form align-items-center d-flex flex-column">
                        <Form className='p-4' onSubmit={handleLogin}>
                        <h2 className='m-2'>Login</h2>
                            <Form.Group controlId="formBasicEmail" className="col-md-12">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter username" 
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" className="col-md-12 mt-2">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="col-md-12 mt-3 btn">
                                <Button variant="dark" type="submit" >
                                    Submit
                                </Button>
                            </Form.Group>
                        </Form>
                        <Modal show={showLoading} centered>
                            <Modal.Body >
                            <p>Verifying...</p>
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                            </Modal.Body>
                        </Modal>
                   
                </div>
            )}
      </section>
    </div>
  );
}

export default Login;
