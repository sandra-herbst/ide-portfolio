import { NavigationFileInfo } from "./file.interface";

export interface NavigationItem {
  label: string;
  route: string;
  navType: NavigationType;
  fileInfo: NavigationFileInfo;
}

export enum NavigationType {
  MAIN,
  DYNAMIC,
}
