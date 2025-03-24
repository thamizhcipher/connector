import { useState } from "react";
import axios from "axios";
import NavigationBar from "./CustomNavbar";
import './CourseRecommendation.css'

export default function CourseRecommendation() {
  const [domain, setDomain] = useState("");
  const [duration, setDuration] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setOutput("");

    try {
      const response = await axios.post("http://127.0.0.1:5000/generate-path", {
        domain,
        duration,
      });

      setOutput(response.data.learning_path);
    } catch (error) {
      setOutput("Error fetching data.");
    }
    
    setLoading(false);
  };

  return (
    <>
    <NavigationBar />
    <div className="recommend-container">
        <h3 className="font-bold mb-4 text-center">Learning Path Generator</h3>
        <form onSubmit={handleSubmit} className="recommend-form space-y-4">
          <input
            type="text"
            placeholder="Enter Domain (e.g., Web Development)"
            className="w-full p-2  mr-5 border rounded-lg"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter Duration (e.g., 6 months)"
            className="w-full p-2  mr-5 border rounded-lg"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
          <button
            type="submit"
            className="recommend-submit"
          >
            {loading ? "Generating..." : "Get Learning Path"}
          </button>
        </form>

          {output && (
            <div className="output-container">
              <h4>Generated Learning Path:</h4>
              <div
                className="output-text"
                dangerouslySetInnerHTML={{ __html: output }} 
              />
            </div>
        )}


      </div>
  
    </>
  );
}