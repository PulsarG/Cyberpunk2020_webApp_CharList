<template>
  <div class="mainmenuchars">
    <modale-deletechar
      class="moddel"
      v-model:isShowDel="isShowDel"
      :nickCharForDelete="nickCharForDelete"
    >
    </modale-deletechar>

    <module-sendforsession
      class="moddel"
      v-model:isShowSendForSession="isShowSendForSession"
      :nickCharForSend="nickCharForSend"
      :roleCharForSend="roleCharForSend"
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
          <base-buttonneon
            class="btnsession"
            @click="sendCharForSession(i)"
            title="Присоединиться к сессии"
            >S</base-buttonneon
          >
          <base-buttonneonred class="deletebtn" @click="deleteChar(i)"
            >X</base-buttonneonred
          >
        </div>
      </div>
    </div>
    <button @click="updateList" class="update">ОБНОВИТЬ СПИСОК</button>
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
      nickCharForSend: "",
      roleCharForSend: "",
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
      this.$store.commit("api/setIsSessionChar", false);
    },

    deleteChar(i) {
      this.nickCharForDelete = i.Char.nick;
      this.isShowDel = true;
    },

    sendCharForSession(i) {
      this.nickCharForSend = i.Char.nick;
      this.roleCharForSend = i.Char.role;
      this.isShowSendForSession = true;
    },

    updateList() {
      this.$store.dispatch("api/getChars");
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
.mainmenuchars {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
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
  margin-left: 10px;
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
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  height: 450px;
  overflow: auto;
  margin-top: 20px;
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
.update {
  width: 150px;
  background-color: inherit;
  color: yellow;
  cursor: pointer;
  border: 1px solid yellow;
  font-family: "Ktf";
  font-size: 15px;
  margin: auto;
  /* margin-top: 30px; */
}
.btnsession {
  margin-left: 15px;
  color: orangered;
}
</style>
