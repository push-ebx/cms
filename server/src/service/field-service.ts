import {Entity, Field, Types} from "../types";
import sql from "../db";

class FieldService {
  // todo: лучше addField
  async createField(field: Field): Promise<Field | Error> {
    if (!field.entity_id) throw new Error("the entity_id field is not specified");
    if (!field.type) throw new Error("the type field is not specified");
    if (!field.title) throw new Error("the type field is not specified");
    // по type 

    // todo проверка на существование

    const [{id}] = await sql`INSERT INTO Fields ${sql(field, 'type', 'entity_id', 'title')} RETURNING id`;

    field.id = id;
    return field;
  }

  async getFields(): Promise<Field[] | Error> {
    // todo: по id юзера
    const fields: Field[] = await sql`SELECT * from Fields`;
    if (!fields) throw new Error("the fields not found");

    return fields;
  }
}

export = new FieldService();