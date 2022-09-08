<template>
  <div class="stats">
    <div class="titlestats">
      <label
        for=""
        v-bind:class="{
          statslabel: !this.isTheme77,
          statslabelsecond: this.isTheme77,
        }"
        ><strong>STATS</strong></label
      >
      <div></div>
    </div>

    <div class="statscount">
      <div class="statsrow">
        <div class="stat">
          <label
            for="stat"
            v-bind:class="{
              statlabel: !this.isTheme77,
              statlabelsecond: this.isTheme77,
            }"
          >
            <strong>INT</strong>
          </label>
          <input
            type="number"
            name="stat"
            id="stat"
            v-bind:class="{
              statinp: !this.isTheme77,
              statinpsecond: this.isTheme77,
            }"
            v-model="this.Stats.int"
          />
        </div>
        <div class="stat">
          <label
            for="stat"
            v-bind:class="{
              statlabel: !this.isTheme77,
              statlabelsecond: this.isTheme77,
            }"
          >
            <strong>REF</strong>
          </label>
          <input
            type="number"
            name="stat"
            id="stat"
            v-bind:class="{
              statinp: !this.isTheme77,
              statinpsecond: this.isTheme77,
            }"
            v-model="this.Stats.ref"
          />
        </div>
        <div class="stat">
          <label
            for="stat"
            v-bind:class="{
              statlabel: !this.isTheme77,
              statlabelsecond: this.isTheme77,
            }"
          >
            <strong>TECH</strong>
          </label>
          <input
            type="number"
            name="stat"
            id="stat"
            v-bind:class="{
              statinp: !this.isTheme77,
              statinpsecond: this.isTheme77,
            }"
            v-model="this.Stats.tech"
          />
        </div>
        <div class="stat">
          <label
            for="stat"
            v-bind:class="{
              statlabel: !this.isTheme77,
              statlabelsecond: this.isTheme77,
            }"
          >
            <strong>COOL</strong>
          </label>
          <input
            type="number"
            name="stat"
            id="stat"
            v-bind:class="{
              statinp: !this.isTheme77,
              statinpsecond: this.isTheme77,
            }"
            v-model="this.Stats.cool"
          />
        </div>
      </div>
      <div class="statsrow">
        <div class="stat">
          <label
            for="stat"
            v-bind:class="{
              statlabel: !this.isTheme77,
              statlabelsecond: this.isTheme77,
            }"
          >
            <strong>ATTR</strong>
          </label>
          <input
            type="number"
            name="stat"
            id="stat"
            v-bind:class="{
              statinp: !this.isTheme77,
              statinpsecond: this.isTheme77,
            }"
            v-model="this.Stats.attr"
          />
        </div>
        <div class="stat">
          <label
            for="stat"
            v-bind:class="{
              statlabel: !this.isTheme77,
              statlabelsecond: this.isTheme77,
            }"
          >
            <strong>LUCK</strong>
          </label>
          <input
            type="number"
            name="stat"
            id="stat"
            v-bind:class="{
              statinp: !this.isTheme77,
              statinpsecond: this.isTheme77,
            }"
            v-model="this.Stats.luck"
          />
        </div>
        <div class="stat">
          <label
            for="stat"
            v-bind:class="{
              statlabel: !this.isTheme77,
              statlabelsecond: this.isTheme77,
            }"
          >
            <strong>MA</strong>
          </label>
          <input
            type="number"
            name="stat"
            id="stat"
            v-bind:class="{
              statinp: !this.isTheme77,
              statinpsecond: this.isTheme77,
            }"
            v-model="this.Stats.ma"
          />
        </div>
        <div class="stat">
          <label
            for="stat"
            v-bind:class="{
              statlabel: !this.isTheme77,
              statlabelsecond: this.isTheme77,
            }"
          >
            <strong>BODY</strong>
          </label>
          <input
            type="number"
            name="stat"
            id="stat"
            v-bind:class="{
              statinp: !this.isTheme77,
              statinpsecond: this.isTheme77,
            }"
            v-model="this.Stats.body"
          />
        </div>
      </div>
      <div class="statsrow">
        <div class="stat">
          <label
            for="stat"
            v-bind:class="{
              statlabel: !this.isTheme77,
              statlabelsecond: this.isTheme77,
            }"
          >
            <strong>EMP</strong>
          </label>
          <input
            type="number"
            name="stat"
            id="stat"
            v-bind:class="{
              statinp: !this.isTheme77,
              statinpsecond: this.isTheme77,
            }"
            v-model="this.Stats.emp"
          />
        </div>
        <div class="stat">
          <label
            for="stat"
            v-bind:class="{
              statlabel: !this.isTheme77,
              statlabelsecond: this.isTheme77,
            }"
          >
            <strong>Run</strong>
          </label>
          <input
            type="number"
            name="stat"
            id="stat"
            v-bind:class="{
              statinp: !this.isTheme77,
              statinpsecond: this.isTheme77,
            }"
            v-model="this.Stats.run"
          />
        </div>
        <div class="stat">
          <label
            for="stat"
            v-bind:class="{
              statlabel: !this.isTheme77,
              statlabelsecond: this.isTheme77,
            }"
          >
            <strong>Leap</strong>
          </label>
          <input
            type="number"
            name="stat"
            id="stat"
            v-bind:class="{
              statinp: !this.isTheme77,
              statinpsecond: this.isTheme77,
            }"
            v-model="this.Stats.leap"
          />
        </div>
        <div class="stat">
          <label
            for="stat"
            v-bind:class="{
              statlabel: !this.isTheme77,
              statlabelsecond: this.isTheme77,
            }"
          >
            <strong>Lift</strong>
          </label>
          <input
            type="number"
            name="stat"
            id="stat"
            v-bind:class="{
              statinp: !this.isTheme77,
              statinpsecond: this.isTheme77,
            }"
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
    isTheme77() {
      return this.$store.state.isTheme77;
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
  color: white;
}
.statslabelsecond {
  background-color: none;
  width: 15%;
  margin-top: 3px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: red;
  font-family: "Qore";
  font-size: 25px;
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
  background-color: #e4dbbf;
  border: 1px solid #383127;
  color: #383127;
}
.statinpsecond {
  width: 30%;
  height: 25px;
  text-align: center;
  font-size: 15px;
  background-color: inherit;
  border: 1px solid #383127;
  color: #00ccff;
}

.statlabel {
  margin-right: 10px;
  font-family: "Qore";
  color: #383127;
}
.statlabelsecond {
  margin-right: 10px;
  font-family: "Qore";
  color: #00ccff;
}
</style>
