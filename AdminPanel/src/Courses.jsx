import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './Courses.css';
import NavigationBar from "./CustomNavbar";
import axios from "axios";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:4000/courses");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      <NavigationBar />
      <Container className="mt-4">
        <h2 className="text-center mb-4">Available Courses</h2>
        <Row className="g-4">
          {courses.map((course, index) => (
            <Col key={index} md={6}>
              <Card>
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
