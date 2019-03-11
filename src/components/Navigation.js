import React, {Component} from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Modal, ModalHeader, ModalBody, Collapse, NavItem, Jumbotron,Button,Form, FormGroup, Label, Input, Col,FormFeedback  } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Dashboard from './Dashboard';


class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        
        this.state = {
          isNavOpen: false,
        
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

      render() {
        return(
             <div>
            <Navbar dark expand="md">
            <div className="container">
                <NavbarToggler  />
                <NavbarBrand className="mr-auto" href="/"><img src='images/logo.png' height="200" width="200" alt='Smart Portal' /></NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen}navbar>
                    <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/products'><span className="fa fa-info fa-lg"></span>Products</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link"  to='/general'><span className="fa fa-list fa-lg"></span> General Requests</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/payments'><span className="fa fa-address-card fa-lg"></span> Payments</NavLink>
                    </NavItem>
                    </Nav>
                   
                </Collapse>
                <h4>Welcome {this.props.username}</h4>
            </div>
        </Navbar>
        <Jumbotron>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12">
                   <h4>Welcome to smart portal for creating shows and processing payments!</h4>
                    </div>
                </div>
            </div>
        </Jumbotron>
             </div>
             
                            //     <Navbar >
            //         <div className="container">
                 
            //             <NavbarBrand className="mr-auto" href="/"><img src='images/logo.png' height="300" width="200" alt='smart portal' /></NavbarBrand>
                        
            //                 <Nav navbar>
            //                 <NavItem>
            //                     <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
            //                 </NavItem>
            //                 <NavItem>
            //                     <NavLink className="nav-link" to='/shows'><span className="fa fa-info fa-lg"></span> Shows</NavLink>
            //                 </NavItem>
            //                 <NavItem>
            //                     <NavLink className="nav-link"  to='/Payments'><span className="fa fa-list fa-lg"></span> Payments</NavLink>
            //                 </NavItem>
            //                 <NavItem>
            //                     <NavLink className="nav-link" to='/General'><span className="fa fa-address-card fa-lg"></span>General Requests</NavLink>
            //                 </NavItem>
            //                 </Nav>
            //                 <h4>Welcome {this.props.username}</h4>
                       
            //         </div>
            //     </Navbar>
            /* <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron> */
                
           
        );
    }
}
    
    export default Header;
