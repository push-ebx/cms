import {User} from "../models";
import sql from "../db";

class UserService {
  async createUser(user: User): Promise<User | null> {
    try {
      const new_user = await sql`
        INSERT INTO Users ${sql(user, 'user_id', 'username', 'password', 'email', 'created_on')}
      `;
      console.log(new_user);

      return user;
    } catch (e) {
      throw e;
    }
  }
}

export = new UserService();