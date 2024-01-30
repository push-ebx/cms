import { $api } from "./config";
import { User } from "@/shared/model";

export const getArticleByTitle = async (title: string): Promise<User | undefined> => {
  if (title) {
    const res = await $api.get(`/articles/getByTitle?title=${title}`)
    if (!res.data) throw new Error("Article not found")
    return res.data
  }
  else throw new Error("Title param is empty")
}