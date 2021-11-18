import api from "../api/api";

export default {
  async loadProducts({ commit }, payload) {
    const { food } = api;

    const { data: results } = await food.random(payload);
    commit("setProducts", results);
  },
};
