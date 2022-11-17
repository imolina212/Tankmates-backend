-- Drop if exists

DROP DATABASE IF EXISTS tankmates_app;

CREATE DATABASE tankmates_app;

\c tankmates_app;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    firstname TEXT,
    lastname TEXT,
    email TEXT UNIQUE,
    user_password TEXT,
    pic TEXT
);

DROP TABLE IF EXISTS origin;

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

DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    product_name TEXT,
    brand TEXT,
    category TEXT,
    pic TEXT,
    rating DECIMAL,
    price INT,
    in_stock boolean,
    product_description TEXT
);

DROP TABLE IF EXISTS tanks;

CREATE TABLE tanks (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    tank_name TEXT,
    size INT,
    is_saltwater BOOLEAN,
    waterchange_frequency INT
);

DROP TABLE IF EXISTS species_in_tank;

CREATE TABLE species_in_tank (
    id SERIAL PRIMARY KEY,
    tank_id INT REFERENCES tanks(id) ON DELETE CASCADE,
    species_id INT REFERENCES species(id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS tank_history;

CREATE TABLE tank_history (
    id SERIAL PRIMARY KEY,
    tank_id INT REFERENCES tanks(id) ON DELETE CASCADE,
    waterchange_date DATE,
    gallons_changed INT,
    ph DECIMAL,
    ammonia INT,
    nitrite INT,
    nitrate INT
);


