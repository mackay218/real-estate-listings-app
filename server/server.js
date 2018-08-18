//variables
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const listingRouter = require('./routes/listingRoutes.router.js');

//set up body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//set up routes
app.use('/listings', listingRouter);

//static files
app.use(express.static('server/public'));

// Start the server
app.listen(PORT, () => {
    console.log('Server running on port', PORT);
});
