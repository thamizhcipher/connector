import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState,useEffect } from 'react';
import './CustomNavbar.css'
function NavigationBar() {
  const [role, setRole] = useState(null);

  useEffect(() => {
      const userRole = localStorage.getItem("role");
      setRole(userRole);
  }, []);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/home" style={{letterSpacing:"3px"}}>CONNECTOR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            {role === "admin" ? (
                            
                            <>
                                <Nav.Link href="/admin-dashboard">Dashboard</Nav.Link>
                                <Nav.Link href="/admin-course">Courses</Nav.Link>
                                <Nav.Link href="/admin-event">Events</Nav.Link>
                                <Nav.Link href="/admin-qp">Upload QP</Nav.Link>
                                <Nav.Link href="/admin-register">Register Student</Nav.Link>
                            </>
                        ) : (
                            
                            <>
                                <Nav.Link href="/courses">Courses</Nav.Link>
                                <Nav.Link href="/events">Events</Nav.Link>
                                <Nav.Link href="/courseRecommendation">Course Recommendation</Nav.Link>
                                <Nav.Link href="/certificate">Certificate</Nav.Link>
                                <Nav.Link href="/qprepo">QP-Repo</Nav.Link>
                            </>
                        )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;