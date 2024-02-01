import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Styles from './Popup.module.css'

function PopUPmodel(props) {
 
  
 
    return (
      <>
      <Modal     
      show={props.onOpen} 
      onHide={props.onRequestClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Your Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onRequestClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
}

export default PopUPmodel;