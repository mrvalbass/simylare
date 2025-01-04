export interface Product {
  title: string;
  description: string;
  quantity: number;
  url: string;
  tags: Array<string>;
  materials: Array<string>;
  price: string;
  imgUrls: Array<string>;
}

export enum View {
  Line = "line",
  Grid = "grid",
}
