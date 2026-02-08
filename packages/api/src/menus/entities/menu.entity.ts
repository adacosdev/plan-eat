import { MenuType } from '../../schemas';

export class Menu implements MenuType {
  id: string;
  userId: string;
  date: Date;
}
