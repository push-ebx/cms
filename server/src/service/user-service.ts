import {User} from "../models";

class UserService {
  async createUser(user: User): Promise<User | null> {
    try {

      return null;
    } catch (e) {
      throw e;
    }
  }
}

export = new UserService();