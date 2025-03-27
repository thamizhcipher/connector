import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Form, Button, Table, Alert } from "react-bootstrap";
import NavigationBar from "./CustomNavbar";


const StudentQP = () => {
  const [subject, setSubject] = useState("");
  const [year, setYear] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [years, setYears] = useState([]);
  const [questionPapers, setQuestionPapers] = useState([]);
  const [error, setError] = useState("");
  const [qpLink, setQpLink] = useState("");
    const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch available subjects and years from the server
    axios.get("http://localhost:4000/subjects-years")
      .then(response => {
        setSubjects(response.data.subjects);
        setYears(response.data.years);
      })
      .catch(error => {
        console.error("Error fetching subjects and years:", error);
      });
  }, []);

  const handleSearch = async () => {
    if (!subject || !year) {
      setError("Please select a subject and a year.");
      return;
    }
    setError("");

    try {
    const response = await axios.get(`http://localhost:4000/fetchQP?subject=${subject}&year=${year}`);
    console.log(response.data);
    
        setQpLink(response.data.filePath);
        
        setMessage("");
      setQuestionPapers(response.data);
      console.log(questionPapers);
    } catch (error) {
        setQpLink("");
        setMessage("No Question Paper found.");
    }
  };

  return (
    <>
      <NavigationBar />
      <Container className="mt-4">
        <h2 className="text-center mb-4">Download Question Papers</h2>

        {/* Error Message */}
        {error && <Alert variant="danger">{error}</Alert>}

        {/* Form to Select Subject & Year */}
        <Form className="mb-4" style={{width:"50%",margin:"2rem auto",border:"3px solid silver",padding:"5%"}}>
          <Form.Group className="mb-3">
            <Form.Label>Select Subject</Form.Label>
            <Form.Select value={subject} onChange={(e) => setSubject(e.target.value)}>
              <option value="">-- Select Subject --</option>
              {subjects.map((subj, index) => (
                <option key={index} value={subj}>{subj}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Select Year</Form.Label>
            <Form.Select value={year} onChange={(e) => setYear((e.target.value))}>
              <option value="">-- Select Year --</option>
              {years.map((yr, index) => (
                <option key={index} value={yr}>{yr}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Button variant="primary" style={{width:"35%"}} onClick={handleSearch}>Search</Button>
        </Form>
              
        {qpLink ? (
                <div style={{margin:"1rem auto",textAlign:"center"}}>
                    <a href={`http://localhost:4000${qpLink}`} download>Download Question Paper</a>
                </div>
            ) : (
                <p>{message}</p>
            )}

      </Container>
    </>
  );
};

export default StudentQP;
