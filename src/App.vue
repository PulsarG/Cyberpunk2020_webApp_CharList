<template>
  <nav>
    <div class="login">
      <form action="">
        <label for="login">Login</label>
        <input v-model="this.user.login" type="text" id="login">
        <label for="pass">Password</label>
        <input v-model="this.user.pass" type="text" id="pass">
        <button>Login</button>
      </form>
      <button class="btnreg" @click="regUser">Registry</button>
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
      user: {
        login: "",
        pass: ""
      }
    }
  },

  methods: {
    regUser() {
      if (this.user.login == "" || this.user.pass == "") {
        alert("Не введен Логин или Пароль")
      } else {
        try {
          axios.post("hhttps://cp2020-bcaf6-default-rtdb.europe-west1.firebasedatabase.app/user", {
            login: this.user.login,
            pass: this.user.pass
          });
        } catch (e) {
          alert(e);
        }
      }
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
