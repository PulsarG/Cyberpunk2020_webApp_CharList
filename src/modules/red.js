import store from "@/store/store";

export default {
  state() {
    return {
      Char: {},
      Stats: [],
    };
  },

  mutations: {
    setChar(state, i) {
      state.Char = i;
    },
    setStats(state, i) {
      state.Stats = i;
    },

    setRedChar(state, i) {
      state.Char = i.Char;

      state.Stats = i.Stats;

      state.isLoadChar = true;

      setTimeout(() => {
        state.isLoadChar = false;
      }, 1000);
    },
  },

  actions: {},
  namespaced: true,
};
