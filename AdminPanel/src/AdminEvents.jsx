import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Form, Button, Table } from "react-bootstrap";
import './AdminCourses.css'
import NavigationBar from "./CustomNavbar";

const AdminEvents = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    name: "",
    description: "",
    date: "",
    link: "",
  });

  // Fetch existing events from the backend
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:4000/events");
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/add_event", newEvent);
      setNewEvent({ name: "", description: "", date: "", link: "" });
      fetchEvents(); // Refresh the list
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  return (
    <>
        <NavigationBar />
    
    <Container >
      <h2 className="mt-4" style={{textAlign:'center',marginBottom:'1.5rem'}}>Admin: Manage Events</h2>
        <Container className="form-container" >
      <Form onSubmit={handleSubmit} className="mt-3">
        <Form.Group>
          <Form.Label>Event Name</Form.Label>
          <Form.Control
            type="text"
            value={newEvent.name}
            onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={newEvent.description}
            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Registration Link</Form.Label>
          <Form.Control
            type="text"
            value={newEvent.link}
            onChange={(e) => setNewEvent({ ...newEvent, link: e.target.value })}
            required
          />
        </Form.Group>

        <Button variant="success" type="submit" className="mt-3 course-btn">
          Add Event
        </Button>
      </Form>
      </Container>

      <h3 className="mt-4">Existing Events</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Date</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td>{event.name}</td>
              <td>{event.description}</td>
              <td>{event.date}</td>
              <td>
                <a href={event.link} target="_blank" rel="noopener noreferrer">
                  View Event
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
    </>
  );
};

export default AdminEvents;
