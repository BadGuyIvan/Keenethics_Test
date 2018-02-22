import React, { Component } from 'react';
import {Row} from 'react-bootstrap';
import TimeLineItem from './TimeLineItem';

class ListTimeLine extends Component {
    render(){
        const timelines = this.props.userTimeLine.map(item => 
            <TimeLineItem key={item.id} timeline={item}/>
        )
        return(
            <Row>
                {timelines}
            </Row>
        )
    }
}

export default ListTimeLine;