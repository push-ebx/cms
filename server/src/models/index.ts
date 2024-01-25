export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  created_on: Date;
}

export interface Structure {
  id: number;
  user_id: number;
  title: string;
}

export interface Entity {
  id: number;
  struct_id: number;
}

export type Types = 'integer' | 'double' | 'text' | 'long text' | 'logical' | 'media' | 'date' | 'time';

export interface Field {
  id: number;
  entity_id: string;
  type: Types;
  integer: number;
  double: number;
  text: string;
  long_text: string;
  logical: boolean;
  media: string;
  date: Date;
  time: string;
}