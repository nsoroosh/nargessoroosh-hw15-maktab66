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

            isediting: false,
            item: ""
        }
        this.handleEditButton = this.handleEditButton.bind(this)
        this.handleCancleButton = this.handleCancleButton.bind(this)
        this.handleChangeInput = this.handleChangeInput.bind(this)
    }

    // componentDidUpdate(prevstate) {
    //     if (prevstate.item !== this.state.item) {
    //         if (this.isediting) {
    //             this.editingtemplate()
    //         } else {
    //             this.viewtemplate()
    //         }
    //     }
    // }


    handleEditButton() {
        this.setState({ isediting: true })
    }
    handleCancleButton() {
        this.setState({ isediting: false })
    }
    handleChangeInput(e) {
        this.setState({ item: e.target.value });
        console.log(e.target);

    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.addToNewItem(this.props.index, this.state.item);
        this.setState({ item: "", isediting: false })
    }




    render() {
        const editingtemplate = (
            <Form onSubmit={(e) => this.handleSubmit(e)}  >

                <Form.Group className="mb-3" controlId="formBasictext">
                    <Container fluid>
                        <Row>

                            <Col><Form.Control
                                type="text"
                                name="newtodo"
                                onChange={(e) => {
                                    this.handleChangeInput(e)
                                }}
                                placeholder="next task enter here.." />
                            </Col>


                        </Row>
                    </Container>
                </Form.Group>
                <Button variant="primary" type="submit" style={{ backgroundColor: 'rgb(255, 255, 255)', borderRadius: '5px', border: "solid gray 1px" }}>
                    save
                </Button>
                <Button variant="primary" onClick={this.handleCancleButton} style={{ backgroundColor: 'rgb(255, 255, 255)', borderRadius: '5px', border: "solid gray 1px" }}>
                    cancel
                </Button>
            </Form>
        )
        const viewtemplate = (
            <ListGroup>
                <BsFillCheckCircleFill />

                {this.props.listItem}

                <Button className='delete' style={{ borderRadius: '5px', marginLeft: "40px", border: "solid gray 1px" }} variant="danger" onClick={() => { this.props.delete(this.props.index)}}>
                    delete
                </Button>
                <Button style={{ backgroundColor: 'rgb(255, 255, 255)', borderRadius: '5px', marginLeft: "40px", border: "solid gray 1px" }} onClick={this.handleEditButton}>edit</Button>
            </ListGroup>
        )

        return <ListGroup  >
            <ListGroupItem>{this.state.isediting ? editingtemplate : viewtemplate}</ListGroupItem>
        </ListGroup>;

        

    }
}
