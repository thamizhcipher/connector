import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Form, Button, Table } from "react-bootstrap";
import './AdminCourses.css'
import NavigationBar from "./CustomNavbar";
const AdminCourses = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    name: "",
    description: "",
    link: "",
  });

  // Fetch existing courses from the backend
  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:4000/courses");
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/add_course", newCourse);
      setNewCourse({ name: "", description: "", link: "" });
      fetchCourses(); // Refresh the list
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  return (
    <>
        <NavigationBar />
    
    <Container>
    
      <h2 className="mt-4" style={{textAlign:'center',marginBottom:'1.5rem'}}>Admin: Manage Courses</h2>

      <Container className="form-container" >
      <Form onSubmit={handleSubmit} className="mt-3">
        <Form.Group>
          <Form.Label>Course Name</Form.Label>
          <Form.Control
            type="text"
            value={newCourse.name}
            onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={newCourse.description}
            onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Course Link</Form.Label>
          <Form.Control
            type="text"
            value={newCourse.link}
            onChange={(e) => setNewCourse({ ...newCourse, link: e.target.value })}
            required
          />
        </Form.Group>

        <Button variant="success" type="submit" className="mt-3 course-btn">
          Add Course
        </Button>
      </Form>
      </Container>

      <h3 className="mt-4">Existing Courses</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.name}</td>
              <td>{course.description}</td>
              <td>
                <a href={course.link} target="_blank" rel="noopener noreferrer">
                  View Course
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

export default AdminCourses;
