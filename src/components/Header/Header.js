import { React, useState } from "react";
import './Header.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'


function Header() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);    

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [login, setLogin] = useState(localStorage.getItem("login"));

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)              
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)                
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault()        
        fetch("/api/login").then((res) => res.json())
        .then((data) => [setShow(false), localStorage.setItem("login", data.login)]).then(() => { 
            setLogin(localStorage.getItem("login"))
        });                             
    }

    const handleLogout = (e) => {
        e.preventDefault()               
        fetch("/api/logout").then((res) => res.json())
        .then((data) => [localStorage.setItem("login", false)]).then(() => {            
            setLogin(localStorage.getItem("login"))
        });                             
    }

    return (
        <div>
            <Row className="Header m-0 bg-dark text-white p-1">
                <Col className="h1 my-auto" xs={0} md={2}></Col>
                <Col className="h1 my-auto" xs={9}md={8}>Django-React Todo API</Col>
                <Col className="my-auto" xs={3} md={2}><div>{login==='true' ? <div onClick={handleLogout} className="btn text-light login-text">Logout</div> : <div onClick={handleShow} className="btn text-light login-text">Login</div>}</div></Col>
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="p-2" closeButton>
                    <Modal.Title className="p-1">Login</Modal.Title>                    
                </Modal.Header>                
                <Modal.Body>
                    <form className="w-75 mx-auto form-add-todo" onSubmit={handleLoginSubmit}>     
                        <input className="col-12 m-1" type="text" username={username} onChange={handleUsernameChange} placeholder="username" required/>
                        <input className="col-12 m-1" type="password" password={password} onChange={handlePasswordChange} placeholder="password" required/>  
                        <input className="col-12 btn bg-dark text-light mt-2" type="submit" value="Submit" />                
                    </form>  
                </Modal.Body>                
            </Modal>
        </div>
    );
}
export default Header;