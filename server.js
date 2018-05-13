//Require our framework and database
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');



// Require Routes
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB mLab
mongoose
	.connect(db)
	.then(() => console.log('MongoDB Connected'))
	.catch(err => console.log(err));


// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);



// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);


// Listen on port for changes
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port: ${port}`));

