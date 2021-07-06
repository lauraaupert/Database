import React, { useState, useEffect, useContext } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import UpdateForm from '../UpdateForm';


function UpdateModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        
    }
  
    return (
      <>
        <Button variant="info" onClick={handleShow}>
          Update
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>Update Customer Details</Modal.Title>
          </Modal.Header>
          {/* <Modal.Body>
            I will not close if you click outside me. Don't even try to press
            escape key. */}
            <UpdateForm />
          {/* </Modal.Body> */}
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default UpdateModal;