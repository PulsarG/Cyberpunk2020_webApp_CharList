<template>
    <div>
        <button class="btn" @click="openSettings">Ваши персонажи:</button>
        <div class="settings" v-show="isOpenSettings">
            <div v-for="i in this.Chars" :key="i.Role">
                <div class="charslist">
                    <button class="btnchars" @click="setChar(i)">
                        {{ i.Char.nick }} * {{ i.Role }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        Chars: Array,
    },
    data() {
        return {
            isOpenSettings: false,

        }
    },

    methods: {
        openSettings() {
            if (!this.isOpenSettings) { this.isOpenSettings = true } else { this.isOpenSettings = false }
        },

        setChar(i) {
            this.$store.commit('setChar', i);
        }
    },

}
</script>

<style scoped>
.btn {
    height: 30px;
    width: 100%;
}

.btnchars {
    margin-top: 3px;
    /* border: none; */
}

.charslist {
    display: flex;
    justify-self: flex-end;
    align-self: flex-start;
}
</style>