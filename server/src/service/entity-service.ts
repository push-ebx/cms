import {User} from "../types";
import sql from "../db";

class EntityService {
  async createUser(user: User): Promise<User | null> {
    try {
      const new_user = await sql`
        INSERT INTO Users ${sql(user, 'id', 'username', 'password', 'email', 'created_on')}
      `;
      console.log(new_user);

      return user;
    } catch (e) {
      throw e;
    }
  }
}

export = new EntityService();