import React from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import "../style/TimeLineItem.scss";

const TimeLineItem = (props) => {

    const today_date = new Date().toLocaleDateString(undefined, {
        day:'numeric',
        month: 'numeric',
        year: 'numeric'
    })

    const TimeLineDate = date => {
        const date_parse = new Date(date).toLocaleDateString(undefined, {
            day:'numeric',
            month: 'numeric',
            year: 'numeric'
        })

        if(today_date === date_parse){
            return new Date(date).toLocaleTimeString(undefined, {
                hour: '2-digit',
                minute: '2-digit'
            })
        } else {
            return new Date(date).toLocaleDateString(undefined, {
                day:'numeric',
                month: 'short'
            })
        }
    }

    const { timeline } = props;
    const user_image = hasOwnProperty.call(timeline, 'extended_entities') && timeline.extended_entities.media.map(i => i.media_url)[0]
    return (
        <Row className="time_line_container">
            <Col md={1} className="image_profile">
                <Image src={timeline.user.profile_image_url} circle />
            </Col>
            <Col md={11} className="context">
                <ul className="list-inline">
                    <li className="user_name">
                        {timeline.user.name}
                    </li>
                    <li>
                        {TimeLineDate(timeline.created_at)}
                    </li>
                </ul>
                <div>
                    {timeline.text}
                </div>
                    {
                        user_image && 
                        <div>
                            <Image className="user_image" src={user_image} />
                        </div>
                    }
            </Col>
        </Row>
    )
}

export default TimeLineItem;