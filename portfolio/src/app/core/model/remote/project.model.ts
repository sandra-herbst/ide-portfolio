import { Image } from "./image.model";
import { Tag } from "./tag.model";

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  shortDescription: string;
  longDescription: string;
  tags: Tag[];
  images: Image[];
  startDate: Date;
  endDate?: Date;
}
