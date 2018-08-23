
-- Test
CREATE TABLE "organization"
(
    id SERIAL PRIMARY KEY,
    name VARCHAR (100) NOT NULL,
    email VARCHAR (100) NOT NULL,
    website VARCHAR (100),
    address VARCHAR (100),
    city VARCHAR (50),
    state VARCHAR (50),
    zipcode VARCHAR (50)
);

CREATE TABLE "event"
(
    id SERIAL PRIMARY KEY,
    org_id INT REFERENCES "organization",
    name VARCHAR (100) NOT NULL,
    description VARCHAR (500) NOT NULL,
    date DATE,
    start_time VARCHAR (200) NOT NULL,
    end_time VARCHAR (200) NOT NULL,
    address VARCHAR (200),
    city VARCHAR (50),
    state VARCHAR (50),
    zipcode VARCHAR (50),
    coordinator VARCHAR (1000),
    image_url VARCHAR (250),
    roles VARCHAR(1000),
    num_of_volunteers VARCHAR(1000)
);

CREATE TABLE "person"
(
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL,
    email VARCHAR (100),
    first_name VARCHAR (100),
    middle_name VARCHAR (100),
    last_name VARCHAR (100),
    primary_phone VARCHAR (50),
    address VARCHAR (100),
    city VARCHAR (50),
    state VARCHAR (50),
    zipcode VARCHAR (50),
    admin_access BOOLEAN DEFAULT FALSE,
    event_id INT REFERENCES "event",
    org_id INT REFERENCES "organization"
);

CREATE TABLE "shifts"
(
    id SERIAL PRIMARY KEY,
    event_id INT REFERENCES "event",
    volunteer_id INT REFERENCES "person",
    start_time VARCHAR (200) NOT NULL,
    end_time VARCHAR (200) NOT NULL,
    total_hours DECIMAL(5,2)
);

-- Add organizations
INSERT INTO "organization"
    ("name","email","website","address","city","state","zipcode")
VALUES
    ('Asian American Organizing Project', 'info@aaopmn.org', 'www.aaopmn.org', '1537 Glenwood Avenue', 'Minneapolis', 'MN', '55405');

INSERT INTO "organization"
    ("name","email","website","address","city","state","zipcode")
VALUES
    ('Children''s Hospital Association', 'infocha@childrensmn.org', 'www.cha-stpaul.org', '175 W Kellog Blvd.', 'St. Paul', 'MN', '55102');

-- Add events
INSERT INTO "event"
    ("org_id", "name", "address", "city", "state", "zipcode", "coordinator", "date", "start_time", "end_time", "description", "roles", "image_url")

VALUES
    (1, 'Community Forum', '12345 Street', 'Saint Paul', 'MN', 'zipcode', 'Danny', '2018-08-19', NOW(), NOW() + interval
'2 hours','a volunteer event', 10, 'null');
