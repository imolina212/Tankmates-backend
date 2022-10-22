-- Drop if exists

DROP DATABASE IF EXISTS tankmates_app;

CREATE DATABASE tankmates_app;

\c tankmates_app;

CREATE TABLE origin (
    id SERIAL PRIMARY KEY,
    origin_name TEXT
);

DROP TABLE IF EXISTS species;

CREATE TABLE species (
    id SERIAL PRIMARY KEY,
    species_name TEXT,
    scientific_name TEXT,
    origin_id INT REFERENCES origin(id) ON DELETE CASCADE,
    pic TEXT,
    species_type TEXT,
    min_temp INT,
    max_temp INT,
    min_ph DECIMAL,
    max_ph DECIMAL,
    temperament TEXT,
    max_length DECIMAL
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    product_name TEXT,
    brand TEXT,
    pic TEXT,
    rating DECIMAL,
    price INT,
    in_stock boolean,
    product_description TEXT
);



