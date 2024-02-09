const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // Middleware to parse form data

// Serve your HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle search form submission
app.get('/search', (req, res) => {
    const query = req.query.query; // Get the search query from the request

    // Perform search logic here (replace with your actual search implementation)
    const searchResults = performSearch(query);

    // Render search results or display them in the console for now
    console.log('Search Results:', searchResults);
    res.send('Search Results: ' + JSON.stringify(searchResults));
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

// Function to perform the search (replace with your actual search implementation)
function performSearch(query) {
    // Replace this with your search logic (e.g., querying a database)
    // For simplicity, this example returns a dummy array
    return ['Result 1', 'Result 2', 'Result 3'];
}
