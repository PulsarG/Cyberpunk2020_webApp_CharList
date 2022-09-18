<template>
  <div class="block">
    <button class="btnblock" @click="showList"><h2>SKILLS</h2></button>

    <div class="check">
      <div>
        <h4>Скрыть все Навыки с уровнем 0</h4>
      </div>
      <div>
        <label class="checkbox-green">
          <input type="checkbox" v-model="isShowSkillsLocal" />
          <span
            class="checkbox-green-switch"
            data-label-on="On"
            data-label-off="Off"
          ></span>
        </label>
      </div>
    </div>

    <div class="blockbody" id="5id">
      <div class="skill0">
        <p class="nameskill0">SKILL</p>
        <div class="lvl0">
          <p>SKILL LVL</p>
        </div>
        <p class="total0">TOTAL</p>
      </div>
      <div class="skilllist" v-for="i in this.$store.state.redskills.Cool" :key="i.name">
        <red-oneskill :i="i" :Stat="CoolStat"></red-oneskill>
      </div>
      <div class="skilllist" v-for="i in this.$store.state.redskills.Emp" :key="i.name">
        <red-oneskill :i="i" :Stat="EmpStat"></red-oneskill>
      </div>
      <div class="skilllist" v-for="i in this.$store.state.redskills.Int" :key="i.name">
        <red-oneskill :i="i" :Stat="IntStat"></red-oneskill>
      </div>
      <div class="skilllist" v-for="i in this.$store.state.redskills.Ref" :key="i.name">
        <red-oneskill :i="i" :Stat="RefStat"></red-oneskill>
      </div>
      <div class="skilllist" v-for="i in this.$store.state.redskills.Will" :key="i.name">
        <red-oneskill :i="i" :Stat="WillStat"></red-oneskill>
      </div>
      <div class="skilllist" v-for="i in this.$store.state.redskills.Tech" :key="i.name">
        <red-oneskill :i="i" :Stat="TechStat"></red-oneskill>
      </div>
      <div class="skilllist" v-for="i in this.$store.state.redskills.Dex" :key="i.name">
        <red-oneskill :i="i" :Stat="DexStat"></red-oneskill>
      </div>
    </div>
  </div>
</template>

<script>
import RedOneskill from "@/redlist/RedOneskill.vue";
export default {
  components: { RedOneskill },
  data() {
    return {
      isShowSkillsLocal: false,
    };
  },
  computed: {
    isLoadChar() {
      return this.$store.state.red.isLoadChar;
    },
    isTheme77() {
      return this.$store.state.isTheme77;
    },
    isShowSkills() {
      return this.$store.state.red.isShowSkills;
    },
    CoolStat() {
      if (!this.$store.state.red.Stats[1]) {
        return 0;
      } else {
        return this.$store.state.red.Stats[1].count;
      }
    },
    EmpStat() {
      if (!this.$store.state.red.Stats[2]) {
        return 0;
      } else {
        return this.$store.state.red.Stats[2].count;
      }
    },
    IntStat() {
      if (!this.$store.state.red.Stats[3]) {
        return 0;
      } else {
        return this.$store.state.red.Stats[3].count;
      }
    },
    RefStat() {
      if (!this.$store.state.red.Stats[4]) {
        return 0;
      } else {
        return this.$store.state.red.Stats[4].count;
      }
    },
    WillStat() {
      if (!this.$store.state.red.Stats[6]) {
        return 0;
      } else {
        return this.$store.state.red.Stats[6].count;
      }
    },
    TechStat() {
      if (!this.$store.state.red.Stats[8]) {
        return 0;
      } else {
        return this.$store.state.red.Stats[8].count;
      }
    },
    DexStat() {
      if (!this.$store.state.red.Stats[9]) {
        return 0;
      } else {
        return this.$store.state.red.Stats[9].count;
      }
    },
  },
  methods: {
    showList() {
      document.getElementById("5id").classList.toggle("show");
    },
    setBioFromStore() {
      this.Savestats = this.$store.state.red.redskills;
    },
  },
  mounted() {},
  watch: {
    isLoadChar(v) {
      if (v) this.setBioFromStore();
    },
    isShowSkillsLocal(v) {
      this.$store.commit("red/setShowSkills", v);
    },
  },
};
</script>

<style scoped>
.skill0 {
  display: flex;
  flex-direction: row;
  width: 1000px;
  align-items: center;
  height: 40px;
  justify-content: space-between;
  margin: auto;
}
.nameskill0 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 40px;
  text-align: center;
  border: 1px solid brown;
}
.lvl0 {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  width: 300px;
  justify-content: space-around;
  border: 1px solid brown;
}
.btnskillinc0 {
  width: 50px;
  height: 40px;
  border: none;
  background-color: inherit;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
}
.skilllvl0 {
  width: 50px;
  height: 40px;
  border: none;
  background-color: inherit;
  font-size: 30px;
  text-align: center;
}
.total0 {
  width: 200px;
  height: 40px;
  border: none;
  background-color: inherit;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  border: 1px solid brown;
  display: flex;
  align-items: center;
  justify-content: center;
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
  .skill0 {
    width: 500px;
    justify-content: center;
  }
  .nameskill0 {
    width: 200px;
  }
  .lvl0 {
    width: 150px;
  }
  .total0 {
    width: 150px;
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
  max-height: 5000px;
  margin: auto;
  transition: 1s;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.show {
  max-height: 0px;
  overflow: hidden;
}

.check {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 35px;
  margin-bottom: 10px;
  margin-top: 10px;
}

.checkbox-green {
  display: inline-block;
  height: 28px;
  line-height: 18px;
  margin-right: 10px;
  position: relative;
  vertical-align: middle;
  font-size: 14px;
  user-select: none;
  margin-left: 15px;
}
.checkbox-green .checkbox-green-switch {
  display: inline-block;
  height: 28px;
  width: 90px;
  box-sizing: border-box;
  position: relative;
  border-radius: 2px;
  background: #848484;
  transition: background-color 0.3s cubic-bezier(0, 1, 0.5, 1);
}
.checkbox-green .checkbox-green-switch:before {
  content: attr(data-label-on);
  display: inline-block;
  box-sizing: border-box;
  width: 45px;
  padding: 0 12px;
  position: absolute;
  top: 0;
  left: 45px;
  text-transform: uppercase;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 10px;
  line-height: 28px;
}
.checkbox-green .checkbox-green-switch:after {
  content: attr(data-label-off);
  display: inline-block;
  box-sizing: border-box;
  width: 44px;
  border-radius: 1px;
  position: absolute;
  top: 1px;
  left: 1px;
  z-index: 5;
  text-transform: uppercase;
  text-align: center;
  background: white;
  line-height: 26px;
  font-size: 10px;
  color: #777;
  transition: transform 0.3s cubic-bezier(0, 1, 0.5, 1);
}
.checkbox-green input[type="checkbox"] {
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.checkbox-green input[type="checkbox"]:checked + .checkbox-green-switch {
  background-color: #70c767;
}
.checkbox-green input[type="checkbox"]:checked + .checkbox-green-switch:before {
  content: attr(data-label-off);
  left: 0;
}
.checkbox-green input[type="checkbox"]:checked + .checkbox-green-switch:after {
  content: attr(data-label-on);
  color: #4fb743;
  transform: translate3d(44px, 0, 0);
}

/* Hover */
.checkbox-green
  input[type="checkbox"]:not(:disabled)
  + .checkbox-green-switch:hover {
  cursor: pointer;
}
.checkbox-green
  input[type="checkbox"]:not(:disabled)
  + .checkbox-green-switch:hover:after {
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4);
}

.checkbox-green input[type="checkbox"]:disabled + .checkbox-green-switch {
  opacity: 0.6;
  filter: grayscale(50%);
}

.checkbox-green.focused .checkbox-green-switch:after {
  box-shadow: inset 0px 0px 4px #ff5623;
}
</style>
