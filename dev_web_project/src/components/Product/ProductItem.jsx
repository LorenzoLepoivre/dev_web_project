import './ProductItem.css'
import Card from 'react-bootstrap/Card';
import ProductItemForm from './ProductItemForm.jsx';

function ProductItem() {

    return (
        <div id="product_item">
            <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <div id="titre_carte">
                <Card.Body>
                    <Card.Title>Pontiac</Card.Title>
                </Card.Body> 
                </div>  
                <ProductItemForm /> 
            </Card>
        </div>
    );
}
  
export default ProductItem
  