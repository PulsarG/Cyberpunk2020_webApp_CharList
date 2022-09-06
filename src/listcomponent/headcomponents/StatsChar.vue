<template>
  <div class="stats">
    <div class="titlestats">
      <label for="" class="statslabel"
        ><strong style="color: white">STATS</strong></label
      >
      <div></div>
    </div>

    <div class="statscount">
      <div class="statsrow">
        <div class="stat">
          <label for="stat" class="statlabel"> <strong>INT</strong> </label>
          <input
            type="number"
            name="stat"
            id="stat"
            class="statinp"
            v-model="this.Stats.int"
          />
        </div>
        <div class="stat">
          <label for="stat" class="statlabel"> <strong>REF</strong> </label>
          <input
            type="number"
            name="stat"
            id="stat"
            class="statinp"
            v-model="this.Stats.ref"
          />
        </div>
        <div class="stat">
          <label for="stat" class="statlabel"> <strong>TECH</strong> </label>
          <input
            type="number"
            name="stat"
            id="stat"
            class="statinp"
            v-model="this.Stats.tech"
          />
        </div>
        <div class="stat">
          <label for="stat" class="statlabel"> <strong>COOL</strong> </label>
          <input
            type="number"
            name="stat"
            id="stat"
            class="statinp"
            v-model="this.Stats.cool"
          />
        </div>
      </div>
      <div class="statsrow">
        <div class="stat">
          <label for="stat" class="statlabel"> <strong>ATTR</strong> </label>
          <input
            type="number"
            name="stat"
            id="stat"
            class="statinp"
            v-model="this.Stats.attr"
          />
        </div>
        <div class="stat">
          <label for="stat" class="statlabel"> <strong>LUCK</strong> </label>
          <input
            type="number"
            name="stat"
            id="stat"
            class="statinp"
            v-model="this.Stats.luck"
          />
        </div>
        <div class="stat">
          <label for="stat" class="statlabel"> <strong>MA</strong> </label>
          <input
            type="number"
            name="stat"
            id="stat"
            class="statinp"
            v-model="this.Stats.ma"
          />
        </div>
        <div class="stat">
          <label for="stat" class="statlabel"> <strong>BODY</strong> </label>
          <input
            type="number"
            name="stat"
            id="stat"
            class="statinp"
            v-model="this.Stats.body"
          />
        </div>
      </div>
      <div class="statsrow">
        <div class="stat">
          <label for="stat" class="statlabel"> <strong>EMP</strong> </label>
          <input
            type="number"
            name="stat"
            id="stat"
            class="statinp"
            v-model="this.Stats.emp"
          />
        </div>
        <div class="stat">
          <label for="stat" class="statlabel"> <strong>Run</strong> </label>
          <input
            type="number"
            name="stat"
            id="stat"
            class="statinp"
            v-model="this.Stats.run"
          />
        </div>
        <div class="stat">
          <label for="stat" class="statlabel"> <strong>Leap</strong> </label>
          <input
            type="number"
            name="stat"
            id="stat"
            class="statinp"
            v-model="this.Stats.leap"
          />
        </div>
        <div class="stat">
          <label for="stat" class="statlabel"> <strong>Lift</strong> </label>
          <input
            type="number"
            name="stat"
            id="stat"
            class="statinp"
            v-model="this.Stats.lift"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Stats: {
        int: "",
        ref: "",
        tech: "",
        cool: "",
        attr: "",
        luck: "",
        ma: "",
        body: "",
        emp: "",
        run: "",
        leap: "",
        lift: "",
      },
    };
  },

  methods: {
    setStatsFromStore() {
      this.Stats = this.$store.state.Stats;
    },
  },

  computed: {
    isLoadChar() {
      return this.$store.state.isLoadChar;
    },
  },

  watch: {
    Stats: {
      handler(i) {
        this.$store.commit("setStats", i);
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
.statslabel {
  background-color: black;
  width: 15%;
  margin-top: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.stats {
  display: flex;
  flex-direction: column;
}

.statscount {
  display: flex;
  flex-direction: column;
}

.statsrow {
  display: flex;
  flex-direction: row;
  margin-top: 3px;
}

.stat {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.statinp {
  width: 30%;
  height: 25px;
  text-align: center;
  font-size: 15px;
  background-color: #E4DBBF;
  border: 1px solid #383127;
  color: #383127;
}

.statlabel {
  margin-right: 10px;
  font-family: 'Qore';
  color: #383127;
}
</style>
