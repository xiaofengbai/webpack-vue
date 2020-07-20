export default {
  state: {
    count: 0,
  },
  mutations: {
    setCount(state, _count) {
      state.count = _count;
    },
  },
  actions: {
    setCount(context, _count) {
      context.commit("setCount", _count);
    },
  },
  getters: {
    getCount(state) {
      return state.count;
    },
  },
};
