<template>
  <div class="block">
    <button class="btnblock" @click="showList"><h2>STYLE</h2></button>
    <div class="blockbody" id="6id">
      <textarea
        class="textarea"
        maxlength="2000"
        placeholder="Внешность и стиль вашего персонажа (макс. 2000 символов)"
        v-model="style"
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      style: "",
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
      document.getElementById("6id").classList.toggle("show");
    },
    setStyleFromStore() {
      this.Savestats = this.$store.state.red.style;
    },
  },

  watch: {
    style(v) {
      this.$store.commit("red/setStyle", v);
    },

    isLoadChar(v) {
      if (v) this.setStyleFromStore();
    },
  },
};
</script>

<style scoped>
.textarea {
  min-width: 990px;
  max-width: 990px;
  max-height: 200px;
  min-height: 200px;
  background-color: #e4dbbf;
  border: none;
  color: #383127;
  color: black;
  font-size: 18px;
}
.block {
  margin: auto;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  width: 1000px;
  border: 3px solid red;
}
@media (max-width: 1100px) {
  .block {
    width: 500px;
  }
  .blockbody {
    flex-wrap: wrap;
    margin: auto;
  }
  .textarea {
    min-width: 500px;
    max-width: 500px;
    max-height: 200px;
    min-height: 200px;
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
  margin: auto;
  transition: 1s;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.show {
  max-height: 0px;
  overflow: hidden;
}
</style>
