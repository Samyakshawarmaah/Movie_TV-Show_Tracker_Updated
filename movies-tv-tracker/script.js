const API_KEY = '9cc10a07';
const SERVER_URL = 'http://localhost:3000/api/watched';

const addForm = document.getElementById('addForm');
const watchedList = document.getElementById('watchedList');

// Load data from server
document.addEventListener('DOMContentLoaded', () => {
    fetch(SERVER_URL)
        .then(response => response.json())
        .then(data => data.forEach(item => addCard(item, false)))
        .catch(error => console.error('Error loading data:', error));
});

// Form submission
addForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('title').value.trim();
    const type = document.getElementById('type').value;

    if (title) {
        fetchDetails(title, type);
        document.getElementById('title').value = '';
    }
});

// Fetch details
function fetchDetails(title, type) {
    fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&type=${type}&apikey=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            if (data.Response === 'True') {
                const item = {
                    Title: data.Title,
                    Year: data.Year,
                    Type: data.Type,
                    Poster: data.Poster !== 'N/A' ? data.Poster : 'https://via.placeholder.com/200',
                    imdbID: data.imdbID,
                };
                addCard(item);
                saveToServer(item);
            } else {
                alert('Title not found. Please try again.');
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Add card
function addCard(data, saveToServer = true) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <img src="${data.Poster}" alt="${data.Title}">
    <h3>${data.Title}</h3>
    <p>${data.Year} - ${data.Type}</p>
    <button onclick="removeCard(this, '${data.imdbID}')">Remove</button>
  `;
    watchedList.appendChild(card);
}

// Save to server
function saveToServer(data) {
    fetch(SERVER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    }).catch(error => console.error('Error saving to server:', error));
}

// Remove card
function removeCard(button, id) {
    button.parentElement.remove();
    fetch(`${SERVER_URL}/${id}`, { method: 'DELETE' })
        .catch(error => console.error('Error removing from server:', error));
}
