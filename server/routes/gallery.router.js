const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');


// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
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
    })
    // res.send(galleryItems);
}); // END GET Route

module.exports = router;