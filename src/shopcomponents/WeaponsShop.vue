<template>
    <div class="list">

        <submenuwepons-shop :Items="PistolsShop" :NameShop="Pistols"></submenuwepons-shop>

        <!--  <body-shop></body-shop> -->
        <custom-weapons></custom-weapons>

    </div>
</template>

<script>
import SubmenuweponsShop from "./SubmenuweponsShop.vue";
import CustomWeapons from "./CustomWeapons.vue";

export default {
    components: { SubmenuweponsShop, CustomWeapons },
    data() {
        return {
            Pistols: "Пистолеты",
        }
    },
    computed: {
        PistolsShop() {
            return this.$store.state.weaponsshop.Pistols;
        },

        BodyShop() {
            return this.$store.state.cyberneticsshop.Body;
        },
        BioUpgrade() {
            return this.$store.state.cyberneticsshop.Bioupgrade;
        },
        MeleeWeapons() {
            return this.$store.state.cyberneticsshop.Meleeweapons;
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