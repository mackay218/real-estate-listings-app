const express = require('express');
const router = express.Router();



console.log('in router');

const pool = require('../modules/pool.js');

pool.on('connect', () => {
    console.log('postgresql connected');
});

pool.on('error', (error) => {
    console.log('Error connecting to db', error);
});

//GET
/* get all listings */
router.get('/', (req, res) =>{
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

/* get lowest rent */
router.get('/rent/lowest', (req, res) =>{
    console.log('in get lowest rent');
    const queryText = `SELECT * FROM "listings" WHERE "type"='rent' ORDER BY "cost" ASC LIMIT 1;`;

    pool.query(queryText).then((results) => {
        res.send(results.rows);
    }).catch((error) => {
        console.log('error in rent lowest route:', error);
    });
});

/*get lowest sale */
router.get('/sale/lowest', (req, res) => {

    console.log('in get lowest sale');
    const queryText = `SELECT * FROM "listings" WHERE "type"='sale' ORDER BY "cost" ASC LIMIT 1;`;

    pool.query(queryText).then((results) => {
        res.send(results.rows);
    }).catch((error) => {
        console.log('error in sale lowest route:', error);
    });
});

//POST
router.post('/', (req, res) => {
    console.log('in post route');
    const listingToAdd = req.body;
    console.log(listingToAdd);

    const queryText = `INSERT INTO "listings" ("cost", "sqft", "type", "city", "image_path", "confirm") 
                        VALUES ($1, $2, $3, $4, $5, $6);`;
    pool.query(queryText, [listingToAdd.cost, listingToAdd.sqft, 
                           listingToAdd.type.type, listingToAdd.city, 
                           listingToAdd.image_path.type, true]).then(() => {
                               res.sendStatus(201);
                           }).catch((error) => {
                                console.log('error in post:', error);
                                res.sendStatus(500);
                           });                    
});//end post route

/* search database */
router.post('/search', (req, res) => {
    console.log('in search');

    const searchTerm = '%' + req.body.term + '%';

    console.log('searchTerm:', searchTerm);
    const queryText = `SELECT * 
                        FROM "listings" 
                        WHERE city ILIKE $1 OR
                        sqft ILIKE $1 OR
                        cost ILIKE $1;`;
    //console.log(searchTerms.type.type);
    pool.query(queryText, [searchTerm]).then((results) => {
        console.log(results.rows);
        res.send(results.rows);
    }).catch((error) => {
        res.sendStatus(500);
        console.log('error in search:', error);
    });
});


router.put('/', (req, res) =>{
    const toUpdate = req.body;
    console.log(toUpdate);

    const queryText = `UPDATE "listings" SET "confirm"=$1 WHERE "id"=$2;`;

    pool.query(queryText, [toUpdate.houseConfirm, toUpdate.houseId]).then(() =>{
        res.sendStatus(201);
    }).catch((error) => {
        console.log('error in update:', error);
        res.sendStatus(500);
    });
});//end put route

router.delete('/:id', (req, res) =>{
    console.log('in delete route:', req.params.id);

    let listingToDelete = req.params.id;

    const queryText = `DELETE FROM "listings" WHERE "id"= $1;`;

    pool.query(queryText, [listingToDelete]).then(() => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('error in delete:', error);
        res.sendStatus(500);
    });

});//end delete route

module.exports = router;

