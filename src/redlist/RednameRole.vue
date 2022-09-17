<template>
  <div class="block">
    <button class="btnblock" @click="showList"><h2>NAME and ROLE</h2></button>
    <div class="blockbody" id="2id">
      <div>
        <input
          class="inpname"
          type="text"
          placeholder="NAME"
          v-model="this.Char.nick"
        />
      </div>
      <div>
        <input
          class="inpname"
          type="text"
          placeholder="ROLE"
          v-model="this.Char.role"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Char: {
        nick: "",
        role: "",
      },
    };
  },
  computed: {
    isLoadChar() {
      return this.$store.state.red.isLoadChar;
    },
    isTheme77() {
      return this.$store.state.isTheme77;
    },
  },
  methods: {
    showList() {
      document.getElementById("2id").classList.toggle("show");
    },
    setCharFromStore() {
      this.Char = this.$store.state.red.Char;
    },
  },

  watch: {
    Char: {
      handler(i) {
        this.$store.commit("red/setChar", i);
      },
      deep: true,
    },

    isLoadChar(v) {
      if (v) this.setCharFromStore();
    },
  },
};
</script>

<style scoped>
.inpname {
  margin-top: 5px;
  margin-bottom: 5px;
  width: 400px;
  height: 30px;
  font-family: "Qore";
  text-align: center;
  font-size: 20px;
}
::-webkit-input-placeholder {
  opacity: 0.5;
}

.block {
  margin: auto;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  width: 1000px;
  border: 3px solid red;
}
@media (max-width: 4000px) {
  .blockbody {
    width: 1000px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
}
@media (max-width: 1100px) {
  .block {
    width: 500px;
  }
  .blockbody {
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
.btnblock {
  border: none;
  width: 100%;
  background: red;
  cursor: pointer;
  color: white;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 3px;
}
h2 {
  font-family: "Qore";
}
.blockbody {
  max-height: 500px;
  transition: 1s;
  margin: auto;
}
.show {
  max-height: 0px;
  overflow: hidden;
}
</style>
