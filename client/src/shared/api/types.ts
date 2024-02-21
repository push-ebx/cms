import { $api } from "./config";
import { Type } from "@/shared/model";

export const createType = async ({title, type, struct_id}: Type): Promise<Type | undefined> => {
  try {
    const res = await $api.post(`/type`, { title, type, struct_id });
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