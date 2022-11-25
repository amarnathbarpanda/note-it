// getting all the neccessary modules
const express = require('express');
const notes = require('./data/notes');
const dotenv = require('dotenv');

// initialize express app
const app = express();
// to access the private data inside .env file
dotenv.config();

app.get('/', (req, res) =>{
    res.send("Api is running");
});

app.get('/api/notes', (req, res) =>{
    res.json(notes);
});

app.get('/api/notes/:id', (req, res) =>{
    const note  = notes.find(n => n._id === req.params.id);
    res.send(note);
})

const PORT = process.env.PORT || 8000; 
app.listen(PORT, console.log(`Server started on port ${PORT}`));