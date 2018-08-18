const express = require('express');
const router = express.Router();

const pg = require('pg');
const Pool = pg.Pool;
const config = {
    database: 'real_estate',
    host: 'localhost',
    port: 5432,
    max: 10, // max number of concurrent connections
    idleTimeoutMillis: 10000 // attepmt to connect for 10 seconds
}

const pool = new Pool(config);

pool.on('connect', () => {
    console.log('postgresql connected');
});

pool.on('error', (error) => {
    console.log('Error connecting to db', error);
});

//GET
router.get('/', function(req, res){
    console.log('in get route');
    const queryText = 'SELECT * FROM "listings";';

    pool.query(queryText).then((results) => {
        console.log(results);
    }).catch((error) => {
        console.log('error in get route:', error);
        res.sendStatus(500);
    });
}); //end get route

module.exports = router;