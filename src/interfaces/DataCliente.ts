export interface ClienteDataTypes {
  id: number;
  name: string;
  cpf?: string;
  tel: string | null;
  location: string;
  created_at?: Date;
  updated_at: Date;
}
