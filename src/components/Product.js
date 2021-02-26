import React from 'react';   
import './Product.css';

function Product(props) {
    return (
        <div>
            <img src={props.image} alt=""/>
            <h3>{props.title}</h3>
        </div>
    )   
}

export default Product;