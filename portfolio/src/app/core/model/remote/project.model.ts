import { Image } from "./image.model";
import { Tag } from "./tag.model";
import { Link } from "./link.model";

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  shortDescription: string;
  longDescription: string;
  implementations: string[];
  links?: Link[];
  tags: Tag[];
  images: Image[];
  startDate: Date;
  endDate?: Date;
}
