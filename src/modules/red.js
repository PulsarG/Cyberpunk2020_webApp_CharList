import store from "@/store/store";
import redskills from "@/modules/redskills.js";
export default {
  module: {
    redskills,
  },
  state() {
    return {
      isShowSkills: false,
      Char: {},
      Stats: [
        { name: "BODY", count: 0 },
        { name: "COOL", count: 0 },
        { name: "EMP", count: 0 },
        { name: "INT", count: 0 },
        { name: "REF", count: 0 },
        { name: "MOVE", count: 0 },
        { name: "WILL", count: 0 },
        { name: "LUCK", count: 0 },
        { name: "TECH", count: 0 },
        { name: "DEX", count: 0 },
      ],
      Savestats: {},
      Bio: "",
      Style: "",
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
    setStyle(state, i) {
      state.Style = i;
    },
    setShowSkills(state, v) {
      state.isShowSkills = v;
    },

    setRedChar(state, i) {
      state.Char = i.Char;

      state.Stats = i.Stats;
      state.Savestats = i.Savestats;
      store.state.redskills = i.Redskills;

      state.Bio = i.Bio;
      state.Style = i.Style;
      state.isLoadChar = true;

      setTimeout(() => {
        state.isLoadChar = false;
      }, 1000);
    },
  },

  actions: {},
  namespaced: true,
};
