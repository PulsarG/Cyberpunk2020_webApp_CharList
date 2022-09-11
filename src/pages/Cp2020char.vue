<template>
  <div class="fullcharlist" id="mainlist">
    <div class="save">
      <h3 v-show="!this.$store.state.api.isLoginIn">
        Зарегистрируйтесь, чтобы сохранить персонажей и кастомные вещи
      </h3>
      <base-buttonborder
        class="bbsave"
        id="savebtn"
        v-show="this.$store.state.api.isLoginIn"
        @click="saveChar"
      ></base-buttonborder>
    </div>

    <div class="">
      <div class="btn">
        <button class="btnlist" @click="openCharlist"><p>Charlist</p></button>
        <button class="btnclear" @click="clearList">
          <p class="cleartext">Очистить лист</p>
        </button>
      </div>
      <transition name="slide-fade">
        <char-list
          class="hero glitch layers"
          v-show="isOpenCharlist"
        ></char-list>
      </transition>
    </div>

    <div class="deck">
      <button class="btnlist" @click="openDeck"><p>Deck (soon)</p></button>
      <div v-show="isOpenDeck">
        <deck-list></deck-list>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButtonborder from "@/components/BaseButtonborder.vue";
import BaseButtonglitch from "@/components/BaseButtonglitch.vue";
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
    BaseButtonglitch,
    BaseButtonborder,
  },
  data() {
    return {
      isOpenCharlist: true,
      isOpenDeck: false,

      setWidthcount: 1,
    };
  },
  computed: {
    AmountChars() {
      return this.$store.state.api.Chars.length;
    },
  },
  methods: {
    openCharlist() {
      if (!this.isOpenCharlist) {
        this.isOpenCharlist = true;
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

    checkCanSave() {
      for (let i = 0; i < this.$store.state.api.Chars.length; i++) {
        if (
          this.$store.state.api.CONTROL_Chars[i] == this.$store.state.Char.nick
        )
          return true;
      }
      return false;
    },

    saveChar() {
      if (
        this.$store.state.api.isPondsmith ||
        this.AmountChars < 5 ||
        this.checkCanSave()
      ) {
        this.$store.dispatch("api/saveChar");
      } else if (this.AmountChars >= 5 && !this.$store.state.api.isPondsmith) {
        alert("Нет свободных ячеек для персонажей");
        this.$store.dispatch("api/getChars");
      }
      this.disableButtonSave();
    },

    disableButtonSave() {
      let btn = document.getElementById("savebtn");
      btn.setAttribute("disabled", true);

      setTimeout(() => {
        btn.removeAttribute("disabled");
      }, 5000);
    },

    clearList() {
      location.reload();
    },
  },
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: 0.5s;
}

.slide-fade-leave-active {
  transition: 0.5s;
}

.slide-fade-enter-from {
  transform: translateY(-10px);
  opacity: 1;
}
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.save {
  margin: auto;
  margin-bottom: 3px;
}

.fullcharlist {
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  align-self: center;
  margin: auto;
}
.btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btnlist {
  height: 30px;
  width: 80%;
  margin-bottom: 20px;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  cursor: pointer;
  margin-top: 10px;
}
.btnclear {
  height: 30px;
  width: 15%;
  margin-bottom: 20px;
  border: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: none;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  cursor: pointer;
  margin-top: 10px;
}

.cleartext {
  font-family: "Ktf";
  font-size: 18px;
}
@media (max-width: 950px){
  .cleartext {
    font-size: 12px;
  }
}

.deck {
  margin-top: 10px;
}

p {
  font-size: 20px;
  font-family: "Qore";
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

.bbsave {
  background: none;
}
</style>
