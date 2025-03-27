import React, { useState }  from 'react'
import { Link } from 'react-router-dom'
import './Signin.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import NavigationBar from './CustomNavbar';
import { Button } from 'react-bootstrap';
function Signin() {

    let date = new Date().getFullYear();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student');


    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/register', { firstName,lastName,phoneNumber, email, password });
            console.log('Registration successful:', response.data);
            
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <>
            <NavigationBar />
        
        <div className="container-signin">
            <form onSubmit={handleSubmit}>
                <div className="ui form">
                    <div className="field">
                        <label>First Name</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="First Name"
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="field">
                        <label>last Name</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="last Name"
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="field">
                        <label>Phone Number</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Phone Number"
                            onChange={(e) => {
                                setPhoneNumber(e.target.value);
                            }}
                        />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                    <div className="field">
                        <label>Role</label>
                        <select style={{width:"50%"}}
                            name="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="">Select Role</option> 
                            <option value="admin">Admin</option>
                            <option value="student">Student</option>
                        </select>
                     </div>
                     <Button variant="success" type="submit" style={{width:"35%"}} className="mt-3 course-btn">
                       Submit
                    </Button>
                </div>
            </form>
           
        </div>
        </>
    )
}

export default Signin