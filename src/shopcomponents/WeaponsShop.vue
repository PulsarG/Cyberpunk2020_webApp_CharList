<template>
  <div class="list">
    <submenuwepons-shop
      :Items="PistolsShop"
      :NameShop="Pistols"
    ></submenuwepons-shop>
    <submenuwepons-shop :Items="SmgShop" :NameShop="Smg"></submenuwepons-shop>
    <submenuwepons-shop :Items="RifShop" :NameShop="Rif"></submenuwepons-shop>
    <submenuwepons-shop :Items="ShtShop" :NameShop="Sht"></submenuwepons-shop>
    <submenuwepons-shop :Items="HvyShop" :NameShop="Hvy"></submenuwepons-shop>
    <submenuwepons-shop
      :Items="MeeleShop"
      :NameShop="Meele"
    ></submenuwepons-shop>
    <submenuwepons-shop
      :Items="ExoticShop"
      :NameShop="Exotic"
    ></submenuwepons-shop>
    <weponsoption-shop
      :Items="AmmoShop"
      :NameShop="Ammo"
    ></weponsoption-shop>
    <!--  <body-shop></body-shop> -->
    <custom-weapons></custom-weapons>
  </div>
</template>

<script>
import SubmenuweponsShop from "./SubmenuweponsShop.vue";
import WeponsoptionShop from "./WeponsoptionShop.vue";
import CustomWeapons from "./CustomWeapons.vue";

export default {
  components: { SubmenuweponsShop, CustomWeapons, WeponsoptionShop },
  data() {
    return {
      Pistols: "Пистолеты",
      Smg: "Пистолеты-Пулеметы",
      Rif: "Штурмовые",
      Sht: "Дробовики",
      Hvy: "Тяжелое",
      Meele: "Ближнее",
      Exotic: "Экзотик",
      Ammo: "Боеприпасы и опции",
    };
  },
  computed: {
    PistolsShop() {
      return this.$store.state.weaponsshop.Pistols;
    },
    SmgShop() {
      return this.$store.state.weaponsshop.Smg;
    },
    RifShop() {
      return this.$store.state.weaponsshop.Rif;
    },
    ShtShop() {
      return this.$store.state.weaponsshop.Sht;
    },
    HvyShop() {
      return this.$store.state.weaponsshop.Hvy;
    },
    MeeleShop() {
      return this.$store.state.weaponsshop.Meele;
    },
    ExoticShop() {
      return this.$store.state.weaponsshop.Exotic;
    },
    AmmoShop() {
      return this.$store.state.weaponsshop.Ammo;
    },
  },
};
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  margin-left: 15%;
}
</style>
