import './Home.css'
import Header from '../Layout/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from '../Product/Product.jsx'
import Cart from '../Cart/Cart.jsx'
import { useState, useEffect  } from 'react';
import { useReducer } from 'react';
import axios from 'axios';
import Spinner from '../Axios/Spinner.jsx';
import ErrorMessage from '../Axios/ErrorMessage.jsx';

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [product_tab, setProduct_tab] = useState([]);
  const [nbre_product, setNbre_product] = useState(0);
  
  const cartReducer = (state, action) => {
    if (action.type === 'SET') {
      return action.cart;

    } else if (action.type === 'ADD') {
      let existingProductIndex = state.findIndex(item => item[0] === action.id);
      if (existingProductIndex !== -1) {
        console.log(action.quantity);
        state[existingProductIndex][2] += action.price;
        state[existingProductIndex][3] += action.quantity;
      }
      else{
        let ligne = [action.id, action.name, action.price, action.quantity];
        state = state.concat([ligne]);
      } 
      setNbre_product(state.reduce((acc,currentValue)=>acc+currentValue[3],0));
      return state  
      
    } else if (action.type === 'READ') {
      return state;

    }else if (action.type === 'DEL') {
      state = state.filter(s => s[0] != action.id);
      setNbre_product(state.reduce((acc,currentValue)=>acc+currentValue[3],0));
      return state;

    } else {
      console.error('Invalid action type');
      return state;
    }
  }
  
  const [cart, dispatchCart] = useReducer(cartReducer, []);

  const showCartHandler = () => {
    console.log(cart);
    setCartIsOpen(true);
  }

  const hideCartHandler = () => {
    setCartIsOpen(false);
  }

  useEffect(() => {
    getData();
  }, []); // Appeler getData une seule fois après le rendu initial

  const handleError = () => { 
    setError(true);
  }

  const getData = () => {
    setLoading(true); 
    axios
      .get('http://localhost:3000/api/product')
      .then((response) => {
        dispatchCart({ type: 'SET', cart: [] });
        setProduct_tab(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        handleError();
        setLoading(false);
      });
  }
  
  return (
    <div>
      {loading && <Spinner />}
      {error && <ErrorMessage />}
      {!error && (
        <div id="content">
          <Header onShowCart={showCartHandler}  nbre_product={nbre_product}/>
          <main>
            <Product productTab={product_tab} dispatchCart={dispatchCart}/>
            <Cart isOpen={cartIsOpen} onCloseCart={hideCartHandler} cart={cart} dispatchCart={dispatchCart}/>
          </main>
        </div>
      )}
    </div>
  );
}

export default App