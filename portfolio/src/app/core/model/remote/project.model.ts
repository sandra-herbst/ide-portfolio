import { Image } from "./image.model";
import { Tag } from "./tag.model";

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: Tag[];
  images: Image[];
  url?: string;
}
