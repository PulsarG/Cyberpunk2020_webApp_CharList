<template>
  <div class="nickblock">
    <label
      v-bind:class="{
        nicklabel: !this.isTheme77,
        nicklabelsecond: this.isTheme77,
      }"
      for="nick"
    >
      <strong>NAME</strong></label
    >
    <input
      type="text"
      id="nick"
      v-bind:class="{ nick: !this.isTheme77, nicksecond: this.isTheme77 }"
      v-model="this.nick"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      nick: "",
    };
  },
  methods: {
    setNickFromStore() {
      this.nick = this.$store.state.Char.nick;
    },
  },
  computed: {
    isLoadChar() {
      return this.$store.state.isLoadChar;
    },
    isTheme77() {
      return this.$store.state.isTheme77;
    },
  },
  watch: {
    nick(v) {
      this.$store.commit("setNick", v);
      if (v != "") {
        let el = document.getElementById("nick");
        el.style.border = "none";
      } else {
        let el = document.getElementById("nick");
        el.style.border = "1px solid black";
      }
    },

    isLoadChar(v) {
      if (v) this.setNickFromStore();
    },
  },
};
</script>

<style scoped>
.nickblock {
  width: 100%;
  display: flex;
}

.nicklabel {
  background-color: black;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.nicklabelsecond {
  background-color: none;
  width: 20%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: red;
  font-family: "Qore";
  font-size: 25px;
}

.nick {
  width: 80%;
  text-align: center;
  font-size: 20px;
  /* background: #d8881f; */
  background-color: #e4dbbf;
  border: 1px solid #383127;
  color: #383127;
}
.nicksecond {
  width: 80%;
  text-align: center;
  font-size: 20px;
  /* background: #d8881f; */
  background-color: transparent;
  border: 1px solid #383127;
  color: #00ccff;
}
</style>
