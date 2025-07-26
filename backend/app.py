import logging
import socket
from flask import Flask, jsonify, request
import os

app = Flask(__name__)

# Ensure log directory exists
os.makedirs("/app/logs", exist_ok=True)

# Set up file-based logging
logging.basicConfig(
    filename='/app/logs/api_requests.log',
    level=logging.INFO,
    format='%(asctime)s - %(message)s'
)

@app.route('/api')
def api():
    container_id = socket.gethostname()
    client_ip = request.remote_addr
    log_msg = f"Request served by {container_id} for IP {client_ip}"
    app.logger.info(log_msg)
    return jsonify(message=f"Hello from {container_id}!")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)