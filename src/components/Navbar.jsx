import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';


class NavbarPage extends Component {
  state = {
    isOpen: false
  };
  
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
  return (
    <Router>
    <MDBNavbar sticky="top" color="indigo" dark expand="md" width="100%">
      <MDBNavbarBrand className="logo" >FirngprintJS Pro</MDBNavbarBrand>
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
      <MDBNavbarNav left >
        <MDBNavItem ><MDBNavLink to="#" >Demo</MDBNavLink></MDBNavItem>
        <MDBNavItem ><MDBNavLink to="#" >Pricing</MDBNavLink></MDBNavItem>
        <MDBNavItem ><MDBNavLink to="#" >Open-Source</MDBNavLink></MDBNavItem>
        <MDBNavItem ><MDBNavLink to="#" >Docs</MDBNavLink></MDBNavItem>
        <MDBNavItem  className="startTrial"><MDBNavLink to="#" >Start Trial</MDBNavLink></MDBNavItem>
      </MDBNavbarNav>
    </MDBCollapse>
    </MDBNavbar>
     </Router>
  );
}
}

export default NavbarPage;