<template>
  <div class="skill" v-show="isShowSkillLocal">
    <button @click="checkSkill" class="nameskill">{{ i.name }}</button>
    <div class="lvl">
      <button class="btnskillinc" @click="upSkill(1)">+</button>
      <h3 class="skilllvl">{{ i.count }}</h3>
      <button class="btnskillinc" @click="upSkill(-1)">-</button>
    </div>
    <button class="total" @click="checkSkill">{{ this.totalCount }}</button>
  </div>
  <div class="checkskill" v-show="isShowCheck">
    <p>1d10 roll = {{ diceRoll }}</p>
    <p class="critroll" v-show="isShowMoreDiceRoll">
      Критический успех + {{ moreDiceRoll }}
    </p>
    <p class="result">Результат проверки умения: ... {{ checkResult }}</p>
    <button class="closecheck" @click="closeCheck">X</button>
  </div>
</template>

<script>
export default {
  props: {
    i: Object,
    Stat: Number,
  },
  data() {
    return {
      totalCount: 0,
      isShowSkillLocal: true,
      isShowCheck: false,
      isShowMoreDiceRoll: false,
      diceRoll: 0,
      moreDiceRoll: 0,
      checkResult: 0,
    };
  },
  computed: {
    isLoadChar() {
      return this.$store.state.red.isLoadChar;
    },
    isShowSkill() {
      return this.$store.state.red.isShowSkills;
    },
  },
  methods: {
    upSkill(i) {
      this.i.count += i;
    },
    checkSkill() {
      this.isShowMoreDiceRoll = false;
      this.moreDiceRoll = 0;
      this.diceRoll = Math.floor(Math.random() * (11 - 1) + 1);
      if (this.diceRoll == 10) {
        this.moreDiceRoll = Math.floor(Math.random() * (11 - 1) + 1);
        this.isShowMoreDiceRoll = true;
      }
      this.checkResult = this.totalCount + this.diceRoll + this.moreDiceRoll;
      this.isShowCheck = true;
    },
    closeCheck() {
      this.isShowCheck = false;
    },
  },
  mounted() {},
  watch: {
    i: {
      handler(v) {
        this.totalCount = this.i.count + this.Stat;
      },
      deep: true,
    },
    Stat(v) {
      this.totalCount = v + this.i.count;
    },
    isShowSkill(v) {
      if (this.i.count <= 0 && v) {
        this.isShowSkillLocal = false;
      } else {
        this.isShowSkillLocal = true;
      }
    },
  },
};
</script>

<style scoped>
  .closecheck {
    width: 30px;
    height: 30px;
    background-color: inherit;
    cursor: pointer;
  }
.checkskill {
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
}
p {
  font-family: "Ktf";
  font-size: 20px;
}
.critroll {
  color: red;
}
.result {
  color: blue;
}
.skill {
  display: flex;
  flex-direction: row;
  width: 1000px;
  align-items: center;
  height: 40px;
  justify-content: space-between;
  margin: auto;
}
.nameskill {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 40px;
  text-align: center;
  border: 1px solid brown;
  /* font-family: "Ktf"; */
  font-size: 15px;
  background-color: inherit;
  cursor: pointer;
  text-align: center;
}
.nameskill:hover {
  font-size: 20px;
  text-shadow: 0 0 25px red;
}
.lvl {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  width: 300px;
  justify-content: space-around;
  border: 1px solid brown;
}
.btnskillinc {
  width: 50px;
  height: 40px;
  border: none;
  background-color: inherit;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  font-family: "Qore";
}
.btnskillinc:hover {
  font-size: 30px;
  text-shadow: 0 0 25px red;
}
.skilllvl {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 40px;
  border: none;
  background-color: inherit;
  font-size: 30px;
  text-align: center;
  font-family: "Qore";
}
.total {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 40px;
  border: none;
  background-color: inherit;
  font-size: 35px;
  cursor: pointer;
  text-align: center;
  border: 1px solid brown;
  font-family: "Qore";
}
.total:hover {
  font-size: 30px;
  text-shadow: 0 0 25px red;
}

@media (max-width: 1100px) {
  .skill {
    width: 500px;
    justify-content: center;
  }
  .nameskill {
    width: 200px;
  }
  .lvl {
    width: 150px;
  }
  .total {
    width: 150px;
  }
}
</style>
