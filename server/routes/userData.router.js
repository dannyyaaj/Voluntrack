const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
  // GET request for user information
  let queryText = `SELECT "first_name","middle_name", "last_name","email","primary_phone","address","city","state","zipcode", "event_id", "org_id" FROM "person"
  WHERE "id" = $1;`;

  pool.query(queryText, [req.user.id])
    .then((result) => {
      console.log(req.user.id)
      res.send(result.rows[0]);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    })
});

router.put('/:id', rejectUnauthenticated, (req, res) => {
  // PUT request to update user information
  const newUserData = req.body
  
  const queryText = `UPDATE "person" SET "email" = $2, "first_name" = $3, "middle_name" = $4, "last_name" = $5, "primary_phone" = $6, "address" = $7, "city" = $8, "state" = $9, "zipcode" = $10
  WHERE "id" = $1;`;

  const serializedData = [req.user.id, newUserData.email, newUserData.first_name, newUserData.middle_name, newUserData.last_name, newUserData.primary_phone, newUserData.address, newUserData.city, newUserData.state, newUserData.zipcode];

  pool.query(queryText, serializedData)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      res.sendStatus(500);
    })
});

module.exports = router;