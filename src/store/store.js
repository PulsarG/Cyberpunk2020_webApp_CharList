import { createStore } from "vuex";

import skills from "@/modules/skills.js";
import cyberneticsshop from "@/modules/cyberneticsshop.js";

const store = createStore({

    modules: {
        cyberneticsshop,
        skills,
    },

    state: () => ({

        Char: {
            nick: "Lopapopa",
        },

        Cybernetics: [],

        role: "",

        isLoadChar: false,

        Customcybernetics: [
            {
                name: "",
                code: "",
                price: 0,
                humanity: ""
            }
        ]

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

        /* addOtherSkill(state) {
            state.Skillsother.push({ name: "", count: "" });
        }, */

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

        addCustomCybernetics(state) {
            state.cyberneticsshop.Neuro.push(state.Customcybernetics)
        }
    },

    actions: {

    },
});

export default store;