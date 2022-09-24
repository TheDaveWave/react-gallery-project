const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// PUT Route
router.put('/like/:id', (req, res) => {
    const id = req.params.id;
    console.log(`In PUT route /gallery/like/${id}`,req.params);
    const queryText = `UPDATE "gallery_items" SET "likes"="likes"+1 WHERE "id"=$1;`;
    
    pool.query(queryText, [id])
    .then(() => {
        console.log('Successful like');
        res.sendStatus(201);
    })
    .catch(err => {
        console.log('Error in liking item with id', id, err);
        res.sendStatus(500);
    });
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    console.log('In GET route /gallery');
    const queryText = `SELECT * FROM "gallery_items" ORDER BY "id";`;

    pool.query(queryText)
    .then(response => {
        res.send(response.rows);
    })
    .catch(err => {
        console.log('Error in getting gallery items', err);
        res.sendStatus(500);
    });
    // res.send(galleryItems);
}); // END GET Route

module.exports = router;