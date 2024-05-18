import { $api } from "./config";
import { Entity, Structure } from "@/shared/model";

export const createEntity = async ({ struct_id, fields }: Entity): Promise<Entity | undefined> => {
  try {
    const res = await $api.post(`/entity`, { struct_id, fields });
    return res.data.data;
  } catch (e) {
    throw e;
  }
};

export const getEntities = async ({ struct_id }: { struct_id: number }): Promise<Entity[]> => {
  try {
    const res = await $api.get(`/entities?struct_id=${struct_id}`);
    return res.data.data;
  } catch (e) {
    throw e;
  }
};

// export const getStructures = async (): Promise<Structure[] | undefined> => {
//   try {
//     const res = await $api.get(`/structures`);
//     return res.data.data;
//   } catch (e) {
//     throw e;
//   }
// };

// export const getUser = async (): Promise<User | undefined> => {
//   try {
//     const res = await $api.get(`/user`, );
//
//     return res.data.data;
//   } catch (e) {
//     throw e;
//   }
// };

//
//
// export const editUser = async (user: User, new_user: User): Promise<User | undefined> => {
//   try {
//     const res = await $api.put(`/user`, {
//       params: { username: user.username, id: user.id },
//       body: { username: new_user.username, password: new_user.password }
//     });
//     return res.data;
//   } catch (e) {
//     throw e;
//   }
// };
//
// export const deleteUser = async ({ username, id }: { username?: string, id?: number }): Promise<User | undefined> => {
//   try {
//     const res = await $api.delete(`/user`, { params: { username, id } });
//     return res.data;
//   } catch (e) {
//     throw e;
//   }
// };