import { Tag } from "./tag.model";

export interface Experience {
  id: string;
  jobTitle: string;
  startDate: Date;
  endDate?: Date;
  company?: string;
  description: string;
  tags: Tag[];
}
