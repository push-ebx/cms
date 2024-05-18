import { Entity } from "../types";
import FieldService from "./field-service";
import sql from "../db";

class EntityService {
  async createEntity(entity: Entity): Promise<Entity | Error> {
    // { struct_id: struct_id, fields: [{type: "integer", title_field: "name", value: "Nikita"}] }
    if (!entity.struct_id) throw new Error("the struct_id field is not specified");

    // todo проверка на существование struct

    const [{ id }] = await sql`INSERT INTO Entities ${sql(entity, "struct_id")} RETURNING id`;
    // пройтись по массиву fields и добавить
    entity.fields.forEach(field => {
      field.entity_id = id;
      FieldService.createField(field);
    });

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

  async getEntities(struct_id: number): Promise<any[] | Error> {
    const entities: Entity[] = await sql`SELECT * FROM Entities
      INNER JOIN Fields ON Entities.id = Fields.entity_id
      WHERE Entities.struct_id=${struct_id}
      ORDER BY Fields.entity_id ASC, Fields.title ASC
    `;

    const count_fields_in_entity = entities.filter(entity => entity.entity_id === entities[0].entity_id).length;
    const entities_by_group = [];

    for (let i = 0; i < entities.length / count_fields_in_entity; i ++) {
      entities_by_group.push([]);

      for (let j = 0; j < count_fields_in_entity; j++) {
        // @ts-ignore
        entities_by_group[entities_by_group.length - 1].push(Object.fromEntries(
          Object.entries(entities[i * count_fields_in_entity + j])
            .filter(([_, v]) => v != null)
        ));
      }
    }

    console.log(entities_by_group);

    if (!entities) throw new Error("the entities not found");

    return entities_by_group;
  }
}

export = new EntityService();