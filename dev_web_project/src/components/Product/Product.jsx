import ProductItem from './ProductItem.jsx';
import './Product.css'

function Product(props) {
  const { productTab, dispatchCart } = props;
  return (
    <div class="vignette-container">
      {productTab.map((element) => ( 
        <figure>
          <ProductItem product={element} dispatchCart={dispatchCart}/>
        </figure>
      ))}
    </div>
  );
}

export default Product;