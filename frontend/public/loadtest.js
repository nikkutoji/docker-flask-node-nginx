async function hitApi() {
    const loader = document.getElementById('loader');
    const responseDiv = document.getElementById('response');

    loader.classList.remove('hidden');
    responseDiv.textContent = '';

    try {
        const res = await fetch('/api');
        const data = await res.json();

        // Display the container that served the response
        responseDiv.textContent = `✅ Response: ${data.message}`;
    } catch (error) {
        responseDiv.textContent = '❌ Error hitting API';
        console.error('Frontend error:', error);
    } finally {
        loader.classList.add('hidden');
    }
}