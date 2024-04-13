import { Tag } from "./tag.model";

export interface Experience {
  id: string;
  jobTitle: string;
  subTitle: string;
  startDate: Date;
  endDate?: Date;
  company?: string;
  description: string;
  tags: Tag[];
}
