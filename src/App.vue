<template>
  <nav>
    <div class="login" v-show="!isLogin">

      <label for="login">Login</label>
      <input v-model="login" type="text" id="login">
      <label for="pass">Password</label>
      <input v-model="pass" type="text" id="pass">
      <button @click="singUp">Login</button>

      <button class="btnreg" @click="regUser">Registry</button>
    </div>

    <div class="login" v-show="isLogin">
      <h1>{{ this.login }}</h1>
    </div>


    <div class="links">
      <div class="ver">
        <a href="">
          ver 0.9.053022
        </a>
      </div>
      <div class="comunity">
        <h4>Ru-Community</h4>

        <a href="https://vk.com/cyberpunk2020"><img class="vklogo" src="@/assets/vk.png" alt=""></a>

        <a href="https://discord.gg/PPpHEzf67H"><img class="dislogo" src="@/assets/Diskord-logo.png" alt=""></a>

      </div>
    </div>

  </nav>
  <router-link to="/">Home</router-link> |
  <router-view />
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      isLogin: false,

      login: "",
      pass: "",

      Users: [],
    }
  },

  methods: {
    async regUser() {
      if (this.login == "" || this.pass == "") {
        alert("Не введен Логин или Пароль")
      } else {
        try {
          await axios.post("https://cp2020-bcaf6-default-rtdb.europe-west1.firebasedatabase.app/user.json", {
            login: this.login,
            pass: this.pass
          });
          alert("Регистрация прошла успешно");
        } catch (e) {
          alert(e);
        }
        this.login = "";
        this.pass = "";
      }
    },


    singUp() {
      this.loadUsersDb();

      setTimeout(() => {
        for (var i in this.Users) {
          console.log(this.Users[i].login);

          if (this.Users[i].login == this.login) {
            this.isLogin = true;

            // добавить функцию персонажей у Юзера   this.getChars(this.login)

            break;
          }

        };
      }, 1000)
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
          });

      } catch (e) {
        alert(e);
      };
    }
  },

  /* watch: {
    login(v) {
      this.loadUsersDb();
    }
  } */
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

.btnreg {
  height: 27%;
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
</style>
