const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthorized } = require('../modules/authorization-middleware');


router.get('/', rejectUnauthenticated, rejectUnauthorized, (req, res) => {
  // GET request for all volunteers
  const queryText = `SELECT "person"."id", "person"."first_name","person"."middle_name", "person"."last_name","person"."email" as "person_email","person"."primary_phone","person"."address" as "person_address","person"."city" as "person_city","person"."state" as "person_state","person"."zipcode" as "person_zipcode", "event_id", "person"."org_id", "event"."name" as "event_name", "event"."start_time", "event"."end_time" FROM "person" LEFT OUTER JOIN "event" ON "person"."event_id" = "event"."id"
  WHERE "person"."admin_access" = false
  ORDER BY "event"."start_time"  ASC;`;

  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    })
});

router.get('/invite', rejectUnauthenticated, (req, res) => {
  // GET request for volunteers who have yet been assigned an event
  const queryText = `SELECT "person"."id", "person"."first_name","person"."middle_name", "person"."last_name","person"."email" as "person_email","person"."primary_phone","person"."address" as "person_address","person"."city" as "person_city","person"."state" as "person_state","person"."zipcode" as "person_zipcode", "event_id", "person"."org_id", "event"."name" as "event_name", "event"."start_time", "event"."end_time" FROM "person" LEFT OUTER JOIN "event" ON "person"."event_id" = "event"."id"
  WHERE "person"."admin_access" = FALSE AND "person"."event_id" IS NULL
  ORDER BY "person"."first_name"  ASC;`;

  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    })
});

router.put('/invite/:id', rejectUnauthenticated, (req, res) => {
  // PUT request to update event information
  const queryText = `UPDATE "person" SET "event_id" = $2
  WHERE "id" = $1;`;

  pool.query(queryText, [req.params.id, req.body.eventId])
  .then((result) => {
    res.sendStatus(201);
  })
  .catch((error) => {
    res.sendStatus(500);
  })
})

module.exports = router;