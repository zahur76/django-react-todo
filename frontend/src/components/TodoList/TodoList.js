import { React, useState, useEffect} from "react";
import './TodoList.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion'

function TodoList() {
    const [data, setData] = useState(null);       

    useEffect(() => {
        fetch("/api").then((res) => res.json())
        .then((data) => setData(data)).catch((error) => {
            console.log(error);
        });        
    }, [])
    
    const updateStatus = (event) => {        
        fetch(`/api/status/${event.target.value}`).then((res) => res.json())
        .then((data) => setData(data)).catch((error) => {
            console.log(error);
        });
    }

    const removeTodo = (event) => {        
        fetch(`/api/remove/${event.target.value}`).then((res) => res.json())
        .then((data) => setData(data)).catch((error) => {
            console.log(error);
        });
    }

    const listItems = (data || []).map((element) =>
        <div  key={element.id} className="text-center">
            <Accordion className="w-75 mx-auto mb-2 mt-3" defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <Col xs={12}>
                                <div className="text-dark h5">{element.pk}.{element.fields.title}</div>
                            </Col>                                                                                                                                
                        </Accordion.Header>
                    <Accordion.Body>
                        <Row className="text-center todo-list">
                            <Col xs={12} className="h5">{element.fields.description}</Col>
                            <Col xs={6}>Created</Col>                            
                            <Col xs={6}>Status</Col>                            
                            <Col className="border-bottom border-dark mb-2" xs={12}></Col>
                            <Col xs={6}>{element.fields.created_at.substring(0,10)}</Col>                            
                            <Col xs={6}>{element.fields.completed ? 'Complete' : 'Pending'}</Col>
                            <Col className="buttons mt-2" xs={12}>                                
                                <Button onClick={removeTodo} value={element.pk} className="m-1 bg-danger text-light text-right">Remove</Button>
                                <Button onClick={updateStatus} value={element.pk} className="m-1 bg-success text-light text-right">Update</Button>                                
                            </Col>                                                                                   
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>            
        </div>
    ); 
    return (
        <div className="Todo">
            {listItems}
        </div>
    );
}
export default TodoList;