<template>
  <div class="block">
    <button class="btnblock" @click="showList"><h2>SAVE STATS</h2></button>
    <div class="blockbody" id="3id">
      <div class="savestat">
        <h2>HP</h2>
        <input class="inpsavestat" type="number" v-model="this.Savestats.hp" />
      </div>
      <div class="savestat">
        <h2>SW</h2>
        <input class="inpsavestat" type="number" v-model="this.Savestats.sw" />
      </div>
      <div class="savestat">
        <h2>DS</h2>
        <input class="inpsavestat" type="number" v-model="this.Savestats.ds" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Savestats: {
        hp: 0,
        sw: 0,
        ds: 0,
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
      document.getElementById("3id").classList.toggle("show");
    },
    setSavestatsFromStore() {
      this.Savestats = this.$store.state.red.Savestats;
    },
  },

  watch: {
    Savestats: {
      handler(i) {
        this.$store.commit("red/setSavestats", i);
      },
      deep: true,
    },

    isLoadChar(v) {
      if (v) this.setSavestatsFromStore();
    },
  },
};
</script>

<style scoped>
.savestat {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.inpsavestat {
  width: 70px;
  height: 70px;
  text-align: center;
  font-family: "Qore";
  font-size: 25px;
  margin-bottom: 15px;
}
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
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
