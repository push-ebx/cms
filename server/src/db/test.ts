import sql from '../db';

(async () => {
  const users = await sql`
    select * from User;
  `
  console.log(users);
})()