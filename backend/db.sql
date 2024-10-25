CREATE DATABASE minizoo;

CREATE TABLE animal_types (
  id serial PRIMARY KEY,
  name TEXT UNIQUE NOT NULL
);

CREATE TABLE animals (
  id serial PRIMARY KEY,
  name TEXT NOT NULL,
  weight VARCHAR(50),
  type INTEGER NOT NULL,
  image VARCHAR NOT NULL,
  FOREIGN KEY(type) REFERENCES animal_types(id)
);

INSERT INTO animal_types (name)
VALUES ('Brunbjörn');
INSERT INTO animal_types (name)
VALUES ('Elefant');
INSERT INTO animal_types (name)
VALUES ('Giraff');
INSERT INTO animal_types (name)
VALUES ('Pilgiftsgroda');
INSERT INTO animal_types (name)
VALUES ('Pytonorm');
INSERT INTO animal_types (name)
VALUES ('Panda');

INSERT INTO animals (name, weight, type, image)
VALUES ('Brumma', '250 kg', 1, 'https://cdn.pixabay.com/photo/2016/03/27/18/10/bear-1283347_1280.jpg');


-- 1. psql --username=postgres
-- 2. lösenord

-- 3.  \d - se saker (display)
    -- \c - byta databas (connect)
    -- \l - lista saker (list)
    -- \q - stänga av (quit)
