import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {Link} from "react-router-dom";
import logo from '../logo-l.png'

import { FaCartPlus } from "react-icons/fa";
//component
import {NavbarContainer} from './Button'
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText
  } from 'reactstrap';
class Navbars extends Component {
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/"><img src={logo} width="40" heigth="40"/></NavbarBrand>
                    <Collapse  navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem style={{"text-decoration":"none"}}>
                            <Link style={{"text-decoration":"none"}} to="/">Product</Link>
                        </NavItem>
                       
                    </Nav>
                        <NavbarContainer>
                            <Link  style={{"text-decoration":"none"}} to="/cart" >
                                <FaCartPlus className="mr-3 "/>
                                Cart</Link>
                        </NavbarContainer>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navbars;
