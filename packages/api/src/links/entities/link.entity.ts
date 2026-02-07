import { LinkType } from '../../schemas';

export class Link implements LinkType {
  id: string;
  url: string;
  title: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}
