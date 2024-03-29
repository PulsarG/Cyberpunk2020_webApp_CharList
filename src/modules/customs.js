export default {
  state() {
    return {
      Customcybernetics: [],

      Customweapons: [],

      Customarmor: [],

      Customgear: [],

      Customcheap: [],

      Customspec: [],
    };
  },

  mutations: {
    addCustomCybernetics(state, x) {
      state.Customcybernetics.push(x);
    },

    deleteCustomCybernetics(state, v) {
      for (let i = 0; i < state.Customcybernetics.length; i++) {
        if (state.Customcybernetics[i] == v) {
          state.Customcybernetics.splice(i, 1);
          i--;
        }
      }
      return state.Customcybernetics;
    },

    addCustomWeapons(state, x) {
      state.Customweapons.push(x);
    },

    deleteCustomWeapons(state, v) {
      for (let i = 0; i < state.Customweapons.length; i++) {
        if (state.Customweapons[i] == v) {
          state.Customweapons.splice(i, 1);
          i--;
        }
      }
      return state.Customweapons;
    },

    addCustomArmor(state, x) {
      state.Customarmor.push(x);
    },

    deleteCustomArmor(state, v) {
      for (let i = 0; i < state.Customarmor.length; i++) {
        if (state.Customarmor[i] == v) {
          state.Customarmor.splice(i, 1);
          i--;
        }
      }
      return state.Customarmor;
    },

    addCustomGear(state, x) {
      state.Customgear.push(x);
    },

    deleteCustomGear(state, v) {
      for (let i = 0; i < state.Customgear.length; i++) {
        if (state.Customgear[i] == v) {
          state.Customgear.splice(i, 1);
          i--;
        }
      }
      return state.Customgear;
    },

    addCustomCheap(state, x) {
      state.Customcheap.push(x);
    },

    deleteCustomCheap(state, v) {
      for (let i = 0; i < state.Customcheap.length; i++) {
        if (state.Customcheap[i] == v) {
          state.Customcheap.splice(i, 1);
          i--;
        }
      }
      return state.Customcheap;
    },

    addCustomSpec(state, x) {
      state.Customspec.push(x);
    },

    deleteCustomSpec(state, v) {
      for (let i = 0; i < state.Customspec.length; i++) {
        if (state.Customspec[i] == v) {
          state.Customspec.splice(i, 1);
          i--;
        }
      }
      return state.Customspec;
    },
  },
};
