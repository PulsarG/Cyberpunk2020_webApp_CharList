<template>
  <div class="modalreg" v-show="isShowReg" @click.stop="hideModal">
    <div @click.stop class="modalcontent">
      <input
        class="inp"
        v-model="user.login"
        type="text"
        id="login"
        autocomplete="off"
        placeholder="Login"
      />

      <input
        class="inp"
        type="email"
        v-model="user.email"
        placeholder="Email (необязательно)"
      />

      <input
        class="inp"
        v-model="pass"
        type="text"
        id="pass"
        autocomplete="off"
        placeholder="Password"
      />

      <button class="btnreg inp" @click="regUser">Зарегистрироваться</button>
    </div>
  </div>
</template>

<script>
import CryptoJS from "crypto-js";

export default {
  props: {
    isShowReg: Boolean,
  },
  data() {
    return {
      user: {
        login: "",
        passHash: "",
        email: "",
      },
      pass: "",
    };
  },

  methods: {
    regUser() {
      if (this.user.login == "" || this.user.passHash == "") {
        alert("Не введен Логин или Пароль");
      } else {
        this.user.passHash = CryptoJS.SHA256(this.pass).toString();
        this.pass = "";
        this.$store.dispatch("api/checkUser", this.user);
        this.hideModal();
      }
    },
    hideModal() {
      this.$emit("update:isShowReg", false);
    },
  }, // * end Methods
};
</script>

<style scoped>
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
  background: white;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  border: 3px solid black;
}

.inp {
  margin: 5px;
  border: none;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}
.btnreg {
  margin-top: 20px;
  background: none;
  cursor: pointer;
  border: 1px solid black;
}
</style>
