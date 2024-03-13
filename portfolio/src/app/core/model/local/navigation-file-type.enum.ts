import { NavigationFileInfo } from "./navigation-file-info.model";

export enum NavigationFileType {
  JAVA = "java",
  DB = "db",
  MD = "md",
  JSON = "json",
}

export namespace NavigationFileType {
  export function getFilePath(fileType: NavigationFileInfo): string {
    return `assets/icons/${fileType.fileName}.${fileType.fileExtension}`;
  }
}
