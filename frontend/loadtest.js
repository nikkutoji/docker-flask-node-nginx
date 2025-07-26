const axios = require('axios');

const TARGET = 'http://localhost:8080/api';  // through NGINX
const CONCURRENT_REQUESTS = 100;
const TOTAL_REQUESTS = 2000;

let completed = 0;

function makeRequest(i) {
    axios.get(TARGET)
        .then(response => {
            const timestamp = new Date().toISOString();
            console.log(`[${i}] ✅ ${timestamp} - ${response.data.message}`);
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
    }, Math.floor(i / CONCURRENT_REQUESTS) * 100);  // batching by 100
}