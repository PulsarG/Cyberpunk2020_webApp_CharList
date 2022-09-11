<template>
  <div class="list">
    <submenugear-shop :Items="ToolsShop" :NameShop="Tools"></submenugear-shop>
    <submenugear-shop
      :Items="ElectronicShop"
      :NameShop="Electronic"
    ></submenugear-shop>
    <submenugear-shop
      :Items="DataSysShop"
      :NameShop="DataSys"
    ></submenugear-shop>
    <submenugear-shop
      :Items="ConnectShop"
      :NameShop="Connect"
    ></submenugear-shop>
    <submenugear-shop :Items="ViewShop" :NameShop="View"></submenugear-shop>
    <submenugear-shop
      :Items="EntertaimentShop"
      :NameShop="Entertaiment"
    ></submenugear-shop>
    <submenugear-shop
      :Items="SecurityShop"
      :NameShop="Security"
    ></submenugear-shop>
    <submenugear-shop :Items="MedShop" :NameShop="Med"></submenugear-shop>
    <submenugear-shop :Items="HomeShop" :NameShop="Home"></submenugear-shop>
    <submenugear-shop
      :Items="VehicleShop"
      :NameShop="Vehicle"
    ></submenugear-shop>
    <submenugear-shop
      :Items="LifestyleShop"
      :NameShop="Lifestyle"
    ></submenugear-shop>
    <submenugear-shop :Items="FoodShop" :NameShop="Food"></submenugear-shop>
    <submenugear-shop
      :Items="AppartmentShop"
      :NameShop="Appartment"
    ></submenugear-shop>
    <custom-gear></custom-gear>
  </div>
</template>

<script>
import SubmenugearShop from "@/shopcomponents/SubmenugearShop.vue";
import CustomGear from "@/shopcomponents/CustomGear.vue";

export default {
  components: { SubmenugearShop, CustomGear },
  data() {
    return {
      Tools: "Инструменты",
      Electronic: "Личная электроника",
      DataSys: "Системы данных",
      Connect: "Связь",
      View: "Наблюдение",
      Entertaiment: "Развлечения",
      Security: "Безопасность",
      Med: "Медицина",
      Home: "Мебель, жилье",
      Vehicle: "Транспорт",
      Lifestyle: "Образ жизни",
      Food: "Пищеблок",
      Appartment: "Место проживания",
    };
  },
  computed: {
    ToolsShop() {
      return this.$store.state.gearshop.Tools;
    },
    ElectronicShop() {
      return this.$store.state.gearshop.Electronic;
    },
    DataSysShop() {
      return this.$store.state.gearshop.DataSys;
    },
    ConnectShop() {
      return this.$store.state.gearshop.Connect;
    },
    ViewShop() {
      return this.$store.state.gearshop.View;
    },
    EntertaimentShop() {
      return this.$store.state.gearshop.Entertaiment;
    },
    SecurityShop() {
      return this.$store.state.gearshop.Security;
    },
    MedShop() {
      return this.$store.state.gearshop.Med;
    },
    HomeShop() {
      return this.$store.state.gearshop.Home;
    },
    VehicleShop() {
      return this.$store.state.gearshop.Vehicle;
    },
    LifestyleShop() {
      return this.$store.state.gearshop.Lifestyle;
    },
    FoodShop() {
      return this.$store.state.gearshop.Food;
    },
    AppartmentShop() {
      return this.$store.state.gearshop.Appartment;
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
