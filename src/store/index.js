import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/services';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    login: false,
    user: {},
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USER(state, payload) {
      state.user = Object.assign(state.user, payload);
    },
  },
  actions: {
    getUser(context, payload) {
      api.get(`/users/${payload}`).then((res) => {
        context.commit('UPDATE_USER', res.data);
      });
    },
    createUser(context, payload) {
      context.commit('UPDATE_USER', { id: payload.username });
      return api.post('/users', payload);
    },
  },
  modules: {
  },
});
