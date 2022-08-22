<template>
  <div class="fullcharlist" id="mainlist">
    <!-- <chars-block :Chars="Chars"></chars-block>

        <settings-block></settings-block> -->

    <!-- <div>
            <button class="btn" @click="openShop">Shop</button>
            <div class="shopmenu" v-show="isOpenShop">

                <button class="btnsm" @click="openCybershop">Cybernetics / Импланты</button>
                <div class="submenu" v-show="isCybershopOpen">
                    <cybernetics-shop></cybernetics-shop>
                </div>

                <button class="btnsm">Armor</button>
                <button class="btnsm">Weapons</button>
            </div>
        </div> -->

    <div class="save">
      <h3 v-show="!isLogin">
        Зарегистрирйтесь, чтобы сохранить персонажей и кастомные вещи
      </h3>
      <button v-show="isLogin" @click="saveChar">
        Сохранить / Обновить персонажа
      </button>
    </div>

    <div class="">
      <button class="btn" @click="openCharlist">Charlist</button>
      <div v-show="isOpenCharlist">
        <char-list :Char="Char"></char-list>
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
import { db } from "@/main";
import { setDoc, doc } from "firebase/firestore";

import CharList from "@/components/CharList.vue";
import DeckList from "@/components/DeckList.vue";
import SettingsBlock from "@/components/SettingsBlock.vue";
import CharsBlock from "@/components/CharsBlock.vue";

import CyberneticsShop from "@/shopcomponents/CyberneticsShop.vue";
import LeftMenuVue from "@/components/LeftMenu.vue";
import { booleanLiteral } from "@babel/types";

export default {
  components: {
    CharList,
    DeckList,
    CyberneticsShop,
    SettingsBlock,
    CharsBlock,
  },
  props: {
    isLogin: booleanLiteral,
  },
  data() {
    return {
      isOpenCharlist: true,
      isOpenDeck: false,

      /* isOpenShop: true,

            isCybershopOpen: false, */

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

    /* openShop() {
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
                this.isCybershopOpen = false
            }
        }, */

    setWidth() {
      if (this.setWidthcount) {
        document.getElementById("mainlist").style.width = "60%";
        this.setWidthcount -= 1;
      } else {
        document.getElementById("mainlist").style.width = "50%";
        this.setWidthcount += 1;
      }
    },

    async saveChar() {
      if (this.$store.state.Char.nick == "") {
        alert("Введине имя персонажа");
      } else {
        try {
          await setDoc(doc(db, this.login, this.$store.state.Char.nick), {
            Char: this.$store.state.Char,
            Role: this.$store.state.role,

            Stats: this.$store.state.Stats,
            Morestats: this.$store.state.Morestats,

            Skills: this.$store.state.skills,

            Cybernetics: this.$store.state.Cybernetics,
            Weapons: this.$store.state.Weapons,
          });

          alert("Сохранено");
          this.reloadChars(true);
        } catch (e) {
          alert(e);
        }
      }
    },

    reloadChars(b) {
      this.$store.commit("reloadChars", b);
    },
  },

  computed: {
    login() {
      return this.$store.state.login;
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
