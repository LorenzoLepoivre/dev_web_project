import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Cart.css'
import Table from 'react-bootstrap/Table';

function Cart({ isOpen, onCloseCart, cart, dispatchCart }) {
  var total = 0;
  cart.forEach((element, index) => (
    total += element[2]
  ));

  const deleteItem = (id) => {
    dispatchCart({ type: 'DEL', id: id });
  }

  return (
    <>
      <Modal show={isOpen} onHide={onCloseCart} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th scope="col">Ref</th>
                <th scope="col">Name</th>
                <th scope="col">Price(€)</th>
                <th scope="col">Amount</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((element, index) => (
                <tr key={index}>
                  <td scope="row">{element[0]}</td>
                  <td>{element[1]}</td>
                  <td>{element[2]}</td>
                  <td>{element[3]}</td>
                  <td><Button variant="secondary" onClick={() => deleteItem(element[0])}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg></Button></td>
                </tr>
              ))}
            </tbody>
          </Table>

          <p id="total">Total Amount {total}€</p>
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
