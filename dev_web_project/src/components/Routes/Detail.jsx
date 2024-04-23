import './Detail.css'
import { useParams } from "react-router-dom";
import HeaderDetail from '../Layout/HeaderDetail'
import axios from 'axios';
import Spinner from '../Axios/Spinner.jsx';
import ProductNotFound from '../Axios/ProductNotFound.jsx';
import { useState, useEffect  } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Table from 'react-bootstrap/Table';

function Detail() {
    const { id } = useParams();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getData();
      }, []);
    
    const getData = () => {
        setLoading(true); 
        let req = "http://localhost:3000/api/product/" + id;
        axios
          .get(req)
          .then((response) => {
            setProduct(response.data.product);
            setLoading(false);
          })
          .catch((error) => {
            setError(true);
            setLoading(false);
          });
      }

    return( 
    <div>
        {loading && <Spinner />}
        {error && <ProductNotFound />}
        {!error && (
        <div>
            <HeaderDetail/>
            <img src={product.mainImage} alt="Image du jeux : {product.name}"  className="img-thumbnail imgDetail"></img>
            <Table striped bordered hover responsive>
            <thead>
                <tr>
                <th scope="col">Nom</th>
                <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{product.name}</td>
                <td>
                {product.description && product.description.split('\n').map((item, index) => (
                    <React.Fragment key={index}>
                    {item}
                    <br />
                    </React.Fragment>
                ))}
                </td>
                </tr>
            </tbody>
            </Table>
        </div>
        )}
    </div>);
    }

export default Detail;