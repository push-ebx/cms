import { $api } from "./config";
import { Structure } from "@/shared/model";

export const createStructure = async (title: string): Promise<Structure | undefined> => {
  try {
    const res = await $api.post(`/structures`, { title });
    return res.data.data;
  } catch (e) {
    throw e;
  }
};

export const getStructures = async (): Promise<Structure[] | undefined> => {
  try {
    const res = await $api.get(`/structures`);
    return res.data.data;
  } catch (e) {
    throw e;
  }
};

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