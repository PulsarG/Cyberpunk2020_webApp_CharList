<template>
  <div class="mainsession">
    <button
      @click="updateSession"
      class="update"
      title="Список Персонажей в вашей Сессии
Здесь рефери может смотреть и изменять
персонажей игроков.
Для этого каждый игрок должен отправить
своего персонажа при помощи
кнопки Присоединиться к сессии
в списке своих персонажей"
    >
      ОБНОВИТЬ СПИСОК
    </button>
    <div class="charslist">
      <div v-show="this.isShowInfoSession" class="urchars">
        <h3 style="color: orange">Список Персонажей в вашей Сессии</h3>
        <h3 style="color: orange">Здесь рефери может смотреть и изменять</h3>
        <h3 style="color: orange">персонажей игроков.</h3>
        <h3 style="color: orange">Для этого каждый игрок должен отправить</h3>
        <h3 style="color: orange">своего персонажа при помощи</h3>
        <h3 style="color: orange">кнопки "Присоединиться к сессии"</h3>
        <h3 style="color: orange">в списке своих персонажей</h3>
      </div>
      <div v-for="i in this.sessionChars" :key="i.user">
        <div class="onechar">
          <p class="redlabel" v-show="i.isRed">RED</p>
          <base-buttonslice class="btnchars" @click="getChar(i)"
            >{{ i.char }} ( {{ i.role }} )
          </base-buttonslice>
          <base-buttonneonred class="deletebtn" @click="deleteSessionChar(i)"
            >X</base-buttonneonred
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButtonslice from "@/components/BaseButtonslice.vue";
import BaseButtonneonred from "@/components/BaseButtonneonred.vue";
import BaseButtonneon from "@/components/BaseButtonneon.vue";
export default {
  components: {
    BaseButtonneonred,
    BaseButtonslice,
    BaseButtonneon,
  },
  data() {
    return {
      isShowInfoSession: true,
    };
  },
  computed: {
    sessionChars() {
      return this.$store.state.api.sessionChars;
    },
    oneSessionChar() {
      return this.$store.state.api.oneSessionChar[0];
    },
    isLoadSessionChar() {
      return this.$store.state.api.isLoadSessionChar;
    },
  },
  methods: {
    updateSession() {
      this.$store.dispatch("api/updateSession");
      this.setShowInfoSession();
    },
    getChar(i) {
      this.$store.dispatch("api/getSessionChar", i);
      this.$store.commit("api/setSessionCharAdress", i);
    },
    deleteSessionChar(i) {
      this.$store.dispatch("api/checkForDeleteSessionChar", i);
    },
    setShowInfoSession() {
      if (this.isShowInfoSession == true) {
        this.isShowInfoSession = false;
      }
    },
  },
  watch: {
    isLoadSessionChar(v) {
      if (v) this.$store.commit("setChar", this.oneSessionChar);
    },
  },
};
</script>

<style scoped>
.mainsession {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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

.update {
  width: 150px;
  background-color: inherit;
  color: yellow;
  cursor: pointer;
  border: 1px solid yellow;
  margin-top: 30px;
  font-family: "Ktf";
  font-size: 15px;
}
.update:hover {
  /* color: red; */
  /* box-shadow: 0 0 15px red; */
}
</style>
