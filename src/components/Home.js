import React, { Component } from 'react';
import { Grid, Col, Row} from 'react-bootstrap';
import Form from "./Form";
import ListTimeLine from './ListTimeLine';
import "../style/Home.scss";

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            timeLime: [],
            err: ""
          };
        this.getTimeLine = this.getTimeLine.bind(this);
    }

    getTimeLine(user_name){
        this.setState({err: ""});
        fetch("/user",{
          method: 'post',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({user: user_name})
        })
            .then(res => { if(res.ok) return res.json()} )
            .then(data => this.setState({timeLime: JSON.parse(data)}))
            .catch(err => this.setState({err: "Sorry, you input wrong user name"}));
    }   

    render(){
        return(
            <Grid>
                <Col xs={12} md={12}>
                    <Row className="form">
                        <Form  getTimeLine={this.getTimeLine}/>
                    </Row>
                    <Col className="error" smOffset={3} sm={6}>
                        {this.state.err && <div className="text-danger">{this.state.err}</div>}
                    </Col>
                       <ListTimeLine userTimeLine={this.state.timeLime}/>
                </Col>
            </Grid>
        )
    }
}

export default Home;