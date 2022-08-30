<template>
  <div class="menu">
    <left-menu></left-menu>
  </div>

  <div class="shopmenu" id="shop">
    <shop-menu></shop-menu>
  </div>

  <nav>
    <div class="login" v-show="!this.$store.state.api.isLoginIn">
      <!-- <label for="login">Login</label> -->
      <input
        v-model="login"
        type="text"
        id="login"
        autocomplete="off"
        placeholder="login"
      />
      <!--  <label for="pass">Password</label> -->
      <input
        v-model="pass"
        type="text"
        id="pass"
        autocomplete="off"
        placeholder="password"
      />
      <button
        @click="
          this.$store.dispatch('api/LoginIn', {
            login: this.login,
            pass: this.pass,
          })
        "
      >
        Войти
      </button>

      <button class="btnreg" @click="regUser">Регистрация</button>
    </div>

    <div class="loginin" v-show="this.$store.state.api.isLoginIn">
      <h1>Привет, {{ this.login }}</h1>
      <form action="">
        <button class="exitbtn" @click="logOut">Выход</button>
      </form>
    </div>

    <div class="links">
      <div class="ver">
        <a href=""> ver 0.9.220822:1 </a>
      </div>
      <div class="comunity">
        <h4>Ru-Community</h4>

        <a href="https://vk.com/cyberpunk2020"
          ><img class="vklogo" src="@/assets/vk.png" alt=""
        /></a>

        <a href="https://discord.gg/PPpHEzf67H"
          ><img class="dislogo" src="@/assets/Diskord-logo.png" alt=""
        /></a>
      </div>
    </div>
  </nav>

  <router-view />
</template>

<script>
import { db } from "@/main";
import {
  collection,
  getDocs,
  setDoc,
  addDoc,
  doc,
  getDoc,
  deleteDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

import LeftMenu from "@/components/LeftMenu.vue";
import ShopMenu from "./components/ShopMenu.vue";

export default {
  components: { LeftMenu, ShopMenu },
  data() {
    return {
      login: "",
      pass: "",

      Customs: [],

      items: [],
    };
  },

  methods: {
    async regUser() {
      if (this.login == "" || this.pass == "") {
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
      }
    },

    logOut() {
      this.login = "";
      this.pass = "";
      this.$store.commit("api/setIsLoginIn", false);

      localStorage.removeItem("login");
      localStorage.removeItem("isLogin");
    },

    setLogin() {
      this.$store.commit("setLogin", this.login);
    },

    getChars(l) {
      this.$store.dispatch("api/getChars", l);
    },

    getCustoms(l) {
      this.$store.dispatch("api/getCustoms")
    },
  },

  computed: {
    isLoginIn() {
      return this.$store.state.api.isLoginIn;
    },
  },

  mounted() {
    if (localStorage.login) {
      this.login = localStorage.login;
      this.$store.commit("api/setIsLoginIn", localStorage.isLogin);
    }
  },

  watch: {
    isLoginIn(v) {
      if (v) {
        localStorage.login = this.login;
        localStorage.isLogin = true;
        this.setLogin();
        this.getChars();
        this.getCustoms(this.login);
      }
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.login {
  display: flex;
  flex-direction: row;
  height: 50%;
}

.loginin {
  display: flex;
  flex-direction: column;
  height: 50%;
}

.btnreg {
  height: 27%;
  margin-left: 3%;
}

.links {
  width: 30%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}

h4 {
  width: auto;
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
}

a {
  width: 10%;
}

.dislogo {
  width: 125%;
}

.exitbtn {
  border: none;
  background: none;
  margin-bottom: 5px;
}

.menu {
  width: 15%;
  position: fixed;
  height: 100vh;
  border-right: 20px solid red;
  left: -280px;
  transition: all 0.2s ease;
  background: rgba(20, 20, 20, 0.9);
}

.menu:hover {
  left: 0;
  transition: all 0.2s ease;
}

.shopmenu {
  width: 50%;
  position: fixed;
  height: 100vh;
  border-left: 20px solid red;
  right: -950px;
  transition: all 0.2s ease;
  background: rgb(255, 255, 255);
  /* overflow: auto; */
}

.shopmenu:hover {
  right: 0;
  transition: all 0.2s ease;
}
</style>
