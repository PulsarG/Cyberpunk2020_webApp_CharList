<template>
  <div class="list">
    <submenuspec-shop
      :Items="SpecShop"
      :NameShop="NameArmor"
    ></submenuspec-shop>

    <!--  <body-shop></body-shop> -->
    <custom-spec></custom-spec>
  </div>
</template>

<script>
import SubmenuspecShop from "@/shopcomponents/SubmenuspecShop.vue";
import CustomSpec from "@/shopcomponents/CustomSpec.vue";

export default {
  components: { SubmenuspecShop, CustomSpec },
  data() {
    return {
      NameArmor: "Стандартная",
    };
  },
  computed: {
    SpecShop() {
      return this.$store.state.specshop.Standart;
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
