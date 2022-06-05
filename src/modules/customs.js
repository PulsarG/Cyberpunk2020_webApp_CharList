export default {
    state() {
        return {
            Customcybernetics: [

            ]
        }
    },

    mutations: {
        addCustomCybernetics(state, x) {
            state.Customcybernetics.push(x);
        },

        deleteCustomCybernetics(state, v) {
            for (let i = 0; i < state.Customcybernetics.length; i++) {
                if (state.Customcybernetics[i] == v) {
                    state.Customcybernetics.splice(i, 1);
                    i--
                }
            }
            return state.Customcybernetics
        },
    },
}