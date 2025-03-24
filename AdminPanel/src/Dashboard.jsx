import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill
} from 'react-icons/bs';
import {
  BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer,LineChart,Line} from 'recharts';
import NavigationBar from './CustomNavbar';
import './Dashboard.css'
function Dashboard() {
  const currentYear = new Date().getFullYear();
  const typedTextRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to the Admin Portal",
        "Manage Courses",
        "Track Progress"
      ],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    };

    const typed = new Typed(typedTextRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  // Data for the bar chart (course-wise performance)
  const examData = [
    { course: 'Mathematics', score: 85, attendance: 90 },
    { course: 'Physics', score: 78, attendance: 85 },
    { course: 'Chemistry', score: 92, attendance: 95 },
    { course: 'Computer Science', score: 88, attendance: 93 },
    { course: 'English', score: 80, attendance: 88 },
    { course: 'Economics', score: 75, attendance: 80 },
    { course: 'History', score: 82, attendance: 87 },
  ];

  // Data for the line chart (monthly average score trend)
  const progressData = [
    { month: 'January', average: 78 },
    { month: 'February', average: 80 },
    { month: 'March', average: 82 },
    { month: 'April', average: 85 },
    { month: 'May', average: 87 },
    { month: 'June', average: 90 },
    { month: 'July', average: 88 },
    { month: 'August', average: 91 },
    { month: 'September', average: 89 },
    { month: 'October', average: 92 },
    { month: 'November', average: 93 },
    { month: 'December', average: 95 },
  ];

  return (
    <>
    <NavigationBar />
    <main className="main-container">
      <div className="main-title">
        <h5 style={{marginTop:"2rem",textAlign:"center"}}>
          ADMIN DASHBOARD{" "}
          <span style={{ marginInlineStart: "20px",color:"yellow",textAlign:"center" }} ref={typedTextRef}></span>
        </h5>
      </div>

      <div className="main-cards">
        <div className="dashboard-card">
          <div className="card-inner">
            <h5>COURSES</h5>
            <BsFillArchiveFill className="card-icon" />
          </div>
          <span><h6>6</h6></span>
        </div>
        <div className="dashboard-card">
          <div className="card-inner">
            <h5>UPCOMING EXAMS</h5>
            <BsFillGrid3X3GapFill className="card-icon" />
          </div>
          <h6>3</h6>
        </div>
        <div className="dashboard-card">
          <div className="card-inner">
            <h5>ASSIGNMENTS</h5>
            <BsPeopleFill className="card-icon" />
          </div>
          <h6>5</h6>
        </div>
        <div className="dashboard-card">
          <div className="card-inner">
            <h5>Events</h5>
            <BsFillBellFill className="card-icon" />
          </div>
          <h6>7</h6>
        </div>
      </div>

      <div className="charts">
        <h4 style={{fontWeight:"bold",color:"violet",textAlign:"center",marginTop:"1.5rem"}}>Academic Report Card</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={examData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="course" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="score" fill="#8884d8" name="Avg Score" />
            <Bar dataKey="attendance" fill="#82ca9d" name="Attendance (%)" />
          </BarChart>
        </ResponsiveContainer>
            
        <h4 style={{fontWeight:"bold",color:"violet",textAlign:"center",marginTop:"1.5rem"}}>Overall Report</h4>    
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={progressData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="average"
              stroke="#8884d8"
              name="Average Score"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

          </main>
          </>
  );
 
}

export default Dashboard;



