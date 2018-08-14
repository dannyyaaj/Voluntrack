const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  console.log(req.user)
  if (req.isAuthenticated()) {
    const queryText = `SELECT * FROM "person"
    WHERE "id" = 3;`;
    pool.query(queryText)
      .then((result) => {
        res.send(result.rows);
      }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;