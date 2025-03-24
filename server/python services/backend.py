from flask import Flask, request, jsonify
import google.generativeai as genai
from flask_cors import CORS
import os
from dotenv import load_dotenv
import markdown

app = Flask(__name__)  
CORS(app)

# Load API key from .env
load_dotenv()
API_KEY = os.getenv("API_KEY")  
if not API_KEY:
    raise ValueError("API_KEY not found. Make sure it's set in .env")  

# Configure Gemini API
genai.configure(api_key=API_KEY)
model = genai.GenerativeModel('gemini-1.5-flash')

def recommend_path(domain, duration):
    prompt = f"Provide a {duration} learning path for {domain}. Also include platforms and resources to learn it end to end.Provide it in the markdown format in a well strucutred manner for easy readability"
    response = model.generate_content(prompt)
    return markdown.markdown(response.text) if response else "No response from API"

@app.route('/generate-path', methods=['POST'])
def generate_path():
    data = request.json
    domain = data.get("domain")
    duration = data.get("duration")

    if not domain or not duration:
        return jsonify({"error": "Domain and Duration are required"}), 400

    result = recommend_path(domain, duration)
    return jsonify({"learning_path": result})

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)  
