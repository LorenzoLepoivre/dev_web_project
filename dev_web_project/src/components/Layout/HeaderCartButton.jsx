import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import './HeaderCartButton.css';

function HeaderCartButton({ onShowCart, nbre_product}) {
    return (
        <div id="HeaderCartButton">
          <Button onClick={onShowCart}>
            <div id="InButton">
              <h1>your cart <Badge bg="secondary">{nbre_product}</Badge></h1>
            </div>
          </Button>
        </div>
      );
}

export default HeaderCartButton;
