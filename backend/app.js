const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');

const app = express();

const route = require('./routes/route');

// Port Number
const port = 3000;

// Connect to database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database '+config.database)
});

// On Connection error
mongoose.connection.on('error', (err) => {
    console.log('Database connection error:'+err);
});

// CORS Middleware
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', route);

// Set static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid endpoint');
})

//Start Server
app.listen(port, () => {
    console.log('Server started on port '+port);
});

