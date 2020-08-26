import React from 'react';
import courses from '../../fakeData/courses'
import { useState } from 'react';
import Courses from '../Course/Courses';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './School.css'
import Cart from '../Cart/Cart';

const School = () => {
    const course12=courses.slice(0,12);
    const [course,setCourse]=useState(course12);
    const [cart,setCart]=useState([])
    const handleAddCourse = (addedCourse) => {
        const newCart = [...cart,addedCourse];
        setCart(newCart);
    }
    return (
        <div className="school-area">
            <div className="course-area">
                <h1 className="heading">Courses We Offer</h1>
                <Container>
                    <Row> 
                        {
                            course.map(crs => <Courses handleAddCourse={handleAddCourse} course={crs} key={crs.key}></Courses> )
                        }
                    </Row>
                </Container>
              
            </div>
            <div className="cart-area"> 
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default School;