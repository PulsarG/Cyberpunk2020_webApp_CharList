<template>
  <div class="modalreg" v-show="isShowSendForSession" @click.stop="hideModal">
    <div @click.stop class="modalcontent">
      <div class="textforsend">
        <h4>
          Введите ЛОГИН вашего Рефери <br />
          (Гейм Мастера) <br />
          для отправки данного персонажа
        </h4>
      </div>
      <div class="nick">
        <input
          class="inpreferi"
          type="text"
          placeholder="Логин рефери"
          v-model="this.masterLogin"
        />
      </div>
      <div class="btns">
        <div>
          <base-buttonneonred
            class="btn"
            style="color: orange"
            @click="sendChar"
            >Отправить</base-buttonneonred
          >
        </div>
        <div>
          <base-buttonneonred
            class="btn"
            style="color: orange"
            @click.stop="hideModal"
            >Закрыть</base-buttonneonred
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButtonneonred from "@/components/BaseButtonneonred.vue";
export default {
  components: { BaseButtonneonred },
  props: {
    isShowSendForSession: Boolean,
  },
  data() {
    return {
      masterLogin: "",
    };
  },
  methods: {
    sendChar() {
      this.$store.dispatch("api/findMaster", this.masterLogin);
      this.hideModal();
    },
    hideModal() {
      this.$emit("update:isShowSendForSession", false);
      this.masterLogin = "";
    },
  },
};
</script>

<style scoped>
.nick {
  margin-top: -30px;
}
h4 {
  font-family: "Ktf";
  font-size: 15x;
  color: orange;
}
.modalreg {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}
.modalcontent {
  margin: auto;
  background: black;
  height: 300px;
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 10px solid red;
  box-shadow: 0 0 50px red;
}

.btns {
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.btn {
  font-family: "Ktf";
  width: 120px;
  height: 50px;
  font-size: 20px;
}

.textforsend {
  text-align: center;
}
.inpreferi {
  text-align: center;
  height: 30px;
  font-size: 25px;
}
</style>
