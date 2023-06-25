import { Document } from 'mongoose';

interface Address {
  addr1: string;
  addr2: string;
  city: string;
  state: string;
  country: string;
  zip: number;
}

export interface User extends Document {
  email: string;
  readonly password: string;
  seller: Boolean;
  address: Address;
  created: Date;
}
