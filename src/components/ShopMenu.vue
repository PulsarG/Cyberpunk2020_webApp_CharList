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

    <base-buttonslice
      class="btnsm"
      @click="
        openArmorshop();
        setColor('2');
      "
      id="2"
      >Броня</base-buttonslice
    >

    <div class="submenu" v-show="isArmorOpen">
      <armor-shop></armor-shop>
    </div>

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

    <!-- <base-buttonborder class="btnsm btnsave" @click="SaveCustomItems">СОХРАНИТЬ кастомные вещи</base-buttonborder> -->
    <base-buttonneon class="btnsm btnsave" @click="SaveCustomItems"
      >[ СОХРАНИТЬ кастомные вещи ]</base-buttonneon
    >
    <!-- <button class="btnsm" @click="SaveCustomItems">
        СОХРАНИТЬ кастомные вещи
      </button> -->
  </div>
</template>

<script>
import BaseButtonborder from "@/components/BaseButtonborder.vue";
import BaseButtonneon from "@/components/BaseButtonneon.vue";
import BaseButtonslice from "@/components/BaseButtonslice.vue";
import ArmorShop from "@/shopcomponents/ArmorShop.vue";
import CyberneticsShop from "@/shopcomponents/CyberneticsShop.vue";
import WeaponsShop from "@/shopcomponents/WeaponsShop.vue";
export default {
  components: {
    CyberneticsShop,
    WeaponsShop,
    BaseButtonslice,
    BaseButtonneon,
    BaseButtonborder,
    ArmorShop,
  },
  data() {
    return {
      isOpenShop: true,

      isCybershopOpen: false,
      isWeaponsshopOpen: false,
      isArmorOpen: false,
    };
  },
  methods: {
    setColor(e) {
      let el = document.getElementById(e);
      let color = el.style.backgroundColor;
      if (color == "red") {
        el.style.background = "none";
      } else {
        el.style.backgroundColor = "red";
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
    openArmorshop() {
      if (!this.isArmorOpen) {
        this.isArmorOpen = true;
      } else {
        this.isArmorOpen = false;
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
  margin-left: 3%;
  overflow: auto;
}

.btnsm {
  width: 50%;
  height: 30px;
  margin-top: 20px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Ktf";
  letter-spacing: 5px;
  /*  font-size: 20px; */
}

.submenu {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

.btnsave {
  /* position: absolute; */
  bottom: 10%;
  width: 50%;
  /* display: flex;
  align-self: center; */
  /*  background: none; */
  color: orange;
  /* box-shadow: 0 0 20px blue; */
  position: absolute;
  bottom: 0;
  left: -10px;
  width: 100%;
  /* Высота footer */
  height: 50px;
  background: linear-gradient(to right, red, 5%, black, 95%, red);
  z-index: 1;
  border: none;
  border-top: 1px solid yellow;
}
</style>
