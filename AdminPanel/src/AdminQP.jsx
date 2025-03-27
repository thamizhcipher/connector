import React, { useState } from "react";
import axios from "axios";
import NavigationBar from "./CustomNavbar";

const AdminQPUpload = () => {
    const [subject, setSubject] = useState("");
    const [year, setYear] = useState("");
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");

    const handleUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("subject", subject);
        formData.append("year", year);
        formData.append("file", file);

        try {
            const res = await axios.post("http://localhost:4000/uploadQP", formData);
            setMessage(res.data.message);
        } catch (err) {
            setMessage("Error uploading file.");
        }
    };

    return (
        <>
            <NavigationBar />
            <div style={{width:"50%",border:"3px solid silver",margin:"2rem auto",padding:"5%"}}>
                <h2 style={{textAlign:"center",marginBottom:"1.75rem"}}>Upload Question Paper</h2>
                <form onSubmit={handleUpload}>
                    <input style={{marginBottom:".75rem"}} type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} required /> <br />
                    <input style={{marginBottom:".75rem"}} type="number" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} required /> <br></br>
                    <input style={{marginBottom:".75rem"}} type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])} required /> <br />
                    <button style={{width:"35%"}} type="submit">Upload</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </>
    );
};

export default AdminQPUpload;
