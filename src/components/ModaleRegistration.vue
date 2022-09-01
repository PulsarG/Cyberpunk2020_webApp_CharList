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
        v-model="user.pass"
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
export default {
  props: {
    isShowReg: Boolean,
  },
  data() {
    return {
      user: {
        login: "",
        pass: "",
        email: "",
      },
    };
  },
  methods: {
    regUser() {
      if (this.user.login == "" || this.user.pass == "") {
        alert("Не введен Логин или Пароль");
      } else {
        this.$store.dispatch("api/checkUser", this.user);
        this.hideModal();
      }
    },
    hideModal() {
      this.$emit("update:isShowReg", false);
    },
  },
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
}

.inp {
  margin: 5px;
}
</style>
