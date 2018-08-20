const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT * FROM "event";`;

  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    })
});

router.post('/', rejectUnauthenticated, (req, res) => {
  const newEventData = req.body

  const queryText = `INSERT INTO "event" ("name", "address", "city", "state", "zipcode", "coordinator", "date", "start_time", "end_time", "description", "roles", "image_url") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9 ,$10, $11, $12);`;

  const serializedData = [newEventData.name, newEventData.address, newEventData.city, newEventData.state, newEventData.zipcode, newEventData.coordinator, newEventData.date, newEventData.start_time, newEventData.end_time, newEventData.description, newEventData.roles, 'null']

  pool.query(queryText, serializedData)
  .then((results) => {
    res.sendStatus(201);
  })
  .catch((error) => {
    res.sendStatus(500);
  })
})

// router.put('/:id', rejectUnauthenticated, (req, res) => {
//   const newUserData = req.body

//   const queryText = `UPDATE "person" SET "email" = $2, "first_name" = $3, "middle_name" = $4, "last_name" = $5, "primary_phone" = $6, "address" = $7, "city" = $8, "state" = $9, "zipcode" = $10
//   WHERE "id" = $1;`;

//   const serializedData = [req.user.id, newUserData.email, newUserData.first_name, newUserData.middle_name, newUserData.last_name, newUserData.primary_phone, newUserData.address, newUserData.city, newUserData.state, newUserData.zipcode];

//   pool.query(queryText, serializedData)
//     .then((result) => {
//       res.sendStatus(201);
//     })
//     .catch((error) => {
//       console.log(error);
//       res.sendStatus(500);
//     })
// });

module.exports = router;

// INSERT INTO "event" ("name", "address", "city", "state", "zipcode", "coordinator", "date", "start_time", "end_time", "description", "roles", "image_url") VALUES ('community forum', '12345 Street', 'Saint Paul', 'MN', 'zipcode', 'Danny', '2018-08-19', NOW(), NOW() + interval '2 hours','a volunteer event', 10, 'null');