import React, { Component } from 'react';
import {storeProducts, detailProduct} from '../../data'
const ProductContext = React.createContext();
//Provider
//Consummer (that pass props)
class ProductProvider extends Component {
    state ={
        products:storeProducts,
        detailProduct:detailProduct
    }
    handleDetail = ()=>{
        console.log('hello from detail')
    }
    addToCart = ()=>{
        console.log('hello from add to cart')
    }
    render() {
        return (
            <ProductContext.Provider value ={{
               ...this.state ,
               handleDetail:this.handleDetail,
               addToCart:this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}
const ProductConsumer = ProductContext.Consumer;
// the way to export more
export  {ProductProvider,ProductConsumer};