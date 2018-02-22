import React, { Component } from 'react';
import {InputGroup, Col, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

class Form extends Component {

    constructor(props, context) {
        super(props, context);
    
        this.handleChange = this.handleChange.bind(this);
        this.responseTimeLine = this.responseTimeLine.bind(this);

        this.state = {
          name: ''
        };
      }

      handleChange(e) {
        this.setState({ name: e.target.value });
      }

    responseTimeLine(){
        this.props.getTimeLine(this.state.name);
    }

    render(){
        return (
        <Col smOffset={3} sm={6}>
            <FormGroup>
                <ControlLabel>User Name:</ControlLabel>
                <InputGroup>
                    <FormControl
                            type="text"
                            value={this.state.name}
                            placeholder="Enter text"
                            onChange={this.handleChange}
                        />
                    <InputGroup.Button>
                        <Button onClick={this.responseTimeLine}>Send</Button>
                    </InputGroup.Button>
                </InputGroup>
            </FormGroup>
        </Col>
        )
    }
}

export default Form;

