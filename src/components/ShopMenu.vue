<template>
  <div class="shopmenu" v-show="isOpenShop">
    <base-buttonslice
      class="btnsm"
      @click="
        openCybershop();
        setColor('1');
      "
      id="1"
      >Импланты</base-buttonslice
    >

    <div class="submenu" v-show="isCybershopOpen">
      <cybernetics-shop></cybernetics-shop>
    </div>

    <base-buttonslice class="btnsm" @click="setColor('2')" id="2"
      >Броня</base-buttonslice
    >

    <div class="submenu" v-show="isCybershopOpen"></div>

    <base-buttonslice
      class="btnsm"
      @click="
        openWeaponsshop();
        setColor('3');
      "
      id="3"
      >Оружие</base-buttonslice
    >

    <div class="submenu" v-show="isWeaponsshopOpen">
      <weapons-shop></weapons-shop>
    </div>

    <base-buttonslice class="btnsm" @click="setColor('4')" id="4"
      >Разное</base-buttonslice
    >
    <base-buttonneon class="btnsm btnsave" @click="SaveCustomItems"
      >СОХРАНИТЬ кастомные вещи</base-buttonneon
    >
    <!-- <button class="btnsm" @click="SaveCustomItems">
        СОХРАНИТЬ кастомные вещи
      </button> -->
  </div>
</template>

<script>
import BaseButtonneon from "@/components/BaseButtonneon.vue";
import BaseButtonslice from "@/components/BaseButtonslice.vue";
import CyberneticsShop from "@/shopcomponents/CyberneticsShop.vue";
import WeaponsShop from "@/shopcomponents/WeaponsShop.vue";
export default {
  components: { CyberneticsShop, WeaponsShop, BaseButtonslice, BaseButtonneon },
  data() {
    return {
      isOpenShop: true,

      isCybershopOpen: false,
      isWeaponsshopOpen: false,
    };
  },
  methods: {
    setColor(e) {
      let el = document.getElementById(e);
      let color = el.style.backgroundColor;
      if (color == "orange") {
        el.style.backgroundColor = "aliceblue";
      } else {
        el.style.backgroundColor = "orange";
      }
    },
    SaveCustomItems() {
      this.$store.dispatch("api/saveCustomItems");
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
}

.btnsm {
  width: 50%;
  height: 30px;
  margin-top: 10px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.submenu {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

.btnsave {
  /* position: absolute; */
  bottom: 10%;
  width: 40%;
}
</style>
