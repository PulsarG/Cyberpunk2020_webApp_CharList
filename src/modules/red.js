import store from "@/store/store";

export default {
  state() {
    return {
      Char: {},
      Stats: [],
      Savestats: {},
      Bio: "",
    };
  },

  mutations: {
    setChar(state, i) {
      state.Char = i;
    },
    setStats(state, i) {
      state.Stats = i;
    },
    setSavestats(state, i) {
      state.Savestats = i;
    },
    setBio(state, i) {
      state.Bio = i;
    },

    setRedChar(state, i) {
      state.Char = i.Char;

      state.Stats = i.Stats;
      state.Savestats = i.Savestats;

      state.Bio = i.Bio;
      state.isLoadChar = true;

      setTimeout(() => {
        state.isLoadChar = false;
      }, 1000);
    },
  },

  actions: {},
  namespaced: true,
};
