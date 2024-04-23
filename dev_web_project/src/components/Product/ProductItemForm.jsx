import './ProductItemForm.css'
import { useState, useEffect  } from 'react';
import Button from 'react-bootstrap/Button';

function ProductItemForm(props) {
  const {product, dispatchCart} = props;
  const [quantity, setQuantity] = useState(0);
    
  const cartReducerUse = () => {
    if (Number.isInteger(quantity) && quantity > 0) {
      let prices = quantity * product.price;
      dispatchCart({ type: 'ADD', id: product.id, name: product.name, price: prices, quantity: quantity });
    }
    else {
      alert("La quantité doit être un entier strictement supérieur à 0.");
    }
  
  }

  const handleChangeQuantity = (event) => {
    if(event.target.value < 0 || isNaN(event.target.value)){
      setQuantity(0);
    }
    else{setQuantity(parseInt(event.target.value));}
  };

  return (
    <div className="form_input">
      <p>{product.price} €</p>
      <div className="entree">
        <label htmlFor={`quantity_${product.id}`}>Amount:</label>
        <input 
          type="text" 
          id={`quantity_${product.id}`} 
          name={`quantity_${product.id}`} 
          value={quantity} 
          onChange={handleChangeQuantity}  
        />   
        <Button variant="primary" onClick={cartReducerUse}>Add</Button>
      </div>
    </div>
  );
  
}

export default ProductItemForm
