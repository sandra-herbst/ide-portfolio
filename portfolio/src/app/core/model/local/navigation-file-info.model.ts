import { NavigationFileType } from "./navigation-file-type.enum";

export interface NavigationFileInfo {
  fileType: NavigationFileType;
  fileName: string;
  fileExtension: string;
  altText: string;
}
