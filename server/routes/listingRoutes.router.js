const express = require('express');
const router = express.Router();

const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo';
const Pool = pg.Pool;
const config = {
    database: 'real_estate',
    host: 'localhost',
    port: 5432,
    max: 10, // max number of concurrent connections
    idleTimeoutMillis: 10000 // attempt to connect for 10 seconds
};

console.log('in router');

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
        //console.log(results);
        res.send(results.rows);
    }).catch((error) => {
        console.log('error in get route:', error);
        res.sendStatus(500);
    });
}); //end get route

//POST
router.post('/', function(req, res){
    console.log('in post route');

    const queryText = `INSERT INTO "listings" ("cost", "sqft", "type", "city", "image_path") 
                        VALUES ($1, $2, $3, $4 $5);`;
    pool.query(queryText, [] )                    
})

module.exports = router;

