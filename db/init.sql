CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    auth0_id VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    name TEXT NOT NULL,
    picture TEXT NOT NULL
)