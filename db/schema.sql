-- Drop if exists

DROP DATABASE IF EXISTS tankmates_app;

CREATE DATABASE tankmates_app;

\c tankmates_app;

CREATE TABLE species (
    id SERIAL PRIMARY KEY,
    species_name TEXT,
    scientific_name TEXT,
    origin_id INT REFERENCES origin(id),
    pic TEXT,
    species_type TEXT,
    min_temp INT,
    max_temp INT,
    min_ph DECIMAL,
    max_ph DECIMAL,
    temperament TEXT,
    max_length DECIMAL
);


DROP TABLE IF EXISTS origin;

CREATE TABLE origin (
    id SERIAL PRIMARY KEY,
    origin_name TEXT
);
