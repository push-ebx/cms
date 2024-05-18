export interface User {
  id?: number;
  username?: string;
  password?: string;
  created_on?: Date;
  access_token?: string;
}

export interface Structure {
  id?: number;
  user_id: number;
  title: string;
}

export interface Entity {
  id?: number;
  struct_id: number;
  fields: Field[];
}

export type Types = 'integer' | 'double' | 'text' | 'long_text' | 'boolean' | 'media' | 'date' | 'time';

export interface Field {
  id?: number;
  entity_id?: string;
  title?: string;
  type?: Types | undefined;
  integer?: number;
  double?: number;
  text?: string;
  long_text?: string;
  boolean?: boolean;
  media?: string;
  date?: Date;
  time?: string;
}

export interface Type {
  id?: number;
  struct_id?: number;
  type: Types;
  title: string;
}

export const types: Type[] = [
  {
    type: "integer",
    title: "Целочисленный"
  },
  {
    type: "double",
    title: "Число с плавающей точкой"
  },
  {
    type: "text",
    title: "Текст"
  },
  {
    type: "long_text",
    title: "Длинный текст"
  },
  {
    type: "boolean",
    title: "Логический"
  },
  {
    type: "date",
    title: "Дата"
  },
  {
    type: "time",
    title: "Время"
  }
];