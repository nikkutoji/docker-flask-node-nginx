**🚀 Dockerized Flask + Node.js + NGINX (Load Balanced)**
This mini-project demonstrates a Flask backend, Node.js frontend, reverse-proxied and load-balanced via NGINX, all running in Docker containers. It also supports manual scaling and load testing with logging.

**🔧 Setup Instructions**

1. Clone the Repository : git clone https://github.com/yourusername/docker-flask-node-nginx.git

2. cd docker-flask-node-nginx

3. Start Services : docker-compose up --build -d

4. Test the Application
Visit:
	•	Frontend: http://localhost:8080
	•	API Endpoint: http://localhost:8080/api

⚙️ **Load Testing with loadtest.js**

1. Install Axios (If not already) : npm install axios
2. Run Load Test : node loadtest.js
     
✅ Load Test Behavior
	•	Sends 200 requests with 50 concurrent connections
	•	Logs success and failure responses
	•	Uses NGINX endpoint http://localhost:8080/api (load balanced to backend1/backend2)
