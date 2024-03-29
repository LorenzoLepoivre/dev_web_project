import './App.css'
import Header from './components/Layout/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/Product/Product.jsx'
import Cart from './components/Cart/Cart.jsx'
import { useState, useEffect  } from 'react';
import { useReducer } from 'react';
import axios from 'axios';
import Spinner from './components/Axios/Spinner.jsx';
import ErrorMessage from './components/Axios/ErrorMessage.jsx';

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [product_tab, setProduct_tab] = useState([]);
  
  const cartReducer = (state, action) => {
    if (action.type === 'SET') {
      return action.cart;
    } else if (action.type === 'ADD') {
      let ligne = [action.id, action.name, action.price, action.quantity];
      return state.concat([ligne]);
      
    } else if (action.type === 'READ') {
      console.log(state);
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
        <div>
          <Header onShowCart={showCartHandler}/>
          <main>
            <Product productTab={product_tab} dispatchCart={dispatchCart}/>
            <Cart isOpen={cartIsOpen} onCloseCart={hideCartHandler} cart={cart}/>
          </main>
        </div>
      )}
    </div>
  );
}

export default App
