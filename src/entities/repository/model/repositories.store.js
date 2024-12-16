import { makeAutoObservable, runInAction } from "mobx";
import { SortDirections, } from "@/entities/repository/model/repositories.types";
import { toast } from "react-toastify";
import { repositoriesApi } from "@/entities/repository";
import axios from "axios";
export class RepositoriesStore {
    constructor() {
        Object.defineProperty(this, "repositories", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "favoritesRepositories", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "favoriteIds", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Set()
        });
        Object.defineProperty(this, "repositoriesFound", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "isLoading", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "sortDirection", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: SortDirections.NameDescending
        });
        Object.defineProperty(this, "getRepositories", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (value) => {
                try {
                    this.isLoading = true;
                    const { items: repositories, total_count } = await repositoriesApi.getRepositories(value);
                    runInAction(() => {
                        this.repositories = repositories.map((repo) => ({
                            ...repo,
                            isFavorite: this.favoriteIds.has(repo.id),
                        }));
                        this.repositoriesFound = total_count;
                        this.sortRepositories(this.sortDirection);
                    });
                }
                catch (e) {
                    if (axios.isAxiosError(e)) {
                        toast.error(e.response?.data.message);
                    }
                }
                finally {
                    this.isLoading = false;
                }
            }
        });
        Object.defineProperty(this, "setSortDirection", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (direction) => {
                this.sortDirection = direction;
            }
        });
        Object.defineProperty(this, "sortRepositories", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (direction) => {
                switch (direction) {
                    case SortDirections.NameDescending:
                        this.repositories.sort((a, b) => a.owner.login.localeCompare(b.owner.login));
                        break;
                    case SortDirections.NameAscending:
                        this.repositories.sort((a, b) => b.owner.login.localeCompare(a.owner.login));
                        break;
                    case SortDirections.StarsAscending:
                        this.repositories.sort((a, b) => a.stargazers_count - b.stargazers_count);
                        break;
                    case SortDirections.StarsDescending:
                        this.repositories.sort((a, b) => b.stargazers_count - a.stargazers_count);
                        break;
                }
            }
        });
        Object.defineProperty(this, "toggleFavorite", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (id) => {
                const index = this.repositories.findIndex((repository) => repository.id === id);
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
                this.favoritesRepositories = this.favoritesRepositories.filter((repo) => repo.id !== this.repositories[index].id);
                this.favoriteIds.delete(this.repositories[index].id);
            }
        });
        Object.defineProperty(this, "getRepository", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (id) => {
                let repository;
                if (id) {
                    repository = this.repositories.find((repo) => repo.id === id);
                }
                if (repository) {
                    return repository;
                }
            }
        });
        makeAutoObservable(this);
    }
    get favoriteRepositoriesCount() {
        return this.favoritesRepositories.length;
    }
}
export const repositoriesStore = new RepositoriesStore();
