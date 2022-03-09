import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import { Button, Container, Row, Col } from 'react-bootstrap';
import "./formstyle.css"
import { BsClipboardCheck  } from 'react-icons/bs';
export default class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
             item:''
        }
    }

    handleChangeInput(e) {
        this.setState({ item: e.target.value });
        
    }
    removeitem(){
        this.setState({ item:'' });
    }
    handleSubmit(e) {
        e.preventDefault();
        
        this.props.addToNewItem(this.state.item);
        console.log(e.target);
    }
    componentWillUnmount(){
          
    }
    render() {
        return (
            <div>
                <Form onSubmit={(e) => this.handleSubmit(e)} >
                    <Form.Group className="mb-3" controlId="formBasictext">
                        <Container fluid>
                            <Row>
                                <Col><Form.Label style={{color:'white'}}><BsClipboardCheck/>Todo tasks</Form.Label></Col>
                                <Col><Form.Control 
                                type="text"
                                 name="newtodo" 
                                onChange={(e) => {
                                    this.handleChangeInput(e);
                                }} 
                                placeholder="next task enter here.." /></Col>
                                <Col><Form.Text className="text-muted" style={{color:'wheat'}}>
                                    enter next task here
                                </Form.Text></Col>
                            </Row>
                        </Container>
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{backgroundColor:'blueviolet', borderRadius:'12px'}}>
                        add
                    </Button>
                </Form>
            </div>
        )
    }
}
