import ProductItem from './ProductItem.jsx';
import './Product.css';

function Product(props) {
  const { productTab, dispatchCart } = props;
  return (
    <div className="vignette-container">
      {productTab.map((element, index) => ( 
        <figure key={index}>
          <ProductItem product={element} dispatchCart={dispatchCart}/>
        </figure>
      ))}
    </div>
  );
}

export default Product;
