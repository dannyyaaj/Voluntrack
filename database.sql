
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
INSERT INTO "public"."event"("org_id","name","description","date","start_time","end_time","address","city","state","zipcode","coordinator","image_url","roles","num_of_volunteers")

VALUES
(1,E'Community Forum',E'a volunteer event',E'2018-08-29',E'2018-08-24T15:00:16.473Z',E'2018-08-25T05:00:00.000Z',E'12345 Street',E'Saint Paul',E'MN',E'55555',E'Danny',E'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY56ENLGC-izDKBs0lniMvq6UL8QN6uAcQIgQ4J6uGAHy16xZWYw',E'10',E'5'),

(1,E'MN State Fair',E'The Minnesota State Fair is the state fair of the U.S. state of Minnesota. Its slogan is "The Great Minnesota Get-Together." It is the largest state fair in the United States by average daily attendance.',E'2018-09-02',E'2018-08-23T17:00:45.919Z',E'2018-08-23T20:00:09.116Z',E'1265 Snelling Ave N',E'Saint Paul',E'MN',E'55108',E'',E'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLSXHcf4fI6HUpusxi39UoIco7uKj8yETUZTNhMmFVPp4T_vh2BQ',E'',E'7'),

(1,E'Past Volunteer Event',E'A Description!',E'2018-08-19',E'2018-08-22T20:00:15.486Z',E'2018-08-23T02:00:15.486Z',E'',E'',E'',E'',E'',E'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd77v32OtDpep8YTpa-TJa0U3vMkFz7xbCRGwq48oN4Z-rueZIjA',E'',E'');
