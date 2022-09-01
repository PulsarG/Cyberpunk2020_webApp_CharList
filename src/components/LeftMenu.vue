<template>
  <div class="menu">
    <div class="title">
      <h2>
        М <br />
        E <br />
        Н <br />
        Ю
      </h2>
    </div>

    <div class="mainmenu">
      <h1>CYBERPUNK</h1>
      <base-buttonneon class="btn" @click="this.showChars = true"
        >2020</base-buttonneon
      >
      <button class="btn" disabled>RED (soon)</button>
      <base-buttonneon class="btn" @click="this.showChars = false"
        >SHOP</base-buttonneon
      >
      <!-- <button class="btn" @click="this.showChars = true">2020</button> -->
      <!-- <button class="btn" disabled>RED (soon)</button> -->
      <!-- <button class="btn" @click="this.showChars = false">SHOP</button> -->
    </div>

    <!-- <div v-show="this.showChars"> -->
    <chars-block class="cb" v-show="this.showChars"></chars-block>

    <div style="margin-top: 15px" v-show="!this.showChars">
      <shop-menu></shop-menu>
    </div>
    <!-- </div> -->
  </div>
  <settings-block class="sett" v-show="this.showChars"></settings-block>
  <div class="foott">
    <div class="footer">
      <a href="" style="color: white">by Github.com/PulsarG / 2022</a>
    </div>
  </div>
</template>

<script>
import BaseButtonneon from "@/components/BaseButtonneon.vue";
import SettingsBlock from "@/components/SettingsBlock.vue";
import ShopMenu from "@/components/ShopMenu.vue";
import CharsBlock from "@/components/CharsBlock.vue";
export default {
  components: { SettingsBlock, CharsBlock, ShopMenu, BaseButtonneon },
  data() {
    return {
      showChars: true,
    };
  },
};
</script>

<style scoped>
h1 {
  animation: color 10s infinite;
}

@keyframes color {
  0% {
    color: red;
  }
  25% {
    color: gold;
  }
  50% {
    color: blue;
  }
  75% {
    color: blueviolet;
  }
  100% {
    color: red;
  }
}
.title {
  position: absolute;
  right: -50px;
  top: 0;
  width: auto;
}

.menu {
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  height: 100vh;
  border: 1px solid red;
}

.btn {
  width: 100px;
  height: 5vh;
  font-size: 20px;
}

.mainmenu {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.footer {
  /* position: absolute;
    bottom: 5%; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.foott {
  position: absolute;
  bottom: 5%;
  width: 100%;
}

.cb {
  margin-top: 10%;
  display: flex;
  align-self: center;
}

.sett {
  position: absolute;
  width: 50%;
  bottom: 10%;
}

h1 {
  color: white;
  font-family: "Cyberpunk";
}
</style>
