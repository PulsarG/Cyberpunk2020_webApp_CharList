<template>
  <div class="skillstext">
    <div class="skillstitle">
      <h3>
        <strong style="color: white">SKILLS</strong>
      </h3>
    </div>
    <div class="skillslearn">
      <p>
        Добавьте очки навыков к нужной Характеристике, затем используйте. <br />
        Пометьте чипированные навыки галочкой напротив поля с очками навыка.
      </p>
    </div>
    <div class="skillsmanage">
      <button @click="hiddenEmptySkills">Скрыть неиспользуемые</button>
      <button>Показать рекомендованные для {{ $store.state.role }}</button>
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
@media (max-width: 999px) {
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
}
@media (max-width: 800px) {
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
}

.skillstitle {
  background-color: black;
  width: 90px;
  /* margin: auto; */
  display: flex;
  align-items: center;
  justify-content: center;
}

.skillslearn {
  width: 600px;
  height: auto;
  margin-left: 3px;
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
