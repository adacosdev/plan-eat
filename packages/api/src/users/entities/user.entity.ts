import { UserType, UserPreferencesType } from '../../schemas';

export class User implements UserType {
  id: string;
  email: string;
  preferences: UserPreferencesType | null;
  weeklyBudget: number | null;
}
