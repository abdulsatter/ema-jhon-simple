import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productkey} = useParams();
    const [product , setProduct ] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/product/'+ productkey)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[productkey])
    
    return (
        <div>
            {/* <h1>{productkey} this product coming sooooon</h1> */}
            <h1>Your Product Details</h1>
            <Product showAddToCart = {false} product = {product}></Product>
        </div>
    );
};

export default ProductDetail;