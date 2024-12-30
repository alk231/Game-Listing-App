import axios from "axios";

const key = "d24fbe6bca694b4a9aa0bb8ca556e1d9";

// Create an Axios instance
const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

// Export an object containing the API functions
const GlobalApi = {
  getGenreList: () => axiosCreate.get(`/genres?key=${key}`),
  getAllGames: () => axiosCreate.get(`/games?key=${key}`),
  getGameListByGenreId: (id) => axiosCreate.get(`/games?genres=${id}&key=${key}`),
};

export default GlobalApi;
