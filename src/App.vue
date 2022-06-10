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
      <input v-model="login" type="text" id="login" autocomplete="off" placeholder="login">
      <!--  <label for="pass">Password</label> -->
      <input v-model="pass" type="text" id="pass" autocomplete="off" placeholder="password">
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
        <a href="">
          ver 0.9.220610:5
        </a>
      </div>
      <div class="comunity">
        <h4>Ru-Community</h4>

        <a href="https://vk.com/cyberpunk2020"><img class="vklogo" src="@/assets/vk.png" alt=""></a>

        <a href="https://discord.gg/PPpHEzf67H"><img class="dislogo" src="@/assets/Diskord-logo.png" alt=""></a>

      </div>
    </div>
  </nav>

  <router-view :Chars="Chars" />
</template>

<script>
import axios from 'axios'

import LeftMenu from "@/components/LeftMenu.vue";
import ShopMenu from './components/ShopMenu.vue';

export default {
  components: { LeftMenu, ShopMenu },
  data() {
    return {
      isLogin: false,

      login: "",
      pass: "",

      Users: [],

      Chars: [],

      ii: 0,
    }
  },

  methods: {
    async regUser() {
      if (this.login == "" || this.pass == "") {
        alert("Не введен Логин или Пароль")
      } else {

        this.loadUsersDb()
        setTimeout(() => {
          for (var i in this.Users) {

            if (this.Users[i].login == this.login) {
              alert("Такой Логин существует");
              return
            }

          }

          try {
            axios.post("https://cp2020-bcaf6-default-rtdb.europe-west1.firebasedatabase.app/user.json", {
              login: this.login,
              pass: this.pass
            });
            alert("Регистрация прошла успешно");
          } catch (e) {
            alert(e);
          }
          this.login = "";
          this.pass = "";
        }, 1000)

      }
      this.Users.length = 0;
    },


    singUp() {
      let L = this.loadUsersDb()

      if (L == 0)
        return;

      setTimeout(() => {
        for (var i in this.Users) {

          if (this.Users[i].login == this.login) {

            if (this.Users[i].pass == this.pass) {
              this.isLogin = true;

              this.getChars(this.login);
              this.setLogin();

            } else {
              alert("Неверный пароль");
              this.pass = "";
              return
            }

            break;
          }
        };
        if (!this.isLogin) {
          alert("Не верный или не существующий Логин");
          this.login = "";
          this.pass = "";
        }
      }, 1000)
      this.Users.length = 0;

    },

    async loadUsersDb() {
      try {
        await axios.get("https://cp2020-bcaf6-default-rtdb.europe-west1.firebasedatabase.app/user.json")
          .then((response) => {
            let array = [];
            for (var i in response.data)
              array.push([i, response.data[i]]);
            let j = array.length;
            for (let i = 0; i < j; i++) {
              this.Users.push(array[i][1]);
            }
            console.log(this.Users)
          });
      } catch (e) {
        alert("База данных сейчас недоступна. Извините");
        alert(e);
        return 0;
      };
    },

    logOut() {
      this.login = "";
      this.pass = "";
      this.isLogin = false;
    },

    setLogin() {
      this.$store.commit('setLogin', this.login)
    },

    async getChars(l) {
      try {
        await axios.get("https://cp2020-bcaf6-default-rtdb.europe-west1.firebasedatabase.app/" + l + ".json")
          .then((response) => {
            let array = [];
            for (var i in response.data)
              array.push([i, response.data[i]]);
            let j = array.length;
            this.Chars.length = 0;
            for (let i = 0; i < j; i++) {
              this.Chars.push(array[i][1]);
            }
          });

      } catch (e) {
        alert(e);
      };
      /* console.log(this.Char[1]) */
    },

  },

  computed: {
    isReloadChars() {
      return this.$store.state.isReloadChars;
    }
  },

  watch: {
    isReloadChars(v) {
      if (v)
        this.getChars(this.login);
    }
  }
}
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
  display: flex;
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
