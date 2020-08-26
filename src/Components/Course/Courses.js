import React from 'react';
import './Courses.css';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Courses = (props) => {
    const {image,name,price,} = props.course;
    return (
        <div>
            <Col lg={4} md={6} xs={12}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Price: ${price}
                        </Card.Text>
                        <button className="add-button" onClick={()=>props.handleAddCourse(props.course)}>Enroll Now</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Courses;