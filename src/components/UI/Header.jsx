import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import {ROUTES} from "../../constants/navigation";
import {LinkContainer} from 'react-router-bootstrap'
import {Image} from "react-bootstrap";
import IMAGES from "../../constants/images";

const Header = () => {
    return (
        <>
            <Navbar key={'false'} bg="light" expand={'false'} className="mb-3 position-absolute" fixed={'top'}>
                <Container fluid>
                    <Navbar.Brand>SPA</Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls={`Navbar-expand-false`}
                    />
                    <Navbar.Offcanvas
                        id={`Navbar-expand-false`}
                        aria-labelledby={`NavbarLabel-expand-false`}
                        placement="start"
                    >
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Image src={IMAGES.author} roundedCircle style={{width: "200px", margin: '3px'}}/>
                                <Nav.Item>Фаннур Ахметов</Nav.Item>
                                <Nav.Item>AkhmetovFFQA@yandex.ru</Nav.Item>
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