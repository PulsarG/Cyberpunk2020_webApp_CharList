export default {
    state() {
        return {
            Customcybernetics: [

            ]
        }
    },

    mutations: {
        addCustomCybernetics(state, c) {
            state.Customcybernetics.push(c);
        }
    },
}