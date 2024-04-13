import { ExperienceCategoryItem } from "./experience-category-item";
import { Experience } from "./experience.model";

export interface Experiences {
  id: string;
  programmingLanguages: ExperienceCategoryItem[];
  frameworks: ExperienceCategoryItem[];
  tools: ExperienceCategoryItem[];
  workExperiences: Experience[];
  education: Experience[];
}
