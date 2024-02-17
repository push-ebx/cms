import { Request } from 'express';

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
}

export interface Token {
  user_id?: number;
  refresh_token?: string;
  access_token?: string
}

export type Types = 'integer' | 'double' | 'text' | 'long text' | 'logical' | 'media' | 'date' | 'time';

export interface Field {
  id?: number;
  entity_id?: string;
  type?: Types | undefined;
  integer?: number;
  double?: number;
  text?: string;
  long_text?: string;
  logical?: boolean;
  media?: string;
  date?: Date;
  time?: string;
}

export type RequestWithUser = Request<{}, {}, {[key: string]: any}, { [key: string]: any } & {
  user: User;
}>