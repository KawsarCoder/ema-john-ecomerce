import React, { useEffect, useState } from 'react';
import "./Product.css"
const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    },[])

    return (
        <div className='product-main'>
            <div className="product-wrapper">
                product length: {products.length}
           </div>
            <div className="order-wrapper">
                order
           </div>
        </div>
    );
};

export default Product;