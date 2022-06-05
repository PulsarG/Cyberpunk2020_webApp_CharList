<template>
    <div class="list">

        <submenu-shop :Items="NeuroShop" :NameShop="NameNeuro"></submenu-shop>
        <submenu-shop :Items="BodyShop" :NameShop="NameBody"></submenu-shop>
        <submenu-shop :Items="BodyShop" :NameShop="NameBody"></submenu-shop>
        <submenu-shop :Items="BodyShop" :NameShop="NameBody"></submenu-shop>
        <submenu-shop :Items="BodyShop" :NameShop="NameBody"></submenu-shop>
        <submenu-shop :Items="BodyShop" :NameShop="NameBody"></submenu-shop>
        <submenu-shop :Items="BodyShop" :NameShop="NameBody"></submenu-shop>
        <submenu-shop :Items="BodyShop" :NameShop="NameBody"></submenu-shop>
        <!--  <body-shop></body-shop> -->
        <custom-cybernetics></custom-cybernetics>

    </div>
</template>

<script>
import SubmenuShop from "@/shopcomponents/SubmenuShop.vue";
import BodyShop from "@/shopcomponents/BodyShop.vue";
import CustomCybernetics from "./CustomCybernetics.vue";

export default {
    components: { SubmenuShop, BodyShop, CustomCybernetics },
    data() {
        return {
            NameNeuro: "Нейроимпланты",
            NameBody: "Телесные импланты",
        }
    },
    computed: {
        NeuroShop() {
            return this.$store.state.cyberneticsshop.Neuro;
        },
        BodyShop() {
            return this.$store.state.cyberneticsshop.Body;
        }
    },
}
</script>

<style scoped>
.list {
    display: flex;
    flex-direction: column;
    margin-left: 15%;
}
</style>