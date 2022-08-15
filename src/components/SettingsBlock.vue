<template>
    <div>
        <button class="btn" @click="openSettings">Settings</button>
        <div class="settings" v-show="isOpenSettings">
            <button>Авторасчет СТАТов от урона</button>
            <button>Auto-armor</button>
            <button @click="saveChar">Save current char</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            isOpenSettings: false,

        }
    },

    methods: {
        openSettings() {
            if (!this.isOpenSettings) { this.isOpenSettings = true } else { this.isOpenSettings = false }
        },

        async saveChar() {
            try {
                await axios.post("https://cp2020-bcaf6-default-rtdb.europe-west1.firebasedatabase.app/" + this.login + ".json", {


                    Char: this.$store.state.Char,
                    Role: this.$store.state.role,

                    Stats: this.$store.state.Stats,
                    Morestats: this.$store.state.Morestats,

                    Skills: this.$store.state.skills,

                    Cybernetics: this.$store.state.Cybernetics,
                    Weapons: this.$store.state.Weapons,

                   /*  Customcybernetics: this.$store.state.customs.Customcybernetics,
                    Customweapons: this.$store.state.customs.Customweapons, */
                });
                alert("Сохранено");
                this.reloadChars(true);
            } catch (e) {
                alert(e);
            }
        },

        reloadChars(b) {
            this.$store.commit('reloadChars', b);
        },
    },

    computed: {
        login() {
            return this.$store.state.login
        },

    },
}
</script>

<style scoped>
.btn {
    height: 30px;
    width: 100%;
}
</style>