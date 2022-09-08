<template>
  <div class="head">
    <div class="allstats">
      <nickname-char></nickname-char>
      <role-char></role-char>
      <div class="charpoints">
        <label
          for="charpoints"
          v-bind:class="{
            cplabel: !this.isTheme77,
            cplabelsecond: this.isTheme77,
          }"
          ><strong>CHARACTER POINTS</strong></label
        >
        <input
          type="number"
          id="charpoints"
          v-bind:class="{
            charpointsinput: !this.isTheme77,
            charpointsinputsecond: this.isTheme77,
          }"
          v-model="this.charpoints"
        />
      </div>
      <stats-char></stats-char>
      <armor-char></armor-char>
      <battle-points></battle-points>
    </div>

    <div class="photo">
      <div
        v-bind:class="{
          fotoimg: !this.isTheme77,
          fotoimgsecond: this.isTheme77,
        }"
      >
        <img
          :src="imgRole"
          v-show="isRole"
          alt="Упс. Картинки пока не доступны"
        />
      </div>
      <more-stats></more-stats>
    </div>
  </div>
</template>

<script>
import NicknameChar from "@/listcomponent/headcomponents/NicknameChar.vue";
import RoleChar from "@/listcomponent/headcomponents/RoleChar.vue";
import StatsChar from "@/listcomponent/headcomponents/StatsChar.vue";
import ArmorChar from "@/listcomponent/headcomponents/ArmorChar.vue";
import BattlePoints from "@/listcomponent/headcomponents/BattlePoints.vue";
import MoreStats from "@/listcomponent/headcomponents/MoreStats.vue";

export default {
  components: {
    NicknameChar,
    RoleChar,
    StatsChar,
    ArmorChar,
    BattlePoints,
    MoreStats,
  },
  props: {},
  data() {
    return {
      isRole: false,
      charpoints: "",
      inputName: "",

      link: "http://drive.google.com/uc?export=view&id=",
      imgRole: "https://klike.net/uploads/posts/2019-11/1572778667_3.jpg",
    };
  },
  methods: {
    setCPFromStore() {
      this.charpoints = this.$store.state.Char.charpoints;
    },
  },

  computed: {
    role() {
      return this.$store.state.role;
    },
    isLoadChar() {
      return this.$store.state.isLoadChar;
    },
    isTheme77() {
      return this.$store.state.isTheme77;
    },
  },
  watch: {
    charpoints(v) {
      this.$store.commit("setCP", v);
    },

    isLoadChar(v) {
      if (v) this.setCPFromStore();
    },

    role(v) {
      this.isRole = true;
      if (v == "Cop")
        this.imgRole = this.link + "1RX4eC1sC_94-9cf1meUzvbSIkUxiPjIS";
      else if (v == "Solo")
        this.imgRole = this.link + "1wTypQEq-VxxW91zsX_1d_QFrq66af0QK";
      else if (v == "Corpo")
        this.imgRole = this.link + "1XMuA8M-Ac8qzByoVcCMmJWSwQZD9IfFg";
      else if (v == "Fixer")
        this.imgRole = this.link + "1MugmfRIHp1HsgXfYf5lO7_6VQY4MSkds";
      else if (v == "Media")
        this.imgRole = this.link + "1Pd-SOSzdvSyD5Lt_L8SGhu_tNR5dJXgu";
      else if (v == "Netrunner")
        this.imgRole = this.link + "1JRrjeb5sI-CWHUU6MDGmCx6Uo9UkTOlx";
      else if (v == "Nomad")
        this.imgRole = this.link + "1AErgQolD-4_DJoVoZJJaEHUKWqAlVKTk";
      else if (v == "Rocker")
        this.imgRole = this.link + "1k9x0iVcK-vNRV3ZDHveZqY5eJFgf_ylo";
      else if (v == "Techie" || v == "Medtechie")
        this.imgRole = this.link + "1gNUQ0j4T3lRIhJ1jYzRvy7JhlWM0jPiv";
    },
  },
};
</script>

<style scoped>
.photo {
  display: flex;
  flex-direction: column;
  width: 490px;
  margin-left: 3px;
  align-items: center;
  justify-content: center;
}

.fotoimg {
  border: 5px solid black;
  border-radius: 5%;
  height: 70%;
  display: flex;
  width: 70%;
  justify-content: center;
  align-items: center;
  background-color: #e4dbbf;
  border: 1px solid #383127;
  color: #383127;
}
.fotoimgsecond {
  border: 5px solid black;
  border-radius: 5%;
  height: 70%;
  display: flex;
  width: 70%;
  justify-content: center;
  align-items: center;
  background-color: none;
  border: 1px solid #383127;
  color: #383127;
}

img {
  width: 70%;
  height: 70%;
  margin: auto;
  background-color: none;
}

@media (max-width: 1000px) {
  .head {
    flex-direction: row;
  }
}
@media (max-width: 999px) {
  .head {
    flex-direction: column;
    align-items: center;
    max-width: 500px;
  }
}
@media (max-width: 500px) {
  .head {
    flex-direction: column;
    align-items: center;
  }
  .allstats {
    max-width: 350px;
  }
  .photo {
    max-width: 350px;
  }
}

.head {
  max-width: 1000px;
  display: flex;
  /* flex-direction: row; */
  height: auto;
  margin: auto;
}

.allstats {
  width: 500px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

.charpoints {
  margin-top: 3px;
  width: 100%;
  display: flex;
  align-items: center;
}

.cplabel {
  background-color: black;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.cplabelsecond {
  background-color: none;
  width: 60%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: red;
  font-family: "Qore";
  font-size: 20px;
}

.charpointsinput {
  width: 10%;
  height: 25px;
  background-color: #e4dbbf;
  border: 1px solid #383127;
  color: #383127;
  text-align: center;
}
.charpointsinputsecond {
  width: 10%;
  height: 25px;
  background-color: inherit;
  border: 1px solid #383127;
  color: #00ccff;
  text-align: center;
}
</style>
