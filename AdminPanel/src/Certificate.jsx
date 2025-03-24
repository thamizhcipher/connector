import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import NavigationBar from "./CustomNavbar";
const Certificate = () => {
  const [formData, setFormData] = useState({
    certificateDetails: "",
    name: "",
    date: "",
    place: "",
    file: null,
  });

  const [error, setError] = useState("");

  
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setError("Please select a file.");
      return;
    }

    const allowedFormats = ["application/pdf", "image/jpeg", "image/png"];
    if (!allowedFormats.includes(file.type)) {
      setError("Only PDF, JPG, and PNG files are allowed.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("File size must be within 5MB.");
      return;
    }

    setFormData({ ...formData, file });
    setError(""); 
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.file) {
      setError("Please attach a valid file before submitting.");
      return;
    }

    console.log("Form Submitted:", formData);
    alert("Certificate details submitted successfully!");

    // Reset form
    setFormData({
      certificateDetails: "",
      name: "",
      date: "",
      place: "",
      file: null,
    });
  };

  return (
    <>
      <NavigationBar />
    
    <Container className="mt-4">
      <h2 className="text-center" style={{marginBottom:"2rem"}}>Upload Certificate</h2>
      <Form onSubmit={handleSubmit} className="shadow p-4 bg-light rounded">
     
        <Form.Group className="mb-3">
          <Form.Label style={{textAlign:"center",fontWeight:"bold",marginBottom:".95rem"}}>Certificate Details</Form.Label>
          <Form.Control
            type="text"
            placeholder=" Brief about the event"
            value={formData.certificateDetails}
            onChange={(e) =>
              setFormData({ ...formData, certificateDetails: e.target.value })
            }
            required
          />
        </Form.Group>


        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
          />
        </Form.Group>


        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            value={formData.date}
            onChange={(e) =>
              setFormData({ ...formData, date: e.target.value })
            }
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Place</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter place"
            value={formData.place}
            onChange={(e) =>
              setFormData({ ...formData, place: e.target.value })
            }
            required
          />
        </Form.Group>


        <Form.Group className="mb-3">
          <Form.Label>Attach Certificate (PDF or Image, Max 5MB)</Form.Label>
          <Form.Control type="file" accept=".pdf, .jpg, .jpeg, .png" onChange={handleFileChange} />
        </Form.Group>

    
        {error && <Alert variant="danger">{error}</Alert>}

   
        <Button variant="primary" type="submit" style={{maxWidth:"5rem",alignItems:"center"}}>
          Submit
        </Button>
      </Form>
    </Container>
    </>
  );
};

export default Certificate;
