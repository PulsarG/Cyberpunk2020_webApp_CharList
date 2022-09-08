<template>
  <div
    v-bind:class="{ apppmaincolor: !this.isTheme77, apppsecondcolor: this.isTheme77 }"
    id="mainap"
  >
    <div class="menu">
      <left-menu></left-menu>
      <!-- <shop-menu></shop-menu> -->
    </div>

    <!-- <div class="shopmenu" id="shop">
      <shop-menu></shop-menu>
    </div> -->

    <nav>
      <div class="login" v-show="!this.$store.state.api.isLoginIn">
        <!-- <label for="login">Login</label> -->
        <input
          class="inplogin"
          v-model="login"
          type="text"
          id="login"
          autocomplete="off"
          placeholder="Login"
        />
        <!--  <label for="pass">Password</label> -->
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
          <a href=""> ver 0.9.019.3 </a>
        </div>
        <div class="comunity">
          <h4>Ru-Community_</h4>

          <a class="aa" href="https://vk.com/cyberpunk2020"
            ><img class="vklogo" src="@/assets/vk.png" alt=""
          /></a>

          <a class="aaa" href="https://discord.gg/PPpHEzf67H"
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
      /* if (this.login == "" || this.pass == "") {
        alert("Не введен Логин или Пароль");
      } else {
        try {
          addDoc(collection(db, "User"), {
            login: this.login,
            pass: this.pass,
            email: "",
            isLogin: true,
          });
          alert("Регистрация прошла успешно");
        } catch (e) {
          alert(e);
        }
        this.login = "";
        this.pass = "";
      } */
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
  /* background: linear-gradient(rgb(139, 1, 1), 5%, black); */
  /* background-color: #ad8fe4; */
  /* background-color: #e4dbbf; */
  background: #e4dbbf;
}
.apppsecondcolor {
  background: linear-gradient(rgb(139, 1, 1), 5%, black);
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
  justify-content: space-between;
  transition: 0.5s;
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
}

.links {
  width: 330px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}
.hiname {
  font-family: "Qore";
  /* text-shadow: 0px 0px 30px red; */
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
  width: 100%;
  justify-content: flex-end;
  align-items: center;
}

.vklogo {
  width: 100%;
  border-radius: 50%;
}

a {
  width: 10%;
  border-radius: 50%;
}

.dislogo {
  width: 110%;
  margin-left: 3px;
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
  transform: translateX(
    -98%
  ); /*   !!! позиция изменена на время редактирования с -97% */
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
}

/* @media (max-width: 1919px) {
  .menu:hover ~ .router {
    transform: translateX(0);
  }
} */

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

/* .shopmenu {
  width: 600px;
  position: fixed;
  height: 100vh;
  border-left: 20px solid red;
  transition: all 0.2s ease;
  background: rgb(255, 255, 255);
  transform: translate(100%);
}

.shopmenu:hover {
  right: 0;
  transform: translate(200%);
} */
</style>
