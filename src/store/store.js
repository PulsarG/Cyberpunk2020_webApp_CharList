import { createStore } from "vuex";

import skills from "@/modules/skills.js";
import cyberneticsshop from "@/modules/cyberneticsshop.js";
import customs from "@/modules/customs";
import weaponsshop from "@/modules/weaponsshop.js";
import api from "@/modules/api.js";

const store = createStore({
  modules: {
    cyberneticsshop,
    weaponsshop,
    skills,
    customs,
    api,
  },

  state: () => ({
    login: "",

    Char: {
      nick: "",
      charpoints: "",
    },

    Stats: {
      int: "",
      ref: "",
      tech: "",
      cool: "",
      attr: "",
      luck: "",
      ma: "",
      body: "",
      emp: "",
      run: "",
      leap: "",
      lift: "",

      rep: "",
      ip: "",
      humanity: "",
    },

    Morestats: {
      rep: "",
      ip: "",
      humanity: "",
    },

    Cybernetics: [],
    Gear: [],
    Weapons: [],
    BioText: "",
    LookText: "",

    role: "",

    isLoadChar: false,
    isReloadChars: false,
  }),

  getters: {},

  mutations: {
    setNick(state, v) {
      state.Char.nick = v;
    },

    setStats(state, s) {
      state.Stats = s;
    },
    setMorestats(state, s) {
      state.Morestats = s;
    },

    setCP(state, v) {
      state.Char.charpoints = v;
    },

    hiddenSkillsEmpty(state) {
      if (!state.hiddenEmptySkills) {
        state.hiddenEmptySkills = true;
      } else {
        state.hiddenEmptySkills = false;
      }
    },

    setRole(state, role) {
      state.role = role;
    },

    addCybernetics(state, v) {
      state.Cybernetics.push(v);
    },
    deleteCybernetics(state, v) {
      for (let i = 0; i < state.Cybernetics.length; i++) {
        if (state.Cybernetics[i] == v) {
          state.Cybernetics.splice(i, 1);
          i--;
        }
      }
      return state.Cybernetics;
    },

    addGear(state, v) {
      state.Gear.push(v);
    },
    deleteGear(state, v) {
      for (let i = 0; i < state.Gear.length; i++) {
        if (state.Gear[i] == v) {
          state.Gear.splice(i, 1);
          i--;
        }
      }
      return state.Gear;
    },

    addWeapons(state, v) {
      state.Weapons.push(v);
    },
    deleteWeapons(state, v) {
      for (let i = 0; i < state.Weapons.length; i++) {
        if (state.Weapons[i] == v) {
          state.Weapons.splice(i, 1);
          i--;
        }
      }
      return state.Weapons;
    },

    setLogin(state, l) {
      state.login = l;
    },

    reloadChars(state, b) {
      state.isReloadChars = b;

      setTimeout(() => {
        state.isReloadChars = false;
      }, 1000);
    },

    setBioText(state, t) {
      state.BioText = t;
    },
    setLookText(state, t) {
      state.LookText = t;
    },

    setChar(state, i) {
      state.Char = i.Char;

      state.Stats = i.Stats;
      state.Morestats = i.Morestats;

      state.role = i.Role;

      state.skills = i.Skills;

      state.Cybernetics = i.Cybernetics;
      state.Gear = i.Gear;
      state.Weapons = i.Weapons;
      state.BioText = i.BioText;
      state.LookText = i.LookText;

      state.isLoadChar = true;

      setTimeout(() => {
        state.isLoadChar = false;
      }, 1000);
    },
  },

  actions: {},
});

export default store;
