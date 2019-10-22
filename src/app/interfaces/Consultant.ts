export interface Consultant {
  id?: number;
  identification_document: string;
  name: string;
  attach_certification: string;
  attach_document: string;
  birthdate: string;
  created_at?: string;
  email: string;
  lastname: string;
  password: string;
  phone_number?: string;
  updated_at?: string;
  validate: string;
  office_hours_from?:string;
  office_hours_to?:string;
  career_id: string;
  career_name?: string;
  price_per_hour?:number;
}
