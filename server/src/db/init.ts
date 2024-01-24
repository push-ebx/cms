import sql from './index';

(async () => {
  await sql`
    CREATE TABLE IF NOT EXISTS Users (
      user_id serial PRIMARY KEY,
      username VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR (255) NOT NULL,
      email VARCHAR (255) UNIQUE NOT NULL,
      created_on TIMESTAMP
    );
  `

  await sql`
    CREATE TABLE IF NOT EXISTS Structures (
      struct_id serial PRIMARY KEY,
      user_id INT NOT NULL,
      title_struct VARCHAR(255) UNIQUE NOT NULL,
      FOREIGN KEY (user_id) REFERENCES Users (user_id)
    );
  `

  await sql`
    CREATE TABLE IF NOT EXISTS Entities (
      entity_id serial PRIMARY KEY,
      struct_id INT NOT NULL,
      title_entity VARCHAR(255) UNIQUE NOT NULL,
      FOREIGN KEY (struct_id) REFERENCES Structures (struct_id)
    );
  `

  await sql`
    CREATE TABLE IF NOT EXISTS Fields (
      field_id serial PRIMARY KEY,
      entity_id INT NOT NULL,
      type VARCHAR(25) UNIQUE NOT NULL,
      FOREIGN KEY (entity_id) REFERENCES Entities (entity_id),
      integer INT,
      double NUMERIC,
      text VARCHAR(255),
      long_text TEXT,
      boolean BOOLEAN,
      date DATE NOT NULL
    );
  `

  console.log('The database has been initialized!');
})()