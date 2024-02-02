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

  async getUser(username: string | undefined, id: number | undefined): Promise<User | Error> {
    let user;

    if (username) [user] = await sql`SELECT * from Users WHERE username = ${username}`;
    else if (id) [user] = await sql`SELECT * from Users WHERE id = ${id}`;

    if (!user) throw new Error("the user not found");

    return user as User;
  }

  async getUsers(): Promise<User[] | Error> {
    const users: User[] = await sql`SELECT * from Users`;
    if (!users) throw new Error("the users not found");

    return users;
  }

  async editUser(user: User, new_user: User): Promise<User | Error> {
    // todo: по какому-то одному полю + валидация пользователя (сравнение user.id и id авторизованного)
    if (!new_user.username || !new_user.password) throw new Error("the username or password field is not specified");

    const [edit_user] = await sql`
      UPDATE Users
      SET username = ${new_user.username}, password = ${new_user.password}
      WHERE username = ${user.username!} OR id = ${user.id!};
    `;

    return edit_user as User;
  }
}

export = new UserService();