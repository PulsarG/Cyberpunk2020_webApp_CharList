<template>
    <div class="roleblock">
        <label class="nicklabel" for="role"><strong style="color: white">ROLE</strong></label>
        <select v-model="this.role" name="role" id="role" class="nick">
            <option v-for="(role, index) in roles" :key="index"><strong style="color: white">{{ role }}</strong>
            </option>
        </select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            role: "",

            roles: ['Solo', 'Rocker', 'Netrunner', 'Media', 'Nomad', 'Fixer', 'Cop', 'Corpo', 'Techie', 'Medtechie'],
        }
    },

     methods: {
        setRoleFromStore() {
            this.role = this.$store.state.role;
        }
    },

    computed: {
        isLoadChar() {
            return this.$store.state.isLoadChar;
        }
    },
    watch: {
        isLoadChar(v) {
            if (v)
                this.setRoleFromStore();
        },

        role(v) {
            this.$store.commit('setRole', v)
        },
    }

}
</script>

<style scoped>
.nicklabel {
    background-color: black;
    width: 20%;
}

.roleblock {
    margin-top: 3px;
    width: 100%;
    display: flex;
}
</style>