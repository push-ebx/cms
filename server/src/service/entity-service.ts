import {Entity, Structure} from "../types";
import sql from "../db";

class EntityService {
  async createEntity(entity: Entity): Promise<Entity | Error> {
    if (!entity.struct_id) throw new Error("the struct_id field is not specified");

    // todo проверка на существование struct

    const [{id}] = await sql`INSERT INTO Entities ${sql(entity, 'struct_id')} RETURNING id`;

    entity.id = id;
    return entity;
  }

  async getEntity(struct_id: number | undefined, id: number | undefined): Promise<Entity | Error> {
    let entity;
    // todo: по id юзера
    if (struct_id) [entity] = await sql`SELECT * from Structures WHERE struct_id = ${struct_id}`;
    else if (id) [entity] = await sql`SELECT * from Structures WHERE id = ${id}`;

    if (!entity) throw new Error("the entity not found");

    return entity as Entity;
  }

  async getEntities(): Promise<Entity[] | Error> {
    // todo: по id юзера
    const entities: Entity[] = await sql`SELECT * from Entities`;
    if (!entities) throw new Error("the entities not found");

    return entities;
  }
}

export = new EntityService();