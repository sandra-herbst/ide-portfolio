import { NavigationFileInfo } from "./navigation-file-info.model";
import { NavigationType } from "./navigation-item.enum";

export interface NavigationItem {
  label: string;
  route: string;
  navType: NavigationType;
  fileInfo: NavigationFileInfo;
}
