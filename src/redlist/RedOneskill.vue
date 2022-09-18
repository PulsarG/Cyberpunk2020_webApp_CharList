<template>
  <div class="skill" v-show="isShowSkillLocal">
    <h3 class="nameskill">{{ i.name }}</h3>
    <div class="lvl">
      <button class="btnskillinc" @click="upSkill(1)">+</button>
      <h3 class="skilllvl">{{ i.count }}</h3>
      <button class="btnskillinc" @click="upSkill(-1)">-</button>
    </div>
    <button class="total">{{ this.totalCount }}</button>
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
