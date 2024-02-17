import { Token, User } from "../types";
import sql from "../db";
import tokenService from "./token-service";
const bcrypt = require("bcrypt");

class UserService {
  async createUser(user: User): Promise<User | Error> {
    if (!user.username) throw new Error("the username field is not specified");

    const [res] = await sql`SELECT * from Users WHERE username = ${user.username}`;

    if (res) throw new Error("a user with the same username already exists");
    user.password = await bcrypt.hash(user.password, 3);

    const [{ id }] = await sql`INSERT INTO Users ${sql(user, "username", "password", "created_on")} RETURNING id`;

    user.access_token = tokenService.generateToken({ id: id });

    user.id = id;
    return user;
  }

  async login({username, password}: User): Promise<Token | User | Error> {
    if (!username) throw new Error("the username field is not specified");

    const [user]: any = await sql`SELECT * from Users WHERE username = ${username}`;

    const isPassEquals = await bcrypt.compare(password, user.password);

    if (!isPassEquals) {
      throw new Error('incorrect the password');
    }

    user.access_token = tokenService.generateToken({ id: user.id });
    delete user.password;
    return user;
  }

  async getUser(id?: number): Promise<User | Error> {
    let user;

    if (id) [user] = await sql`SELECT * from Users WHERE id = ${id}`;

    if (!user) throw new Error("the user not found");
    delete user.password;
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