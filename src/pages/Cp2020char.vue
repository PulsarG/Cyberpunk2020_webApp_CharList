<template>
  <div class="fullcharlist" id="mainlist">
    <div class="save">
      <h3 v-show="!this.$store.state.api.isLoginIn">
        Зарегистрирйтесь, чтобы сохранить персонажей и кастомные вещи
      </h3>

      <base-buttonneon
        id="savebtn"
        v-show="this.$store.state.api.isLoginIn"
        @click="saveChar"
      >
        Сохранить / Обновить персонажа</base-buttonneon
      >
      <!-- <button
        id="savebtn"
        v-show="this.$store.state.api.isLoginIn"
        @click="saveChar"
      >
        Сохранить / Обновить персонажа
      </button> -->
    </div>

    <div class="">
      <button class="btn" @click="openCharlist">Charlist</button>
      <transition name="slide-fade">
        <char-list
          class="hero glitch layers"
          v-show="isOpenCharlist"
        ></char-list>
      </transition>
    </div>

    <div class="">
      <button class="btn" @click="openDeck">Deck</button>
      <div v-show="isOpenDeck">
        <deck-list></deck-list>
      </div>
    </div>
    <!-- <button @click="setWidth">SET WIDTH</button> -->
  </div>
</template>

<script>
import BaseButtonneon from "@/components/BaseButtonneon.vue";
import CharList from "@/components/CharList.vue";
import DeckList from "@/components/DeckList.vue";
import SettingsBlock from "@/components/SettingsBlock.vue";
import CharsBlock from "@/components/CharsBlock.vue";

import CyberneticsShop from "@/shopcomponents/CyberneticsShop.vue";

export default {
  components: {
    CharList,
    DeckList,
    CyberneticsShop,
    SettingsBlock,
    CharsBlock,
    BaseButtonneon,
  },
  data() {
    return {
      isOpenCharlist: true,
      isOpenDeck: false,

      setWidthcount: 1,
    };
  },
  methods: {
    openCharlist() {
      if (!this.isOpenCharlist) {
        this.isOpenCharlist = true;
        /* document.getElementById("char").slideToggle(300); */
      } else {
        this.isOpenCharlist = false;
      }
      return this.isOpenCharlist;
    },

    openDeck() {
      if (!this.isOpenDeck) {
        this.isOpenDeck = true;
      } else {
        this.isOpenDeck = false;
      }
    },

    setWidth() {
      if (this.setWidthcount) {
        document.getElementById("mainlist").style.width = "60%";
        this.setWidthcount -= 1;
      } else {
        document.getElementById("mainlist").style.width = "50%";
        this.setWidthcount += 1;
      }
    },

    saveChar() {
      try {
        this.$store.dispatch("api/saveChar");
      } catch (e) {
        console.log(e);
      }
      let btn = document.getElementById("savebtn");
      btn.setAttribute("disabled", true);

      setTimeout(() => {
        btn.removeAttribute("disabled");
      }, 5000);
    },
  },
};
</script>

<style scoped>
 

.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(40px);
  opacity: 0;
}
/* .charlist {
  max-height: 0;
  overflow: hidden;
  transition: all 0.5s ease-out;
  will-change: auto;
} */
.save {
  display: flex;
  margin: auto;
  align-self: center;
  justify-self: center;
  margin-bottom: 3px;
}

.fullcharlist {
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  /*  justify-self: center; */
  align-self: center;
  margin: auto;
}

.btn {
  height: 30px;
  width: 100%;
  margin-bottom: 3%;
  border: none;
}

.shopmenu {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
