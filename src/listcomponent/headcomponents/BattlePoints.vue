<template>
  <div class="battlepoints">
    <div class="savepoints">
      <div class="savebtm">
        <h4>SAVE</h4>
        <input
          type="number"
          name=""
          id=""
          class="savebtminp"
          v-model="savePoint"
        />
      </div>
      <!--   <div class="savebtm">
                        <h4>BTM</h4>
                        <input type="number" name="" id="" class="savebtminp">
                    </div> -->
    </div>

    <div class="takedmg">
      <div class="takedmgrow">
        <div class="fourpoints">
          <div style="width: 100%">
            <strong>_.LIGHT_</strong>
          </div>

          <div class="dmgpoints">
            <input
              type="checkbox"
              name=""
              class="pointinp"
              v-model="DmgChecks.check1"
            />
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check2"
            />
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check3"
            />
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check4"
            />
          </div>
          <div class="dmglvl">
            <strong style="color: white">Stun 0</strong>
          </div>
        </div>
        <div class="fourpoints">
          <strong>SERIOUS</strong>
          <div class="dmgpoints">
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check5"
            />
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check6"
            />
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check7"
            />
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check8"
            />
          </div>
          <div class="dmglvl">
            <strong style="color: white">Stun -1</strong>
          </div>
        </div>
        <div class="fourpoints">
          <strong>CRITICAL</strong>
          <div class="dmgpoints">
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check9"
            />
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check10"
            />
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check11"
            />
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check12"
            />
          </div>
          <div class="dmglvl">
            <strong style="color: white">Stun -2</strong>
          </div>
        </div>
        <div class="fourpoints">
          <strong>MORTAL0</strong>
          <div class="dmgpoints">
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check13"
            />
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check14"
            />
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check15"
            />
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check16"
            />
          </div>
          <div class="dmglvl">
            <strong style="color: white">Stun -3</strong>
          </div>
        </div>
        <div class="fourpoints">
          <strong>MORTAL1</strong>
          <div class="dmgpoints">
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check17"
            />
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check18"
            />
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check19"
            />
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check20"
            />
          </div>
          <div class="dmglvl">
            <strong style="color: white">Stun -4</strong>
          </div>
        </div>
      </div>
      <div class="takedmgrow">
        <div class="fourpoints">
          <strong>MORTAL2</strong>
          <div class="dmgpoints">
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check21"
            />
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check22"
            />
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check23"
            />
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check24"
            />
          </div>
          <div class="dmglvl">
            <strong style="color: white">Stun -5</strong>
          </div>
        </div>
        <div class="fourpoints">
          <strong>MORTAL3</strong>
          <div class="dmgpoints">
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check25"
            />
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check26"
            />
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check27"
            />
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check28"
            />
          </div>
          <div class="dmglvl">
            <strong style="color: white">Stun -6</strong>
          </div>
        </div>
        <div class="fourpoints">
          <strong>MORTAL4</strong>
          <div class="dmgpoints">
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check29"
            />
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check30"
            />
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check31"
            />
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check32"
            />
          </div>
          <div class="dmglvl">
            <strong style="color: white">Stun -7</strong>
          </div>
        </div>
        <div class="fourpoints">
          <strong>MORTAL5</strong>
          <div class="dmgpoints">
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check33"
            />
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check34"
            />
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check35"
            />
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check36"
            />
          </div>
          <div class="dmglvl">
            <strong style="color: white">Stun -8</strong>
          </div>
        </div>
        <div class="fourpoints">
          <strong>MORTAL6</strong>
          <div class="dmgpoints">
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check37"
            />
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check38"
            />
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check39"
            />
            <input
              type="checkbox"
              name=""
              id=""
              class="pointinp"
              v-model="DmgChecks.check40"
            />
          </div>
          <div class="dmglvl">
            <strong style="color: white">Stun -9</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /* el1: document.getElementById("check1"), */
      savePoint: "",

      DmgChecks: {
        check1: false,
        check2: false,
        check3: false,
        check4: false,
        check5: false,
        check6: false,
        check7: false,
        check8: false,
        check9: false,
        check10: false,
        check11: false,
        check12: false,
        check13: false,
        check14: false,
        check15: false,
        check16: false,
        check17: false,
        check18: false,
        check19: false,
        check20: false,
        check21: false,
        check22: false,
        check23: false,
        check24: false,
        check25: false,
        check26: false,
        check27: false,
        check28: false,
        check29: false,
        check30: false,
        check31: false,
        check32: false,
        check33: false,
        check34: false,
        check35: false,
        check36: false,
        check37: false,
        check38: false,
        check39: false,
        check40: false,
      },
    };
  },
  computed: {
    isLoadChar() {
      return this.$store.state.isLoadChar;
    },
  },

  watch: {
    DmgChecks: {
      handler(i) {
        this.$store.commit("setDmgChecks", i);
      },
      deep: true,
    },
    savePoint(v) {
      this.$store.commit("setSavePoint", v);
    },
    isLoadChar(v) {
      if (v) {
        this.setSavePoint();
        this.setDmgChecks();
      }
    },
  },
  methods: {
    setSavePoint() {
      this.savePoint = this.$store.state.savePoint;
    },
    setDmgChecks() {
      this.DmgChecks = this.$store.state.DmgChecks;
    },
  },
};
</script>

<style scoped>
.battlepoints {
  margin: 3px;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}

.savepoints {
  width: 15%;
  height: 120px;
  display: flex;
  flex-direction: row;
}

.savebtm {
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  width: 90%;
  justify-content: center;
  align-items: center;
}

.savetitle {
  display: flex;
}

.savebtminp {
  height: 75px;
  width: 90%;
  text-align: center;
  font-size: 20px;
  background-color: #E4DBBF;
  border: 1px solid #383127;
  color: #383127;
  text-align: center;
}

.fourpoints {
  display: flex;
  flex-direction: column;
  margin: 2px;
  width: 20%;
}

.dmgpoints {
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  width: 100%;
}

.dmglvl {
  background-color: black;
  width: 100%;
  text-align: center;
}

.takedmg {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
}

.takedmgrow {
  display: flex;
  flex-direction: row;
}

.pointinp {
  display: flex;
  width: 20%;
}
</style>
