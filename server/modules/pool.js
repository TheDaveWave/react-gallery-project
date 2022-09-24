const pg = require('pg');

// create a new pool config to connect to database.
const pool = new pg.Pool({
    database: 'react_gallery',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
});

pool.on('connect', () => {
    console.log('Connected to the database');
});

pool.on('error', () => {
    console.log('Error with database pool', error);
});

module.exports = pool;