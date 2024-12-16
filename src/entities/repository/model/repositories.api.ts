import { baseInstance } from "@/shared/api/baseInstance";
import { GetRepositoriesResponse } from "@/entities/repository/model/repositories.types";

export const repositoriesApi = {
  async getRepositories(value: string) {
    return baseInstance
      .get<GetRepositoriesResponse>(`search/repositories?q=${value}`)
      .then((res) => res.data);
  },
};
