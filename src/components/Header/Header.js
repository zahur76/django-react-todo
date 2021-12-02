import { React, useState, useEffect, useState} from "react";
import './Header.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Header() {
    const [login, setLogin] = useState(false);
    return (
        <Row className="Header m-0 bg-dark text-white p-1">
            <Col className="h1 my-auto" xs={0} md={2}></Col>
            <Col className="h1 my-auto" xs={9}md={8}>Django-React Todo API</Col>
            <Col className="my-auto" xs={3} md={2}><div className="btn text-light login-text">{login ? 'Login' : 'Logout'}</div></Col>
        </Row>
    );
}
export default Header;