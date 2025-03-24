import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Signin.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 
function Login() {

    let date = new Date().getFullYear();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/login', { email, password });
            console.log('Registration successful:', response.data);
            navigate('/home');
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };



    return (
        <>
                    <h4 style={{fontWeight:"bold",letterSpacing:"2px",textAlign:"center",marginTop:"3rem"}}>Welcome to CONNECTOR</h4>
        <div className="container" style={{margin:"3rem auto",border:"3px solid white",padding:"1%",maxWidth:"500px"}}>

            <form style={{height:"500px"}} onSubmit={handleSubmit}>
                <h1 style={{marginTop:"20px",color:"white"}}>Login</h1>
                <div className="ui form" style={{marginTop:"30px"}}>
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
                    <div style={{marginTop:"30px"}} className="field">
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
                    <button type='submit' style={{margin:"50px auto",maxWidth:"300px",alignItems:"center"}} className="fluid ui button blue">Submit</button> 
                </div>

            </form>
        </div>
             
        </>
    )
}

export default Login