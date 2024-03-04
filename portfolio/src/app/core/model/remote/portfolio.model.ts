import { About } from "./about.model";
import { Experience } from "./experience.model";
import { Project } from "./project.model";

export interface Portfolio {
  id: string;
  about: About;
  experiences: Experience[];
  projects: Project[];
}
