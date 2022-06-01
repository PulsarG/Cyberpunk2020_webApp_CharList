import { createStore } from "vuex";

import skills from "@/modules/skills.js";
import cyberneticsshop from "@/modules/cyberneticsshop.js";
import customs from "@/modules/customs";

const store = createStore({

    modules: {
        cyberneticsshop,
        skills,
        customs,
    },

    state: () => ({

        Char: {
            nick: "Lopapopa",
        },

        Cybernetics: [],

        role: "",

        isLoadChar: false,

    }),

    getters: {

    },

    mutations: {
        setNick(state, nick) {
            state.Char.nick = nick;
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
                    i--
                }
            }
            return state.Cybernetics
        },

    },

    actions: {

    },
});

export default store;