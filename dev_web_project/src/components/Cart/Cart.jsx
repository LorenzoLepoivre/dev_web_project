import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Cart({ isOpen, onCloseCart, cart }) {
  var total = 0;
  cart.map((element) => (
    total += element[2]
  ));

  return (
    <>
      <Modal show={isOpen} onHide={onCloseCart} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <table>
          <thead>
            <tr>
              <th scope="col">Ref</th>
              <th scope="col">Name</th>
              <th scope="col">Price(€)</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>    
          {cart.map((element) => ( 
            <tr>
              <td scope="row">{element[0]} </td>
              <td>{element[1]} </td>
              <td>{element[2]}</td>
              <td>{element[3]}</td>
            </tr>
          ))}
          </tbody>
        </table>
        <p>Total Amount {total}€</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onCloseCart}>
            Fermer le panier
          </Button>
          <Button variant="primary">Commander</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cart;