<template>
  <div class="block">
    <button class="btnblock" @click="showList"><h2>STATS</h2></button>
    <div class="blockbody" id="1id">
      <div v-for="i in this.Stats" :key="i.name">
        <div class="stat">
          <p class="statname">{{ i.name }}</p>
          <button class="btnstat" @click="upStat(i)">+</button>
          <button class="btnstat btncountstat">{{ i.count }}</button>
          <button class="btnstat" @click="downStat(i)">-</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Stats: [
        { name: "BODY", count: 0 },
        { name: "COOL", count: 0 },
        { name: "EMP", count: 0 },
        { name: "INT", count: 0 },
        { name: "REF", count: 0 },
        { name: "MOVE", count: 0 },
        { name: "WILL", count: 0 },
        { name: "LUCK", count: 0 },
        { name: "TECH", count: 0 },
        { name: "DEX", count: 0 },
      ],
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
      document.getElementById("1id").classList.toggle("show");
    },
    upStat(i) {
      ++i.count;
    },
    downStat(i) {
      --i.count;
    },
    setStatsFromStore() {
      this.Stats = this.$store.state.red.Stats;
    },
  },

  watch: {
    Stats: {
      handler(i) {
        this.$store.commit("red/setStats", i);
      },
      deep: true,
    },

    isLoadChar(v) {
      if (v) this.setStatsFromStore();
    },
  },
};
</script>

<style scoped>
.stat {
  display: flex;
  flex-direction: column;
}
.statname {
  text-align: center;
  font-family: 'Qore';
}
.btnstat {
  width: 90px;
  height: 50px;
  background-color: inherit;
  border: none;
  cursor: pointer;
}
.btnstat:hover {
  box-shadow: 0 0 10px red;
  font-size: 30px;
}
.btncountstat {
  border-top: 1px solid brown;
  border-bottom: 1px solid brown;
  font-size: 20px;
  font-family: "Ktf";
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
