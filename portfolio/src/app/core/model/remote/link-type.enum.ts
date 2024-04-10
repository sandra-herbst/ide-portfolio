export enum LinkType {
  GITHUB = "GITHUB",
  ARTICLE = "ARTICLE",
  DOWNLOAD = "DOWNLOAD",
  PLAY_STORE = "PLAY_STORE",
  APPLE_STORE = "APPLE_STORE",
}

export function iconSrcFromLinkType(type: LinkType): string {
  switch (type) {
    case LinkType.GITHUB:
      return "assets/icons/github_icon.svg";
    case LinkType.ARTICLE:
      return "assets/icons/globe.svg";
    case LinkType.DOWNLOAD:
      return "assets/icons/download.png";
    case LinkType.PLAY_STORE:
      return "assets/icons/google-play-badge.svg";
    case LinkType.APPLE_STORE:
      return "assets/icons/app-store-badge.svg";
    default:
      return LinkType.GITHUB;
  }
}

export function buttonLabelFromLinkType(type: LinkType): string | null {
  switch (type) {
    case LinkType.GITHUB:
      return "GitHub";
    case LinkType.DOWNLOAD:
      return "Download";
    default:
      return null;
  }
}
