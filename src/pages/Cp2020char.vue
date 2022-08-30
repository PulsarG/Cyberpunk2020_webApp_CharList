<template>
  <div class="fullcharlist" id="mainlist">
    <div class="save">
      <h3 v-show="!this.$store.state.api.isLoginIn">
        Зарегистрирйтесь, чтобы сохранить персонажей и кастомные вещи
      </h3>
      <button
        id="savebtn"
        v-show="this.$store.state.api.isLoginIn"
        @click="saveChar"
      >
        Сохранить / Обновить персонажа
      </button>
    </div>

    <div class="">
      <button class="btn" @click="openCharlist">Charlist</button>
      <div v-show="isOpenCharlist">
        <char-list></char-list>
      </div>
    </div>

    <div class="">
      <button class="btn" @click="openDeck">Deck</button>
      <div v-show="isOpenDeck">
        <deck-list></deck-list>
      </div>
    </div>
    <button @click="setWidth">SET WIDTH</button>
  </div>
</template>

<script>
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
      } else {
        this.isOpenCharlist = false;
      }
      /*   return this.isOpenCharlist */
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
  width: 50%;
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
