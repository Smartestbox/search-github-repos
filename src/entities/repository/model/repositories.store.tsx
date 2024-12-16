import { makeAutoObservable, runInAction } from "mobx";
import {
  DomainRepository,
  SortDirections,
} from "@/entities/repository/model/repositories.types";
import { toast } from "react-toastify";
import { repositoriesApi } from "@/entities/repository";
import axios from "axios";

export class RepositoriesStore {
  repositories: DomainRepository[] = [];
  favoritesRepositories: DomainRepository[] = [];
  favoriteIds = new Set<number>();
  repositoriesFound = 0;
  isLoading = false;
  sortDirection: SortDirections = SortDirections.NameDescending;

  constructor() {
    makeAutoObservable(this);
  }

  getRepositories = async (value: string) => {
    try {
      this.isLoading = true;

      const { items: repositories, total_count } =
        await repositoriesApi.getRepositories(value);

      runInAction(() => {
        this.repositories = repositories.map((repo) => ({
          ...repo,
          isFavorite: this.favoriteIds.has(repo.id),
        }));
        this.repositoriesFound = total_count;
        this.sortRepositories(this.sortDirection);
      });
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        toast.error(e.response?.data.message);
      }
    } finally {
      this.isLoading = false;
    }
  };

  setSortDirection = (direction: SortDirections) => {
    this.sortDirection = direction;
  };

  sortRepositories = (direction: SortDirections) => {
    switch (direction) {
      case SortDirections.NameDescending:
        this.repositories.sort((a, b) =>
          a.owner.login.localeCompare(b.owner.login),
        );
        break;
      case SortDirections.NameAscending:
        this.repositories.sort((a, b) =>
          b.owner.login.localeCompare(a.owner.login),
        );
        break;
      case SortDirections.StarsAscending:
        this.repositories.sort(
          (a, b) => a.stargazers_count - b.stargazers_count,
        );
        break;
      case SortDirections.StarsDescending:
        this.repositories.sort(
          (a, b) => b.stargazers_count - a.stargazers_count,
        );
        break;
    }
  };

  toggleFavorite = (id: number) => {
    const index = this.repositories.findIndex(
      (repository) => repository.id === id,
    );
    if (index < 0) {
      return;
    }

    this.repositories[index] = {
      ...this.repositories[index],
      isFavorite: !this.repositories[index].isFavorite,
    };

    const favExists = this.favoriteIds.has(this.repositories[index].id);
    if (!favExists) {
      this.favoritesRepositories.push(this.repositories[index]);
      this.favoriteIds.add(this.repositories[index].id);
      return;
    }

    this.favoritesRepositories = this.favoritesRepositories.filter(
      (repo) => repo.id !== this.repositories[index].id,
    );
    this.favoriteIds.delete(this.repositories[index].id);
  };

  get favoriteRepositoriesCount(): number {
    return this.favoritesRepositories.length;
  }

  getRepository = (id: number) => {
    let repository;
    if (id) {
      repository = this.repositories.find((repo) => repo.id === id);
    }

    if (repository) {
      return repository;
    }
  };
}

export const repositoriesStore = new RepositoriesStore();
