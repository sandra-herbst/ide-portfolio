export interface NavigationItem {
  label: string;
  route: string;
  type: NavigationType;
}

export enum NavigationType {
  MAIN,
  DYNAMIC,
}
