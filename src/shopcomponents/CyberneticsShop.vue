<template>
    <div class="list">

        <submenu-shop :Items="NeuroShop" :NameShop="NameNeuro"></submenu-shop>
        <submenu-shop :Items="BodyShop" :NameShop="NameBody"></submenu-shop>
        <submenu-shop :Items="BioUpgrade" :NameShop="NameBioUp"></submenu-shop>
        <submenu-shop :Items="MeleeWeapons" :NameShop="NameMelee"></submenu-shop>
        <submenu-shop :Items="BodyShop" :NameShop="NameOptical"></submenu-shop>
        <submenu-shop :Items="BodyShop" :NameShop="NameAudio"></submenu-shop>
        <submenu-shop :Items="BodyShop" :NameShop="NameArmsLegs"></submenu-shop>
        <submenu-shop :Items="BodyShop" :NameShop="NameForArmsLegs"></submenu-shop>
        <submenu-shop :Items="BodyShop" :NameShop="NameItemsFOrArmsLegs"></submenu-shop>
        <submenu-shop :Items="BodyShop" :NameShop="NameRangeWeaponForArmsLegs"></submenu-shop>
        <submenu-shop :Items="BodyShop" :NameShop="NameArmor"></submenu-shop>
        <submenu-shop :Items="BodyShop" :NameShop="NameRams"></submenu-shop>

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
            NameBioUp: "Био-улучшения",
            NameMelee: "Имплантированное оружие ближнего боя",
            NameOptical: "Кибер-оптика",
            NameAudio: "Кибер-аудио",
            NameArmsLegs: "Конечности",
            NameForArmsLegs: "Кисти и ступни для кибер-конечностей",
            NameItemsFOrArmsLegs: "Встраиваемые элементы в кибер-конечности",
            NameRangeWeaponForArmsLegs: "Оружие дальнего боя встраиваемое в кибер-конечность",
            NameArmor: "Нательные пластины (Экзоброня)",
            NameRams: "Линейные рамы (Экзоскелет)"
        }
    },
    computed: {
        NeuroShop() {
            return this.$store.state.cyberneticsshop.Neuro;
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