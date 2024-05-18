import {Entity, Field, Types} from "../types";
import sql from "../db";

class FieldService {
  // todo: лучше addField
  async createField(field: Field): Promise<Field | Error> {
    if (!field.entity_id) throw new Error("the entity_id field is not specified");
    if (!field.type) throw new Error("the type field is not specified");
    if (!field.title) throw new Error("the type field is not specified");
    // по type
    const {type, entity_id, title} = field;

    // todo проверка на уникальность title
    console.log(field);
    // const query = "";
    let id;
    if (type === 'text') {
      [{id}] = await sql`INSERT INTO Fields ${sql(field, 'type', 'entity_id', 'title', 'text')} RETURNING id`;
    } else if (type === 'integer') {
      [{id}] = await sql`INSERT INTO Fields ${sql(field, 'type', 'entity_id', 'title', 'integer')} RETURNING id`;
    } else if (type === 'double') {
      [{id}] = await sql`INSERT INTO Fields ${sql(field, 'type', 'entity_id', 'title', 'double')} RETURNING id`;
    } else if (type === 'long_text') {
      [{id}] = await sql`INSERT INTO Fields ${sql(field, 'type', 'entity_id', 'title', 'long_text')} RETURNING id`;
    } else if (type === 'boolean') {
      [{id}] = await sql`INSERT INTO Fields ${sql(field, 'type', 'entity_id', 'title', 'boolean')} RETURNING id`;
    // } else if (type === 'media') {
      // [{id}] = await sql`INSERT INTO Fields ${sql(field, 'type', 'entity_id', 'title', 'media')} RETURNING id`;
    } else if (type === 'date') {
      [{id}] = await sql`INSERT INTO Fields ${sql(field, 'type', 'entity_id', 'title', 'date')} RETURNING id`;
    } else if (type === 'time') {
      [{id}] = await sql`INSERT INTO Fields ${sql(field, 'type', 'entity_id', 'title', 'time')} RETURNING id`;
    }

    `INSERT INTO Fields ('type', 'entity_id', 'title', '${type}') VALUES (${type}, ${entity_id}, ${title}, ${field[type]})`;

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