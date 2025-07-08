import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './LoginModal.scss';

const LoginModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} centered className="loginPopup">
      <Modal.Header >
        <Modal.Title>User Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit" className="btn-login-cta w-100">
            Login
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
