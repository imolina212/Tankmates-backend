-- Drop if exists

DROP DATABASE IF EXISTS tankmates_app;

CREATE DATABASE tankmates_app;

\c tankmates_app;

CREATE TABLE species (
    species_id SERIAL PRIMARY KEY,
    species_name TEXT,
    scientific_name TEXT,
    origin TEXT,
    pic TEXT
);

DROP TABLE IF EXISTS plants;

CREATE TABLE plants (
    plant_id SERIAL PRIMARY KEY,
    plant_name TEXT,
    plant_scientific_name TEXT,
    plant_type TEXT,
    placement TEXT,
    light_requirements TEXT,
    origin TEXT,
    co2_requirements TEXT,
    skill_level TEXT,
    pic TEXT,
);

DROP TABLE IF EXISTS products;

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name TEXT,
    product_brand TEXT,
    product_image TEXT,
    product_description TEXT,
    product_rating TEXT,
    product_price TEXT,
);