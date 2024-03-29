import './ProductItem.css'
import Card from 'react-bootstrap/Card';
import ProductItemForm from './ProductItemForm.jsx';

function ProductItem(props) {
    const {product, dispatchCart} = props;
    return (
        <div class="product_item">
            <Card>
                <Card.Img variant="top" src= {product.images[0]} />
                <div class="titre_carte">
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                </Card.Body> 
                </div>  
                <ProductItemForm product={product} dispatchCart={dispatchCart}/> 
            </Card>
        </div>
    );
}

export default ProductItem
  