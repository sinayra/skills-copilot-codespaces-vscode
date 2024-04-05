// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import comments.json
const comments = require('./comments.json');

// Create GET endpoint
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}`));

// Path: index.js
// Import axios
const axios = require('axios');

// Make a GET request to the comments endpoint
axios.get('http://localhost:3000/comments')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });