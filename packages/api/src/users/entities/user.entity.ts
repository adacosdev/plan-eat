import { UserType } from '../../schemas';

export class User implements UserType {
  id: string;
  email: string;
  preferences: any | null;
  weeklyBudget: number | null;
}
