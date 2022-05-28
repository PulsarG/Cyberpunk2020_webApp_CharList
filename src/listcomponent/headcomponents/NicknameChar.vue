<template>
    <div class="nickblock">
        <label class="nicklabel" for="nick"> <strong style="color: white">NAME</strong></label>
        <input type="text" id="nick" class="nick" v-model="this.nick">
    </div>
</template>

<script>
export default {
    data() {
        return {
            nick: ""
        }
    },
    methods: {
        setNickFromStore() {
            this.nick = this.$store.state.Char.nick;
        }
    },
    watch: {
        nick(v) {
            this.$store.commit('setNick', v);
        },
    }
}
</script>

<style scoped>
.nickblock {
    width: 100%;
    display: flex;
}

.nicklabel {
    background-color: black;
    width: 20%;
}

.nick {
    width: 80%;
}
</style>