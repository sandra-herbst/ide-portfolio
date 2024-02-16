export interface NavigationFileInfo {
  fileType: FileType;
  fileName: string;
  fileExtension: string;
  altText: string;
}

export enum FileType {
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
