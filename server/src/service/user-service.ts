import { User } from "../types";
import sql from "../db";

class UserService {
  async createUser(user: User): Promise<User | Error> {
    if (!user.username)  throw new Error("the username field is not specified");

    const [res] = await sql`SELECT * from Users WHERE username = ${user.username}`;

    if (res) throw new Error("a user with the same username already exists");

    const [{id}] = await sql`INSERT INTO Users ${sql(user, 'username', 'password', 'created_on')} RETURNING id`;

    user.id = id;
    return user;
  }

  async getUser(username: string): Promise<User | Error> {
    const [user] = await sql`SELECT * from Users WHERE username = ${username}`;
    if (!user) throw new Error("the user not found");

    return user as User;
  }

  async getUsers(): Promise<User[] | Error> {
    const users: User[] = await sql`SELECT * from Users`;
    if (!users) throw new Error("the users not found");

    return users;
  }

  async editUser(username: string, user: User): Promise<User | Error> {
    if (!user.username || !user.password) throw new Error("the username or password field is not specified");

    const [edit_user] = await sql`
      UPDATE Users
      SET username = ${user.username}, password = ${user.password}
      WHERE username = ${username};
    `;

    return edit_user as User;
  }
}

export = new UserService();