<template>
  <div class="mainsession">
    <button @click="updateSession">UPDATE SESSION</button>
    <div class="charslist">
      <div class="urchars">
        <h2 style="color: orange">Список Персонажей в вашей Сессии</h2>
      </div>
      <div v-for="i in this.sessionChars" :key="i.user">
        <div class="onechar">
          <p class="redlabel" v-show="i.isRed">RED</p>
          <base-buttonslice class="btnchars" @click="getChar(i)"
            >{{ i.user }} ( {{ i.char }} )
          </base-buttonslice>
          <base-buttonneonred class="deletebtn">X</base-buttonneonred>
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
    },
    getChar(i) {
      this.$store.dispatch("api/getSessionChar", i);
      this.$store.commit("api/setSessionCharAdress", i);
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
  flex-direction: column;
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
</style>
