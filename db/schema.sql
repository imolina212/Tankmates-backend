-- Drop if exists

DROP DATABASE IF EXISTS tankmates_app;

CREATE DATABASE tankmates_app;

\c tankmates_app;

CREATE TABLE species (
    id SERIAL PRIMARY KEY,
    species_name TEXT,
    scientific_name TEXT,
    origin TEXT,
    pic TEXT
);