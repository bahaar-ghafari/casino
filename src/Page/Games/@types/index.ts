export interface IGame {
  name: string;
  description: string;
  code: string;
  icon: string;
  categoryIds: number[];
}

export interface ICategories {
  id: number,
  name: string,
}