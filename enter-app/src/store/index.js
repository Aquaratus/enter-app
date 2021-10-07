import { createStore } from 'vuex';
import axios from 'axios';

const listStore = {
  namespaced: true,
  state: {
    posts: [],
  },
  getters: {
    getPosts: (state) => state.posts,
  },
  mutations: {
    addPosts(state, newPosts) {
      state.posts = [...state.posts, ...newPosts];
    },
  },
  actions: {
    async getPosts({ commit }) {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

      commit('addPosts', response.data);
    },
  },
};

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    listStore,
  },
});
