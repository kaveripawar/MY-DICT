const apiKey = 'YOUR_API_KEY';

function searchWord() {
    const wordInput = document.getElementById('wordInput').value;

    if (!wordInput) {
        alert('Please enter a word.');
        return;
    }

    const apiUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${wordInput}?key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('result');

            if (Array.isArray(data)) {
                const meanings = data.map(meaning => `<p>${meaning}</p>`).join('');
                resultDiv.innerHTML = meanings;
            } else {
                resultDiv.innerHTML = '<p>No results found.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
