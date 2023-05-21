import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import {ROUTES} from "../../constants/navigation";
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
    return (
        <>
            <Navbar key={'false'} bg="light" expand={'false'} className="mb-3" fixed={'top'}>
                <Container fluid>
                    <Navbar.Brand>SPA</Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls={`Navbar-expand-false`}
                        // className={'ml-auto'}

                    />
                    <Navbar.Offcanvas
                        id={`Navbar-expand-false`}
                        aria-labelledby={`NavbarLabel-expand-false`}
                        placement="start"
                    >
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <LinkContainer to={ROUTES.MAIN}>
                                    <Nav.Link>Список постов</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to={ROUTES.ABOUT}>
                                    <Nav.Link>Обо мне</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;