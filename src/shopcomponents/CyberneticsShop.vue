<template>

    <submenu-shop></submenu-shop>
    <body-shop></body-shop>
    <button class="btnadd" @click="addCustomCybernetics">+ Add custom item</button>
</template>

<script>
import SubmenuShop from "@/shopcomponents/NeuroShop.vue";
import BodyShop from "@/shopcomponents/BodyShop.vue";

export default {
    components: { SubmenuShop, BodyShop, },
    data() {
        return {
        }
    },
    methods: {
        addCustomCybernetics() {
            this.$store.commit('addCustomCybernetics');
        },
    }
}
</script>

<style scoped>
.btnadd {
    border: none;
    display: flex;
    justify-self: center;
    align-self: center;
    width: 20%;
    align-items: center;
    justify-content: center;
    height: 25px;
}
</style>