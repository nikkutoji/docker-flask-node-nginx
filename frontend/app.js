const btn = document.getElementById('hitApi');
const responseText = document.getElementById('responseText');

btn.addEventListener('click', async () => {
    try {
        const res = await fetch('/api');
        const data = await res.json();
        responseText.textContent = data.message;  // 👈 This line shows the backend container ID
    } catch (err) {
        responseText.textContent = 'Error hitting API';
        console.error(err);
    }
});