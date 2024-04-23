import './ProductItem.css'
import Card from 'react-bootstrap/Card';
import ProductItemForm from './ProductItemForm.jsx';
import { Link } from 'react-router-dom';

function ProductItem(props) {
    const {product, dispatchCart} = props;
    return (
        <div className="product_item">
            <Card style={{ width: '25rem' }}>
                <Link to={`/detail/${product.id}`}>
                <Card.Img variant="top" src= {product.mainImage} />
                </Link>
                <div className="titre_carte">
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
  