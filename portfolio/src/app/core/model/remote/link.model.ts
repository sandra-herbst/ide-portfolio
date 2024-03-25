import { LinkType } from "./link-type.enum";

export interface Link {
  id: string;
  url: string;
  altText: string;
  label?: string;
  type: LinkType;
}
