<template>

    <submenu-shop></submenu-shop>
    <body-shop></body-shop>
    <custom-cybernetics></custom-cybernetics>
    
</template>

<script>
import SubmenuShop from "@/shopcomponents/NeuroShop.vue";
import BodyShop from "@/shopcomponents/BodyShop.vue";
import CustomCybernetics from "./CustomCybernetics.vue";

export default {
    components: { SubmenuShop, BodyShop, CustomCybernetics },
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

</style>