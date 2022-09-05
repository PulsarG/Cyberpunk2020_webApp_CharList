<template>
  <div class="list">
    <submenuarmor-shop
      :Items="ArmorShop"
      :NameShop="NameArmor"
    ></submenuarmor-shop>

    <!--  <body-shop></body-shop> -->
    <custom-armor></custom-armor>
  </div>
</template>

<script>
import SubmenuarmorShop from "@/shopcomponents/SubmenuarmorShop.vue";
import CustomArmor from "@/shopcomponents/CustomArmor.vue";

export default {
  components: { SubmenuarmorShop, CustomArmor },
  data() {
    return {
      NameArmor: "Стандартная",
    };
  },
  computed: {
    ArmorShop() {
      return this.$store.state.armorshop.Armor;
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
