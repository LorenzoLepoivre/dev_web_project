import Badge from 'react-bootstrap/Badge';
import './HeaderCartButton.css';
import Button from 'react-bootstrap/Button';


function HeaderCartButton() {
    return (
        <div id="HeaderCartButton">
          <Button>
          <div id="InButton">
          <h1>your cart <Badge bg="secondary">9</Badge></h1>
          </div>
          </Button>
        </div>
      );
}

export default HeaderCartButton