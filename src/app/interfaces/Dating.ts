export interface Dating {

  id?: number;
  user_id: number;
  consultant_id: number;
  for_date: string;
  time_from: string;
  time_up: string;
  title: string;
  summary: string;
  price?:number;
  created_at?: string;
  updated_at?: string;

}
