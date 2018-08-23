const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/upcoming', rejectUnauthenticated, (req, res) => {
  // GET request for upcoming events
  const queryText = `SELECT * FROM "event"
  WHERE ("date" >= CURRENT_DATE);`;

  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    })
});

router.get('/past', rejectUnauthenticated, (req, res) => {
  // GET request for past events
  const queryText = `SELECT * FROM "event"
  WHERE ("date" < CURRENT_DATE);`;

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
  // POST request with new volunteer event
  const newEventData = req.body.payload
  console.log(req.body.payload, 'new event payload')

  const queryText = `INSERT INTO "event" ("name", "address", "city", "state", "zipcode", "coordinator", "date", "start_time", "end_time", "description", "num_of_volunteers", "image_url","roles","org_id") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9 ,$10, $11, $12, $13, 1);`;

  const serializedData = [newEventData.name, newEventData.address, newEventData.city, newEventData.state, newEventData.zipcode, newEventData.coordinator, newEventData.date,newEventData.start_time, newEventData.end_time, newEventData.description, newEventData.num_of_volunteers, newEventData.image_url, newEventData.roles]

  pool.query(queryText, serializedData)
    .then((results) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      res.sendStatus(500);
    })
});

module.exports = router;