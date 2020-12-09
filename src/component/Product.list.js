import React, { Component } from 'react';
import Product from './Products'
import {ProductConsumer} from './context/ProductProvider'
import {storeProducts} from "../data"
class ProductList extends Component {
    render() {
        return (
            <div>
                Product List
                <ProductConsumer>
                    {(value)=>{
                        return value.products.map(product =>{
                            return <Product key={product.id} product={product}// pass for Products.js
                            />
                        })
                    }}
                </ProductConsumer>
            </div>
        );
    }
}

export default ProductList;