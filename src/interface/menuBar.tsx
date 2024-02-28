export interface MenuInterface {
  label: string;
  route: string;
  subMenu?: MenuInterface[];
}
