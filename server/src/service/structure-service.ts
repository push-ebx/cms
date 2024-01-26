import { Structure } from "../types";
import sql from "../db";

class StructureService {
  async createStructure(structure: Structure): Promise<Structure | Error> {
    if (!structure.title) throw new Error("the title field is not specified");

    const [res] = await sql`SELECT * from Structures WHERE title = ${structure.title}`;

    if (res) throw new Error("a structure with the same title already exists");

    const [{id}] = await sql`INSERT INTO Structures ${sql(structure, 'title', 'user_id')} RETURNING id`;

    structure.id = id;
    return structure;
  }

  async getStructure(title: string | undefined, id: number | undefined): Promise<Structure | Error> {
    let structure;
    // todo: по id юзера
    if (title) [structure] = await sql`SELECT * from Structures WHERE title = ${title}`;
    else if (id) [structure] = await sql`SELECT * from Structures WHERE id = ${id}`;

    if (!structure) throw new Error("the structure not found");

    return structure as Structure;
  }

  async getStructures(): Promise<Structure[] | Error> {
    // todo: по id юзера
    const structures: Structure[] = await sql`SELECT * from Structures`;
    if (!structures) throw new Error("the structures not found");

    return structures;
  }
}

export = new StructureService();