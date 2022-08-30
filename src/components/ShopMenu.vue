<template>
  <div class="title">
    <h2>Магазин</h2>
  </div>
  <div>
    <button class="btn" @click="openShop">
      <h1>SHOP</h1>
    </button>
    <div class="shopmenu" v-show="isOpenShop">
      <button class="btnsm" @click="openCybershop">Импланты</button>
      <div class="submenu" v-show="isCybershopOpen">
        <cybernetics-shop></cybernetics-shop>
      </div>

      <button class="btnsm">Броня</button>
      <div class="submenu" v-show="isCybershopOpen"></div>

      <button class="btnsm" @click="openWeaponsshop">Оружие</button>
      <div class="submenu" v-show="isWeaponsshopOpen">
        <weapons-shop></weapons-shop>
      </div>

      <button class="btnsm">Other Items</button>

      <button class="btnsm" @click="SaveCustomItems">
        СОХРАНИТЬ кастомные вещи
      </button>
    </div>
  </div>
</template>

<script>
import CyberneticsShop from "@/shopcomponents/CyberneticsShop.vue";
import WeaponsShop from "@/shopcomponents/WeaponsShop.vue";
export default {
  components: { CyberneticsShop, WeaponsShop },
  data() {
    return {
      isOpenShop: true,

      isCybershopOpen: false,
      isWeaponsshopOpen: false,
    };
  },
  methods: {
    SaveCustomItems() {
      this.$store.dispatch('api/saveCustomItems')
    },

    openShop() {
      if (!this.isOpenShop) {
        this.isOpenShop = true;
      } else {
        this.isOpenShop = false;
      }
    },

    openCybershop() {
      if (!this.isCybershopOpen) {
        this.isCybershopOpen = true;
      } else {
        this.isCybershopOpen = false;
      }
    },
    openWeaponsshop() {
      if (!this.isWeaponsshopOpen) {
        this.isWeaponsshopOpen = true;
      } else {
        this.isWeaponsshopOpen = false;
      }
    },
  },
};
</script>

<style scoped>
.title {
  width: 200px;
  position: relative;
  right: 150px;
  height: 15vh;
}

.btn {
  height: 30px;
  width: 100%;
  border: none;
  background: none;
}

.shopmenu {
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  overflow: auto;
  height: 70vh;
}

.btnsm {
  width: 50%;
  margin-top: 10px;
}

.submenu {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}
</style>
