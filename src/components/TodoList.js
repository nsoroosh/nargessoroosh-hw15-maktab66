import React, { Component } from 'react'
import { ListGroupItem, ListGroup, Button, Row, Col } from 'react-bootstrap';
import "./liststyle.css"
import { BsFillCheckCircleFill } from 'react-icons/bs';
import Form from 'react-bootstrap/Form'
import { Container } from 'react-bootstrap';
import { BsClipboardCheck } from 'react-icons/bs';
export default class TodoList extends Component {
    constructor() {
        super()
        this.state = {
            setediting: false,
            isediting: false,
            item: ""
        }
        this.handleEditButton=this.handleEditButton.bind(this)
        this.handleCancleButton=this.handleCancleButton.bind(this)
        this.handleChangeInput=this.handleChangeInput.bind(this)
    }
    componentDidMount() {
        this.viewtemplate()
    }
    componentDidUpdate(prevstate) {
        if (prevstate.item !== this.state.item) {
            if (this.isediting) {
                this.editingtemplate()
            } else {
                this.viewtemplate()
            }
        }
    }
    edithandle() {

    }

    handleEditButton() {
        this.setState({ setediting: true })
    }
    handleCancleButton() {
        this.setState({ setediting: false })
    }
    handleChangeInput(e) {
        this.setState({ item: e.target.value });

    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.addToNewItem(this.state.item);
        this.setState({ item: "", isediting: false })
    }
    viewtemplate() {
        return (
            <div>
                <ListGroup>
                    <BsFillCheckCircleFill />
                    <ListGroupItem key={this.props.listItem} style={{ backgroundColor: 'yellow', justifyContent: 'space-around', display: "flex" }} >
                        {this.props.listItem}
                    </ListGroupItem>;
                    <Button style={{ backgroundColor: 'rgb(0, 183, 255)', borderRadius: '12px', marginLeft: "40px" }} variant="danger" onClick={() => {
                        this.props.delete(this.props.index)

                    }}>delete
                    </Button>
                    <Button onClick={this.handleEditButton}>edit</Button>
                </ListGroup>
            </div>)
    }
    editingtemplate() {
        return (
            <Form onSubmit={(e) => this.handleSubmit(e)}  >

                <Form.Group className="mb-3" controlId="formBasictext">
                    <Container fluid>
                        <Row>
                            <Col><Form.Label style={{ color: 'white' }}><BsClipboardCheck />change task</Form.Label></Col>
                            <Col><Form.Control
                                type="text"
                                name="newtodo"
                                onChange={(e) => {
                                    this.handleChangeInput(e)
                                }}
                                placeholder="next task enter here.." /></Col>
                            <Col><Form.Text className="text-muted" style={{ color: 'wheat' }}>
                                enter next task here
                            </Form.Text></Col>
                        </Row>
                    </Container>
                </Form.Group>
                <Button variant="primary" type="submit" style={{ backgroundColor: 'blueviolet', borderRadius: '12px' }}>
                    save
                </Button>
                <Button variant="primary" onClick={this.handleCancleButton} style={{ backgroundColor: 'blueviolet', borderRadius: '12px' }}>
                    cancel
                </Button>
            </Form>
        )
    }

    render() {



        return <ListGroup>
            <BsFillCheckCircleFill />
            <ListGroupItem key={this.props.listItem} style={{ backgroundColor: 'yellow', justifyContent: 'space-around', display: "flex" }} >
                {this.props.listItem}
            </ListGroupItem>
            <Button style={{ backgroundColor: 'rgb(0, 183, 255)', borderRadius: '12px', marginLeft: "40px" }} variant="danger" onClick={() => {
                this.props.delete(this.props.index)

            }}>delete
            </Button>
            <Button onClick={this.handleEditButton}>edit</Button>
        </ListGroup>;



    }
}
