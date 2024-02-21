import sql from './index';

(async () => {
  await sql`
    CREATE TABLE IF NOT EXISTS Users (
      id serial PRIMARY KEY,
      username VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR (255) NOT NULL,
      created_on TIMESTAMP
    );
  `

  await sql`
    CREATE TABLE IF NOT EXISTS Structures (
      id serial PRIMARY KEY,
      user_id INT NOT NULL,
      title VARCHAR(255) UNIQUE NOT NULL,
      FOREIGN KEY (user_id) REFERENCES Users (id)
    );
  `

  await sql`
    CREATE TABLE IF NOT EXISTS Entities (
      id serial PRIMARY KEY,
      struct_id INT NOT NULL,
      FOREIGN KEY (struct_id) REFERENCES Structures (id)
    );
  `

  await sql`
    CREATE TABLE IF NOT EXISTS Types (
      id serial PRIMARY KEY,
      struct_id INT NOT NULL,
      title VARCHAR(255) UNIQUE NOT NULL,
      type VARCHAR(25) NOT NULL,
      FOREIGN KEY (struct_id) REFERENCES Structures (id)
    );
  `

  // todo: при создании или редактировании провератья title на уникальность
  await sql`
    CREATE TABLE IF NOT EXISTS Fields (
      id serial PRIMARY KEY,
      entity_id INT NOT NULL,
      FOREIGN KEY (entity_id) REFERENCES Entities (id),
      integer INT,
      double NUMERIC,
      text VARCHAR(255),
      long_text TEXT,
      boolean BOOLEAN,
      date DATE NOT NULL
    );
  `

  console.log('The database has been initialized! Press Crtl-C then "y"');
})();