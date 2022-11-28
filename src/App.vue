<template>
  <div
    v-bind:class="{
      apppmaincolor: !this.isTheme77,
      apppsecondcolor: this.isTheme77,
    }"
    id="mainap"
  >
    <div class="menu" id="menu" v-show="this.$store.state.isShowMenu">
      <left-menu></left-menu>
    </div>

    <nav>
      <div class="login" v-show="!this.$store.state.api.isLoginIn">
        <input
          class="inplogin"
          v-model="login"
          type="text"
          id="login"
          autocomplete="off"
          placeholder="Login"
        />
        <input
          class="inppass"
          v-model="pass"
          type="text"
          id="pass"
          autocomplete="off"
          placeholder="Password"
        />
        <button
          class="loginbtn"
          @click="
            this.$store.dispatch('api/LoginIn', {
              login: this.login,
              pass: this.pass,
            })
          "
        >
          Войти
        </button>

        <modale-registration
          v-model:isShowReg="isShowReg"
        ></modale-registration>

        <button class="btnreg" @click="showModuleReg">Регистрация</button>
      </div>

      <div class="loginin" v-show="this.$store.state.api.isLoginIn">
        <h1 class="hiname">{{ this.login }}</h1>
        <form action="">
          <button class="exitbtn" @click="logOut">Выход</button>
        </form>
      </div>

      <div class="links">
        <div class="ver">
          <button
            class="btnversion"
            @click="
              $router.push('/news');
              this.$store.commit('setShowMenu', false);
            "
          >
           Новости разработки ver 0.9.026.4 от 18.09.22
          </button>
        </div>
        <div class="comunity">
          <h4>Ru-Community_</h4>

          <a class="aa" href="https://vk.com/cyberpunk2020" target="_blank"
            ><img class="vklogo" src="@/assets/vk.png" alt=""
          /></a>

          <a class="aaa" href="https://discord.gg/PPpHEzf67H" target="_blank"
            ><img class="dislogo" src="@/assets/dsl.png" alt=""
          /></a>
        </div>
      </div>
    </nav>

    <router-view class="router" />
  </div>
</template>

<script>
import ModaleRegistration from "@/components/ModaleRegistration.vue";
import LeftMenu from "@/components/LeftMenu.vue";

export default {
  components: { LeftMenu, ModaleRegistration },
  data() {
    return {
      login: "",
      pass: "",

      Customs: [],

      items: [],

      isShowReg: false,
    };
  },

  methods: {
    showModuleReg() {
      this.isShowReg = true;
    },

    logOut() {
      this.login = "";
      this.pass = "";
      this.$store.commit("api/setIsLoginIn", false);

      localStorage.removeItem("login");
      localStorage.removeItem("isLogin");
      localStorage.removeItem("userId");
      localStorage.removeItem("pond");
    },

    setLogin() {
      this.$store.commit("setLogin", this.login);
    },

    getChars(l) {
      this.$store.dispatch("api/getChars", l);
    },

    getCustoms(l) {
      this.$store.dispatch("api/getCustoms");
    },
  },

  computed: {
    isLoginIn() {
      return this.$store.state.api.isLoginIn;
    },
    codePondValid() {
      return this.$store.state.api.isPondsmith;
    },
    isTheme77() {
      return this.$store.state.isTheme77;
    },
    isLockMenu() {
      return this.$store.state.isLockMenu;
    },
  },

  mounted() {
    if (localStorage.login) {
      this.login = localStorage.login;
      this.$store.commit("api/setIsLoginIn", localStorage.isLogin);
      this.$store.commit("api/setUserId", localStorage.userId);
    }
    if (localStorage.pond) {
      this.$store.commit("api/setPondsmith");
    }
  },

  watch: {
    isLoginIn(v) {
      if (v) {
        localStorage.login = this.login;
        localStorage.isLogin = true;
        localStorage.userId = this.$store.state.api.userId;
        this.setLogin();
        this.getChars();
        this.getCustoms();
      }
    },
    codePondValid(v) {
      if (v) {
        localStorage.pond = v;
      }
    },
  },
};
</script>

<style scoped>
.apppmaincolor {
  background: #e4dbbf;
}
.apppsecondcolor {
  background: linear-gradient(rgb(128, 14, 14), 20%, rgb(6, 2, 66));
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  max-width: 1000px;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  transition: 0.5s;
  padding: 0 15px;
}
@media (max-width: 1100px) {
  nav {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .loginin {
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 555px) {
  nav {
    width: none;
  }
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

input {
  border: none;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}
.inppass {
  margin-left: 10px;
  background: none;
}
.inplogin {
  background: none;
}

.loginbtn {
  margin-left: 10px;
  border: none;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  background: none;
}

.login {
  display: flex;
  flex-direction: row;
  height: 50%;
  max-width: 1000px;
  margin-top: 10px;
}

.loginin {
  display: flex;
  flex-direction: column;
  height: 50%;
}

.btnreg {
  height: 27%;
  margin-left: 3%;
  background: none;
  cursor: pointer;
}

.links {
  width: 450px;
  height: auto;
  display: flex;
  /*  flex-direction: column; */
  justify-content: center;
  align-items: center;
  justify-content: space-around;
}
.hiname {
  font-family: "Qore";
  color: rgb(255, 0, 0);
}
h4 {
  width: auto;
  font-family: "Qore";
}

.ver {
  width: auto;
}

.comunity {
  display: flex;
  flex-direction: row;
  max-width: 300px;
  justify-content: flex-end;
  align-items: center;
}

.vklogo {
  width: 30px;
  border-radius: 50%;
}

a {
  width: 10%;
  border-radius: 50%;
}

.btnversion {
  background: none;
  border: none;
  cursor: pointer;
  border-bottom: 1px solid black;
  width: 160px;
}

.dislogo {
  width: 30px;
  margin-left: 10px;
  border-radius: 50%;
}

.exitbtn {
  border: none;
  background: none;
  margin-bottom: 5px;
}

.menu {
  width: 700px;
  position: fixed;
  height: 100vh;
  border-right: 20px solid red;
  border-left: 15px solid red;
  transition: 0.5s;
  background: rgba(20, 20, 20, 1);
  transform: translateX(-98%);
  z-index: 99;
}

.menu:hover {
  left: 0;
  transform: translateX(0%);
}

.menu:hover ~ .router {
  transform: translateX(400px);
}
.menu:hover ~ nav {
  transform: translateX(400px);
}

.router {
  transition: 0.5s;
  z-index: 0;
  padding: 0 15px;
}

.exitbtn:hover {
  color: red;
  transition: 0.5s;
  text-shadow: 0px 0px 30px red;
}
img:hover {
  border-radius: 50%;
  color: red;
  transition: 0.5s;
  box-shadow: 0px 0px 30px blue;
}
</style>
