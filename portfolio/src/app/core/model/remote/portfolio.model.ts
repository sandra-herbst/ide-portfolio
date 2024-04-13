import { About } from "./about.model";
import { Project } from "./project.model";
import { Experiences } from "./experiences.model";

export interface Portfolio {
  id: string;
  about: About;
  experiences: Experiences;
  projects: Project[];
}
