const axios = require('axios');

const TARGET = 'http://localhost:8080/api';  // Endpoint through Nginx
const CONCURRENT_REQUESTS = 50;
const TOTAL_REQUESTS = 200;

let completed = 0;

function makeRequest(i) {
    axios.get(TARGET)
        .then(response => {
            console.log(`[${i}] ✅ ${response.data.message}`);
        })
        .catch(error => {
            console.error(`[${i}] ❌ Error:`, error.message);
        })
        .finally(() => {
            completed++;
            if (completed === TOTAL_REQUESTS) {
                console.log("🎉 Load test complete");
            }
        });
}

for (let i = 0; i < TOTAL_REQUESTS; i++) {
    setTimeout(() => {
        makeRequest(i + 1);
    }, Math.floor(i / CONCURRENT_REQUESTS) * 100);  // Add small delay in batches
}