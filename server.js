const express = require('express');
const PORT = 3000;
const path = require('path');
const app = express();

// Set the view engine to EJS
//app.set('', __dirname + '/');
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/publlic')));
//app.use(express.static('assets'));


// Define a route for the homepage
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });