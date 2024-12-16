// Добавлена только нужная для проекта типизация из API Github

export type RepositoryItemResponse = {
  owner: {
    login: string;
    avatar_url: string;
  };
  id: number;
  description: string;
  full_name: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  archived: boolean;
  language: string;
  created_at: string;
  updated_at: string;
};

export type GetRepositoriesResponse = {
  total_count: number;
  items: RepositoryItemResponse[];
};

export type DomainRepository = RepositoryItemResponse & {
  isFavorite: boolean;
};

export enum SortDirections {
  StarsDescending = "Stars: descending",
  StarsAscending = "Stars: ascending",
  NameDescending = "Name: A-z",
  NameAscending = "Name: Z-a",
}
