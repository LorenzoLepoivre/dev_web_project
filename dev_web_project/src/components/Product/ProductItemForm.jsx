import './ProductItemForm.css'
import Button from 'react-bootstrap/Button';

function ProductItemForm() {

  return (
    <div id="form_input">
        <p>€13077,47</p>
        <div id="entree">
        <input type="text" id="money" name="money" />   
        <Button variant="primary">Add</Button>
        </div>
    </div>
  );
}

export default ProductItemForm
