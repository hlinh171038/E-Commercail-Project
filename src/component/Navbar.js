import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {Link} from "react-router-dom";
import logo from '../logo-l.png'
import styled from 'styled-components'
import { FaCartPlus } from "react-icons/fa";
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
const NavbarContainer = styled.button`
text-decoration:none;
text-transform:capitalize;
font-size:1.4rem;
background: transparent;
border:0.05rem solid var(--lightBlue);
color:var(--lightBlue);
border-radius:0.5rem;
padding:0.2rem 0.8rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover {
    background: var(--lightBlue);
    color: var(--mainBlue);
    text-decoration:none;
}
&:focus {
    outline:none;
}
`