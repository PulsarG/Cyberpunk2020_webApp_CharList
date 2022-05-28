import { createStore } from "vuex";


const store = createStore({
    state: () => ({
        Char: {
            nick: "Lopapopa",
        },

        isLoadChar: false,
    }),
    getters: {

    },
    mutations: {
        setNick(state, nick) {
            state.Char.nick = nick;
        }
    },
    actions: {

    },
    modules: {

    }
});

export default store;