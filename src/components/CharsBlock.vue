<template>
  <div class="mainmenu">
    <modale-deletechar
      class="moddel"
      v-model:isShowDel="isShowDel"
      :nickCharForDelete="nickCharForDelete"
    >
    </modale-deletechar>

    <module-sendforsession
      class="moddel"
      v-model:isShowSendForSession="isShowSendForSession"
    ></module-sendforsession>

    <div class="charslist" v-show="isOpenSettings">
      <div class="urchars" v-show="isEmptyList">
        <h2 style="color: orange">Список ваших Персонажей</h2>
      </div>
      <div v-for="i in this.$store.state.api.Chars" :key="i.nick">
        <div class="onechar">
          <p class="redlabel" v-show="i.isRed">RED</p>
          <base-buttonslice class="btnchars" @click="setChar(i)"
            >{{ i.Char.nick }} ( {{ i.Char.role }} )
          </base-buttonslice>
          <base-buttonneon class="btnsession" @click="sendCharForSession()"
            >S</base-buttonneon
          >
          <base-buttonneonred class="deletebtn" @click="deleteChar(i)"
            >X</base-buttonneonred
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButtonslice from "@/components/BaseButtonslice.vue";
import ModaleDeletechar from "@/components/ModaleDeletechar.vue";
import BaseButtonneonred from "@/components/BaseButtonneonred.vue";
import BaseButtonneon from "@/components/BaseButtonneon.vue";
import ModuleSendforsession from "@/components/ModuleSendforsession.vue";
export default {
  components: {
    ModaleDeletechar,
    BaseButtonneonred,
    BaseButtonslice,
    BaseButtonneon,
    ModuleSendforsession,
  },
  data() {
    return {
      isOpenSettings: true,
      isShowDel: false,
      isShowSendForSession: false,
      nickCharForDelete: "",
      isEmptyList: true,
    };
  },

  methods: {
    openSettings() {
      if (!this.isOpenSettings) {
        this.isOpenSettings = true;
      } else {
        this.isOpenSettings = false;
      }
    },

    setChar(i) {
      if (i.isRed) {
        this.$store.commit("red/setRedChar", i);
      } else {
        this.$store.commit("setChar", i);
      }
    },

    deleteChar(i) {
      this.nickCharForDelete = i.Char.nick;
      this.isShowDel = true;
    },

    sendCharForSession() {
      this.isShowSendForSession = true;
    },
  },

  computed: {
    Chars() {
      return this.$store.state.api.Chars;
    },
    CharsLength() {
      return this.$store.state.api.Chars.length;
    },
  },
  watch: {
    CharsLength(v) {
      if (v != 0) {
        this.isEmptyList = false;
      } else {
        this.isEmptyList = true;
      }
    },
  },
};
</script>

<style scoped>
.mainmenu {
  display: flex;
  flex-direction: column;
}

.btn {
  height: 30px;
}

.btnchars {
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 550px;
  font-family: "Qore";
  text-transform: uppercase;
  z-index: initial;
}

.deletebtn {
  margin-left: 30px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  border: none;
}
.moddel {
  z-index: 1;
}

.charslist {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: auto;
  height: 50vh;
}
.charslist::-webkit-scrollbar {
  width: 0;
}

.onechar {
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
  justify-content: space-between;
}
.redlabel {
  color: red;
  margin-left: 0;
}

.urchars {
  text-align: center;
}
.charslist::-webkit-scrollbar {
  width: 10px;
}

.charslist::-webkit-scrollbar-track {
  -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
  background-color: rgb(255, 0, 0);
  border-radius: 10px;
}

.charslist::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: orange;
}
</style>
