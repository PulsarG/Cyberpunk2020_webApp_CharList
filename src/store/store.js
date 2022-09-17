import { createStore } from "vuex";

import skills from "@/modules/skills.js";
import cyberneticsshop from "@/modules/cyberneticsshop.js";
import customs from "@/modules/customs";
import weaponsshop from "@/modules/weaponsshop.js";
import armorshop from "@/modules/armorshop";
import gearshop from "@/modules/gearshop";
import cheapshop from "@/modules/cheapshop";
import specshop from "@/modules/specshop";
import api from "@/modules/api.js";
import red from "@/modules/red.js";

const store = createStore({
  modules: {
    cyberneticsshop,
    weaponsshop,
    skills,
    customs,
    api,
    armorshop,
    gearshop,
    cheapshop,
    specshop,
    red,
  },

  state: () => ({
    isTheme77: false,
    isShowMenu: true,
    unlockTheme: false,
    login: "",

    Char: {
      nick: "",
      charpoints: "",
      role: "",
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

    Armor: {
      headArmor: "",
      torsoArmor: "",
      RArmArmor: "",
      LArmArmor: "",
      RLegArmor: "",
      LLegArmor: "",
    },

    Morestats: {
      rep: "",
      ip: "",
      humanity: "",
    },

    savePoint: "",
    DmgChecks: {
      check1: false,
      check2: false,
      check3: false,
      check4: false,
      check5: false,
      check6: false,
      check7: false,
      check8: false,
      check9: false,
      check10: false,
      check11: false,
      check12: false,
      check13: false,
      check14: false,
      check15: false,
      check16: false,
      check17: false,
      check18: false,
      check19: false,
      check20: false,
      check21: false,
      check22: false,
      check23: false,
      check24: false,
      check25: false,
      check26: false,
      check27: false,
      check28: false,
      check29: false,
      check30: false,
      check31: false,
      check32: false,
      check33: false,
      check34: false,
      check35: false,
      check36: false,
      check37: false,
      check38: false,
      check39: false,
      check40: false,
    },

    Cybernetics: [],
    Gear: [],
    Weapons: [],
    BioText: "",
    LookText: "",

    

    isLoadChar: false,
    isReloadChars: false,
  }),

  getters: {},

  mutations: {
    setTheme(state, v) {
      state.isTheme77 = v;
    },
    setShowMenu(state, v) {
      state.isShowMenu = v;
    },
    setUnlockTheme(state) {
      state.unlockTheme = true;
    },
    setNick(state, v) {
      state.Char.nick = v;
    },

    setStats(state, s) {
      state.Stats = s;
    },
    setArmor(state, a) {
      state.Armor = a;
    },
    setMorestats(state, s) {
      state.Morestats = s;
    },

    setSavePoint(state, s) {
      state.savePoint = s;
    },
    setDmgChecks(state, c) {
      state.DmgChecks = c;
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
      state.Char.role = role;
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
      state.Armor = i.Armor;

      state.savePoint = i.savePoint;
      state.DmgChecks = i.DmgChecks;

      

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
