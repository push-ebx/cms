import { $api } from "./config";
import { User } from "@/shared/model";

export const getUsers = async (): Promise<User[] | undefined> => {
  try {
    const res = await $api.get(`/users`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getUser = async (): Promise<User | undefined> => {
  try {
    const res = await $api.get(`/user`);

    return res.data.data;
  } catch (e) {
    throw e;
  }
};

export const createUser = async ({ username, password }: {
  username: string,
  password: string
}): Promise<User | undefined> => {
  try {
    const res = await $api.post(`/user`, { username, password });
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const login = async ({ username, password }: {
  username: string,
  password: string
}): Promise<User | undefined> => {
  try {
    const res = await $api.post(`/user/login`, { username, password });
    localStorage.setItem("access_token", res.data.access_token);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const editUser = async (user: User, new_user: User): Promise<User | undefined> => {
  try {
    const res = await $api.put(`/user`, {
      params: { username: user.username, id: user.id },
      body: { username: new_user.username, password: new_user.password }
    });
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const deleteUser = async ({ username, id }: { username?: string, id?: number }): Promise<User | undefined> => {
  try {
    const res = await $api.delete(`/user`, { params: { username, id } });
    return res.data;
  } catch (e) {
    throw e;
  }
};