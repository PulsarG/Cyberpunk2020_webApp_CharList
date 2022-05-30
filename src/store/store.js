import { createStore } from "vuex";


const store = createStore({
    state: () => ({
        Char: {
            nick: "Lopapopa",
        },



        Skillsatr: [
            {
                name: "Personal Crooming",
                count: "",
            },
            {
                name: "Wardrobe & Style",
                count: "",
            }
        ],
        hiddenEmptySkills: false,



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
        }
    },
    actions: {

    },
    modules: {

    }
});

export default store;