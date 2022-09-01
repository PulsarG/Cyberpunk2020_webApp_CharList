<template>
  <div class="nickblock">
    <label class="nicklabel" for="nick">
      <strong style="color: white">NAME</strong></label
    >
    <input type="text" id="nick" class="nick" v-model="this.nick" />
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
  /* display: flex;
    justify-content: center;
    align-items: center; */
  font-size: 20px;
}

.nick {
  width: 80%;
  text-align: center;
  font-size: 20px;
}
</style>
