import React from 'react';
import logo from '../../logo.png'
import './Header.css'
import { Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="header-area">
            <div className="logo-area"> 
                <a href="/home"><img src={logo} alt="logo"/></a>
            </div>
            <div className="nav-bar"> 
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/courses">Courses</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/instructors">Instructors</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/support">Support</Nav.Link>
                    </Nav.Item>
                </Nav>
                {/* <ul>
                    <a href="/home">Home</a>
                    <a href="/courses">Courses</a>
                    <a href="/instructors">Instructors</a>
                    <a href="/support">Support</a>
                </ul> */}
            </div>
        </div>
    );
};

export default Header;