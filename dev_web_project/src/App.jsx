import './App.css'
import Header from './components/Layout/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/Product/Product.jsx'
import Cart from './components/Cart/Cart.jsx'

function App() {

  return (
    <div>
      <Header />
      <Product/>
      <Cart />
    </div>
  );
}

export default App
