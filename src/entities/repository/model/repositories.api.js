import { baseInstance } from "@/shared/api/baseInstance";
export const repositoriesApi = {
    async getRepositories(value) {
        return baseInstance
            .get(`search/repositories?q=${value}`)
            .then((res) => res.data);
    },
};
