import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import {Button, Container, Form, Nav, Navbar} from "react-bootstrap";
import Home from "./home/Home";
import Cart from "./cart/Cart";
import s from './header.modules.css'

class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="sm" bg="primary" variant="light">
                    <Container>
                        <Navbar.Brand>
                            LOGO
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className='mr-auto'>
                                <Nav.Link exact href='/'>Главная</Nav.Link>
                            </Nav>
                            <Form inline>
                                <Form.Control type="text" placeholder="Поиск" className='mr-sm-2'/>
                                <Button variant='primary'>Поиск</Button>
                            </Form>
                            <Nav>
                                <Nav.Link href="/cart">
                                    <svg xmlns="../files/bag.svg" width="25" height="25" fill="white"
                                         className="bi bi-bag" viewBox="0 0 16 16">
                                        <path
                                            d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                                    </svg>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/cart" component={Cart}/>
                </Switch>
            </>
        );
    }
}

export default Header;