CREATE TABLE "organization" (
    id SERIAL PRIMARY KEY,
    name VARCHAR (100) NOT NULL,
    email VARCHAR (100) NOT NULL,
    website VARCHAR (100),
    address VARCHAR (100),
    city VARCHAR (50),
    state VARCHAR (50),
    zipcode VARCHAR (50)
);

CREATE TABLE "event" (
    id SERIAL PRIMARY KEY,
    org_id INT REFERENCES "organization",
    name VARCHAR (100) NOT NULL,
	description VARCHAR (500) NOT NULL,
	date DATE,
	start_time TIMESTAMPTZ NOT NULL,
	end_time TIMESTAMPTZ NOT NULL,
    address VARCHAR (100),
    city VARCHAR (50),
    state VARCHAR (50),
    zipcode VARCHAR (50),
    coordinator VARCHAR (250) NOT NULL,
    image_url VARCHAR (250),
    roles VARCHAR(1000)
);

CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL,
    email VARCHAR (100) NOT NULL,
    first_name VARCHAR (100) NOT NULL,
    middle_name VARCHAR (100),
    last_name VARCHAR (100) NOT NULL,
    primary_phone VARCHAR (10),
    address VARCHAR (100),
    city VARCHAR (50),
    state VARCHAR (50),
    zipcode VARCHAR (50),
    admin_access BOOLEAN DEFAULT FALSE,
    event_id INT REFERENCES "event",
    org_id INT REFERENCES "organization"
);

CREATE TABLE "shifts" (
	id SERIAL PRIMARY KEY,
	event_id INT REFERENCES "event",
	volunteer_id INT REFERENCES "user",
	start_time TIMESTAMPTZ NOT NULL,
	end_time TIMESTAMPTZ NOT NULL,
	total_hours DECIMAL(5,2)
);
