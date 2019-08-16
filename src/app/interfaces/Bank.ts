export interface Bank {
  id?: number;
  code: string;
  name: string;
  identification_document: string;
  account_type: string;
  created_at?: string;
  updated_at?: string;
}
