const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
  // GET request for upcoming events
  const queryText = `SELECT "person"."id", "person"."first_name","person"."middle_name", "person"."last_name","person"."email" as "person_email","person"."primary_phone","person"."address" as "person_address","person"."city" as "person_city","person"."state" as "person_state","person"."zipcode" as "person_zipcode", "event_id", "person"."org_id", "event"."name" as "event_name", "event"."start_time", "event"."end_time" FROM "person" LEFT OUTER JOIN "event" ON "person"."event_id" = "event"."id"
WHERE "person"."admin_access" = false;`;

  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    })
});

// router.put('/upcoming/:id', rejectUnauthenticated, (req, res) => {
//   // PUT request to update event information
//   const newEventData = req.body
//   console.log(req, 'requesttttt')
//   console.log(req.params.id, 'id params')
//   console.log(req.body, 'req body')
//   const queryText = `UPDATE "event" SET "name" = $2, "address" = $3, "city" = $4, "state" = $5, "zipcode" = $6, "coordinator" = $7, "date" = $8, "start_time" = $9, "end_time" = $10, "description" = $11, "num_of_volunteers" = $12, "image_url" = $13, "roles" = $14
//   WHERE "id" = $1;`;

//   const serializedData = [req.params.id, newEventData.name, newEventData.address, newEventData.city, newEventData.state, newEventData.zipcode, newEventData.coordinator, newEventData.date, newEventData.start_time, newEventData.end_time, newEventData.description, newEventData.num_of_volunteers, newEventData.image_url, newEventData.roles];

//   pool.query(queryText, serializedData)
//     .then((result) => {
//       res.sendStatus(201);
//     })
//     .catch((error) => {
//       res.sendStatus(500);
//     })
// });

// router.get('/past', rejectUnauthenticated, (req, res) => {
//   // GET request for past events
//   const queryText = `SELECT * FROM "event"
//   WHERE ("date" < CURRENT_DATE);`;

//   pool.query(queryText)
//     .then((result) => {
//       res.send(result.rows);
//     })
//     .catch((error) => {
//       console.log(error);
//       res.sendStatus(500);
//     })
// });

// router.post('/', rejectUnauthenticated, (req, res) => {
//   // POST request with new volunteer event
//   const newEventData = req.body.payload
//   console.log(req.body.payload, 'new event payload')

//   const queryText = `INSERT INTO "event" ("name", "address", "city", "state", "zipcode", "coordinator", "date", "start_time", "end_time", "description", "num_of_volunteers", "image_url","roles","org_id") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9 ,$10, $11, $12, $13, 1);`;

//   const serializedData = [newEventData.name, newEventData.address, newEventData.city, newEventData.state, newEventData.zipcode, newEventData.coordinator, newEventData.date, newEventData.start_time, newEventData.end_time, newEventData.description, newEventData.num_of_volunteers, newEventData.image_url, newEventData.roles]

//   pool.query(queryText, serializedData)
//     .then((results) => {
//       res.sendStatus(201);
//     })
//     .catch((error) => {
//       res.sendStatus(500);
//     })
// });

// router.delete('/upcoming/:id', rejectUnauthenticated, (req, res) => {
//   let queryText = `DELETE FROM "event" WHERE "id" = $1;`;
//   pool.query(queryText, [req.params.id])
//     .then((results) => {
//       res.sendStatus(200);
//     })
//     .catch((error) => {
//       res.sendStatus(500);
//     })
// })

module.exports = router;