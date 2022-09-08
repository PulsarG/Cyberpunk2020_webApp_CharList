<template>
  <div class="skillstext">
    <div
      v-bind:class="{
        skillstitle: !this.isTheme77,
        skillstitlesecond: this.isTheme77,
      }"
    >
      <h3>
        <strong>SKILLS</strong>
      </h3>
    </div>
    <div
      v-bind:class="{
        skillslearn: !this.isTheme77,
        skillslearnsecond: this.isTheme77,
      }"
    >
      <p>
        Добавьте очки навыков к нужной Характеристике, затем используйте. <br />
        Пометьте чипированные навыки галочкой напротив поля с очками навыка.
      </p>
    </div>
    <div class="skillsmanage">
      <button v-bind:class="{
        btnmanage: !this.isTheme77,
        btnmanagesecond: this.isTheme77,
      }" @click="hiddenEmptySkills">
        Скрыть неиспользуемые
      </button>
      <button v-bind:class="{
        btnmanage: !this.isTheme77,
        btnmanagesecond: this.isTheme77,
      }">
        Показать рекомендованные для {{ $store.state.role }}
      </button>
    </div>
  </div>

  <div class="alllistskills">
    <div class="skillsmenu">
      <spec-skills></spec-skills>
      <attr-skills></attr-skills>
      <body-skills></body-skills>
      <cool-skills></cool-skills>
      <empathy-skills></empathy-skills>
    </div>
    <div class="skillsmenu">
      <int-skills></int-skills>
      <other-skills></other-skills>
      <button @click="addOtherSkill" class="addbtn">Add skill</button>
    </div>
    <div class="skillsmenu">
      <ref-skills></ref-skills>
      <tech-skills></tech-skills>
    </div>
  </div>
</template>

<script>
import SpecSkills from "@/listcomponent/SkillsComponents/SpecSkills.vue";
import AttrSkills from "@/listcomponent/SkillsComponents/AttrSkills.vue";
import BodySkills from "@/listcomponent/SkillsComponents/BodySkills.vue";
import CoolSkills from "@/listcomponent/SkillsComponents/CoolSkills.vue";
import EmpathySkills from "@/listcomponent/SkillsComponents/EmpathySkills.vue";
import IntSkills from "@/listcomponent/SkillsComponents/IntSkills.vue";
import RefSkills from "@/listcomponent/SkillsComponents/RefSkills.vue";
import TechSkills from "@/listcomponent/SkillsComponents/TechSkills.vue";
import OtherSkills from "@/listcomponent/SkillsComponents/OtherSkills.vue";

export default {
  components: {
    SpecSkills,
    AttrSkills,
    BodySkills,
    CoolSkills,
    EmpathySkills,
    IntSkills,
    RefSkills,
    TechSkills,
    OtherSkills,
  },
  computed: {
    isTheme77() {
      return this.$store.state.isTheme77;
    },
  },
  methods: {
    hiddenEmptySkills() {
      this.$store.commit("hiddenSkillsEmpty");
    },
    addOtherSkill() {
      this.$store.commit("addOtherSkill");
    },
  },
};
</script>

<style scoped>
p {
  font-family: "Ktf";
  font-size: 15px;
}
.btnmanage {
  font-family: "Ktf";
  font-size: 15px;
}
.btnmanagesecond {
  font-family: "Ktf";
  font-size: 15px;
  color: #00ccff;
}
@media (max-width: 1200px) {
  .skillstext {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    max-width: 600px;
  }
  .skillslearn {
    display: none;
  }
  .skillsmanage {
    margin-top: 5px;
  }
  .alllistskills {
    flex-direction: column;
    align-items: center;
    margin-top: 5px;
  }
}
@media (max-width: 1000px) {
  .skillstext {
    flex-direction: column;
    align-items: center;
  }
  .skillslearn {
    display: none;
  }
  .skillsmanage {
    margin-top: 5px;
  }
  .alllistskills {
    flex-direction: column;
    align-items: center;
    margin-top: 5px;
  }
}

.skillstext {
  display: flex;
  /* flex-direction: row; */
  margin: auto;
  margin-top: 5px;
  /* max-width: 1000px; */
  align-items: center;
  justify-content: space-between;
}

.skillstitle {
  background-color: black;
  width: 90px;
  /* margin: auto; */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
.skillstitlesecond {
  background-color: none;
  width: 90px;
  /* margin: auto; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: red;
  font-family: "Qore";
  font-size: 20px;
}

.skillslearn {
  width: 600px;
  height: auto;
  margin-left: 3px;
}
.skillslearnsecond {
  width: 600px;
  height: auto;
  margin-left: 40px;
  color: #00ccff;
}

.skillsmanage {
  width: 270px;
}

.alllistskills {
  display: flex;
  margin-top: 5px;
  /* flex-direction: row; */
  /* width: 100%; */
}

.skillsmenu {
  display: flex;
  flex-direction: column;
  width: 330px;
}

.addbtn {
  width: 23%;
  display: flex;
  align-self: center;
  background: none;
  border: none;
  margin-top: 10px;
}

.skillsmanage {
  display: flex;
  flex-direction: column;
}

button {
  background: none;
  border: 1px dotted black;
}
</style>
