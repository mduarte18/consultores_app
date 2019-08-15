export interface User {
  id?: number;
  identification_document: string;
  name: string;
  lastname: string;
  birthdate: string;
  phone_number: string;
  attach_document: string;
  state:string;
  email: string;
  password: string;
  remember_token?: string;
  created_at?: string;
  updated_at?: string;
  role_id: string;
}
