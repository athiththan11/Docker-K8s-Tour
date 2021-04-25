CREATE TABLE meta (
    ID SERIAL PRIMARY KEY,
    MESSAGE VARCHAR (256)
);

INSERT INTO meta (message) VALUES ('Added from Init SQL Script');
