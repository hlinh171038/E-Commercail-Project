import React, { Component } from 'react';
import {storeProducts, detailProduct} from '../../data'
const ProductContext = React.createContext();
//Provider
//Consummer (that pass props)
class ProductProvider extends Component {
    state ={
        products:[],
        detailProduct:detailProduct
    }
    //call data from componentDidMount 
    componentDidMount(){
        this.setProduct();
    }
    // create function setProduct to call data
    setProduct = () =>{
        let tempProduct = [];
        storeProducts.forEach(item =>{
            const singleItem = {...item}
            tempProduct = [...tempProduct,singleItem];
        })
        this.setState({
            products:tempProduct
        })
    }
    //detail product when user click
    getDetail = id =>{
       var detailProduct = this.state.products.find(item =>{
           return  item.id ===id
        });
        return detailProduct;
    }
    handleDetail = (id)=>{
        let product = this.getDetail(id);
        this.setState({
            detailProduct:product
        })
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
