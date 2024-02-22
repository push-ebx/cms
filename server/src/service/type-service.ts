import { Structure, Type } from "../types";
import sql from "../db";

class TypeService {
  async createType(type: Type): Promise<Type | Error> {
    const [res] = await sql`SELECT * from types WHERE title = ${type.title}`;

    if (res) throw new Error("a type with the same title already exists");

    const [{id}] = await sql`INSERT INTO types ${sql(type, 'title', 'struct_id', 'type')} RETURNING id`;

    type.id = id;
    return type;
  }

  async getTypes(): Promise<Type[] | Error> {
    const types: Type[] = await sql`SELECT * from types`;
    if (!types) throw new Error("the types not found");

    return types;
  }
}

export = new TypeService();