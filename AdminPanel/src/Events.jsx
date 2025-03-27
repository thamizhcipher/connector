import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import NavigationBar from "./CustomNavbar";
import axios from "axios";
import './Courses.css';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:4000/events");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <NavigationBar />
      <Container className="mt-4">
        <h2 className="text-center mb-4">Upcoming Events</h2>
        <Row className="g-4">
          {events.map((event, index) => (
            <Col key={index} md={6}>
              <Card className="course-card">
                <Card.Body>
                  <Card.Title>{event.name}</Card.Title>
                  <Card.Text>{event.description}</Card.Text>
                  <Card.Subtitle className="mb-3 text-muted">{event.date}</Card.Subtitle>
                  <Button variant="primary" href={event.link} target="_blank">
                    Enroll Now
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

export default Events;
