import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './Courses.css'
import NavigationBar from "./CustomNavbar";

const coursesData = [
  { name: "React Basics", description: "Learn React fundamentals.", link: "https://www.coursera.org/learn/react-basics" },
  { name: "Node.js Essentials", description: "Backend with Node.js.", link: "https://www.coursera.org/learn/developing-backend-apps-with-nodejs-and-express" },
  { name: "MongoDB Guide", description: "NoSQL database management.", link: "https://www.coursera.org/learn/introduction-to-mongodb" },
  { name: "Python for AI", description: "Python programming for AI.", link: "https://www.coursera.org/learn/python-for-applied-data-science-ai" },
  { name: "Cybersecurity 101", description: "Cybersecurity basics.", link: "https://www.coursera.org/professional-certificates/google-cybersecurity" },
  { name: "Data Science", description: "Data analysis & visualization.", link: "https://www.coursera.org/learn/what-is-datascience" },
];

const Courses = () => {
  return (
    <>
    <NavigationBar />
    <Container className="mt-4">
      <h2 className="text-center mb-4">Available Courses</h2>
      <Row className="g-4">
        {coursesData.map((course, index) => (
          <Col key={index} md={6}>
            <Card >
              <Card.Body className="course-card">
                <Card.Title>{course.name}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
                <Button variant="primary" href={course.link} target="_blank">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
};

export default Courses;
