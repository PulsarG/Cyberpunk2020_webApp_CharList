<template>
  <div class="menu">
    <left-menu :Chars="Chars"></left-menu>
  </div>

  <div class="shopmenu" id="shop">
    <shop-menu></shop-menu>
  </div>

  <nav>
    <div class="login" v-show="!isLogin">
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
      <button @click="singUp">Войти</button>

      <button class="btnreg" @click="regUser">Регистрация</button>
    </div>

    <div class="loginin" v-show="isLogin">
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

  <router-view :Chars="Chars" :isLogin="isLogin"/>
</template>

<script>
import axios from "axios";

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
      isLogin: false,

      login: "",
      pass: "",

      Chars: [],

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

    async singUp() {
      try {
        const q = query(
          collection(db, "User"),
          where("pass", "==", this.pass),
          where("login", "==", this.login)
        );

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          this.items.push(doc.data());
        });
        console.log(this.items);
        if (this.items[0].isLogin) {
          this.isLogin = true;
        }
      } catch (e) {
        console.log(e);
      }

      if (this.isLogin) {
        localStorage.login = this.items[0].login;
        localStorage.isLogin = this.isLogin;
        this.setLogin();
        this.getChars(this.login);
        this.getCustoms(this.login);
      } else {
        alert("Не верные данные");
      }
    },

    logOut() {
      this.login = "";
      this.pass = "";
      this.isLogin = false;

      localStorage.removeItem("login");
      localStorage.removeItem("isLogin");
    },

    setLogin() {
      this.$store.commit("setLogin", this.login);
    },

    async getChars(l) {
      try {
        this.Chars.length = 0;
        const querySnapshot = await getDocs(collection(db, l));
        querySnapshot.forEach((doc) => {
          if (doc.id == "CustomShop") {
            return;
          }
          this.Chars.push(doc.data());
        });
      } catch (e) {
        alert(e);
      }
    },

    async getCustoms(l) {
      try {
        const docRef = doc(db, l, "CustomShop");
        const docSnap = await getDoc(docRef);

        let j = docSnap.data().Customcybernetics.length;
        for (let i = 0; i < j; i++) {
          let X = docSnap.data().Customcybernetics[i];
          this.$store.commit("addCustomCybernetics", X);
        }

        let k = docSnap.data().Customweapons.length;
        for (let i = 0; i < k; i++) {
          let Y = docSnap.data().Customweapons[i];
          this.$store.commit("addCustomWeapons", Y);
        }
      } catch (e) {
        alert(e);
      }
    },
  },

  computed: {
    isReloadChars() {
      return this.$store.state.isReloadChars;
    },
  },

  mounted() {
    if (localStorage.login) {
      this.login = localStorage.login;
      this.isLogin = localStorage.isLogin;
      this.setLogin();
      this.getChars(this.login);
      this.getCustoms(this.login);
    }
  },

  watch: {
    isReloadChars(v) {
      if (v) this.getChars(this.login);
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
