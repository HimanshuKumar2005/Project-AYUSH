const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const app = express();
const User = require('./models/User');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// MongoDB Connection (Update the connection string for MongoDB Atlas or local MongoDB)
mongoose.connect("mongodb+srv://project_ayush:project_ayush1@cluster0.kfb5z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    // No need for useNewUrlParser and useUnifiedTopology options
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log('MongoDB connection error:', err));


// Routes
app.use('/users', require('./routes/userRoutes'));

// Start server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
