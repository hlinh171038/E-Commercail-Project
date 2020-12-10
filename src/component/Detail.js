import React, { Component } from 'react';
import {ProductConsumer} from './context/ProductProvider';
import {NavbarContainer} from './Button'
//react router
import {Link} from 'react-router-dom'

class Detail extends Component {
    render() {
        return (
            <div>
                <ProductConsumer>
                    {(value)=>{
                        console.log(value.detailProduct)
                        const {title,company,count,img,inCart,info,price,total} = value.detailProduct;
                       return <div className="container">
                            <div className="row ">
                                <div className="col-10  text-center mt-5 text-slanted text-primary mb-5 " 
                                style={{"font-size":"30px","letter-spacing": "5px"}}>
                                  {title}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 col-md-6 d-flex justify-content-center align-items-center"  >
                                    <img  src={img}/>
                                </div>
                                <div className="col-10 col-md-6 ">
                                    <h3>{title}</h3>
                                    <h6 className="card-title text-uppercase mt-3 mb-2">Make by : {company}</h6>
                                    <h6 className="text-primary">
                                        <strong>
                                            price: <span>$</span>
                                            {price}
                                        </strong>
                                    </h6>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        some info about product
                                    </p>
                                    <p className="text-muted lead" style={{"font-size":"18px"}}>{info}</p>
                                    {/* {button} */}
                                        <NavbarContainer>
                                            <Link style={{"text-decoration":"none"}} to="/"> Back to home</Link>
                                        </NavbarContainer>
                                        <NavbarContainer
                                        disabled={inCart?true:false}
                                        >
                                            {inCart?" Add to cart":"in cart"}
                                        </NavbarContainer>
                                </div>
                            </div>
                        </div>
                    }}
                </ProductConsumer>
            </div>
        );
    }
}

export default Detail;