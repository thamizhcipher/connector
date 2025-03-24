import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import NavigationBar from "./CustomNavbar";
import './Courses.css'

const eventsData = [
  { name: "AI Workshop", description: "Learn AI & ML basics.", date: "March 10, 2025", link: "https://forms.gle/439Q6E6MNtcF2nB87" },
  { name: "Cybersecurity Webinar", description: "Understand cybersecurity threats.", date: "April 5, 2025", link: "https://forms.gle/439Q6E6MNtcF2nB87" },
  { name: "React Bootcamp", description: "Master React.js in 2 days.", date: "April 20, 2025", link: "https://forms.gle/439Q6E6MNtcF2nB87" },
  { name: "Hackathon 2025", description: "Compete in a 24-hour coding event.", date: "May 15, 2025", link: "https://forms.gle/439Q6E6MNtcF2nB87" },
  { name: "Data Science Summit", description: "Explore trends in data science.", date: "June 1, 2025", link: "https://forms.gle/439Q6E6MNtcF2nB87" },
  { name: "Startup Pitch Fest", description: "Pitch your startup ideas.", date: "June 25, 2025", link: "https://forms.gle/439Q6E6MNtcF2nB87" },
];

const Events = () => {
  return (
    <>
    <NavigationBar />
    <Container className="mt-4">
      <h2 className="text-center mb-4">Upcoming Events</h2>
      <Row className="g-4">
        {eventsData.map((event, index) => (
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
