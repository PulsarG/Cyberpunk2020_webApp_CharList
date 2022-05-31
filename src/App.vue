<template>
  <nav>
    <div style="display:flex; flex-direction: row">
      <form action="">
        <label for="login">Login</label>
        <input type="text" id="login">
        <label for="pass">Password</label>
        <input type="text" id="pass">
        <button>Login</button>
      </form>
      <button>Registry</button>
    </div>

    <a href="">
      ver 0.9.053022
    </a>
  </nav>
  <router-link to="/">Home</router-link> |
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
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
</style>
