import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './LoginModal.scss';
import { login } from './LoginServices'; // <-- import your login function
import { RENDER_URL } from '../../Utils/Urls';

const LoginModal = ({ show, onHide }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    logintype: 'normal'
  });
  const [loginError, setLoginError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoginError(false);
    try {
      const res = await login(loginData);
      if (res?.data?.success) {
        const { info } = res.data?.data || {};
        let userData = {
          token: res.data.data?.token || '',
          ...info
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        setLoading(false);
        onHide && onHide();

        if (info.isAdmin === 1) {
          navigate(RENDER_URL.ADMIN_DASHBOARD);
        } else {
          if (loginData.password === 'qwerty123') {
            navigate(`${RENDER_URL.RESET_PASSWORD}/${info.staffid}`);
          } else {
            navigate(RENDER_URL.STAFF_DASHBOARD);
          }
        }
      } else {
        setLoginError(true);
        setLoading(false);
      }
    } catch (er) {
      setLoginError(true);
      setLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered className="loginPopup">
      <Modal.Header>
        <Modal.Title>User Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {loginError && (
            <Alert variant="danger" className="mb-3">
              Invalid username/password
            </Alert>
          )}

          <Button 
            variant="primary" 
            type="submit" 
            className="btn-login-cta w-100"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;