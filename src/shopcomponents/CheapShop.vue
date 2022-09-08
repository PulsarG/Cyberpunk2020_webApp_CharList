<template>
  <div class="list">
    <h4 style="color: yellow">
      Для установки Чипов необходимо иметь <br />
      "Базовый процессор" и <br />
      "Комплект разъемов для Чипов" / "Интерфейсные разъемы"
    </h4>
    <submenucheap-shop :Items="LookShop" :NameShop="Look"></submenucheap-shop>
    <submenucheap-shop :Items="BodyShop" :NameShop="Body"></submenucheap-shop>
    <submenucheap-shop :Items="IntShop" :NameShop="Int"></submenucheap-shop>
    <submenucheap-shop :Items="RefShop" :NameShop="Ref"></submenucheap-shop>
    <submenucheap-shop :Items="TechShop" :NameShop="Tech"></submenucheap-shop>

    <!--  <body-shop></body-shop> -->
    <custom-cheap></custom-cheap>
  </div>
</template>

<script>
import SubmenucheapShop from "@/shopcomponents/SubmenucheapShop.vue";
import CustomCheap from "@/shopcomponents/CustomCheap.vue";

export default {
  components: { SubmenucheapShop, CustomCheap },
  data() {
    return {
      Look: "Привлекательность",
      Body: "Телосложение",
      Int: "Интеллект",
      Ref: "Рефлексы",
      Tech: "Технические навыки",
    };
  },
  computed: {
    LookShop() {
      return this.$store.state.cheapshop.Look;
    },
    BodyShop() {
      return this.$store.state.cheapshop.Body;
    },
    IntShop() {
      return this.$store.state.cheapshop.Int;
    },
    RefShop() {
      return this.$store.state.cheapshop.Ref;
    },
    TechShop() {
      return this.$store.state.cheapshop.Tech;
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
