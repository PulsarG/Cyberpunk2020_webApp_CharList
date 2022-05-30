<template>
    <div class="skillstext">
        <div class="skillstitle">
            <h3>
                <strong style="color: white">SKILLS</strong>
            </h3>
        </div>
        <div class="skillslearn">
            <p>Добавьте очки навыков к нужной Характеристике, затем используйте. <br> Пометьте чипированные навыки
                галочкой
                напротив поля с очками навыка.</p>
        </div>
        <div class="skillsmanage">
            <button @click="hiddenEmptySkills">Hidden Empty Skills</button>
            <button>123123123</button>
            <button>123123123</button>
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
    components: { SpecSkills, AttrSkills, BodySkills, CoolSkills, EmpathySkills, IntSkills, RefSkills, TechSkills, OtherSkills },
    methods: {
        hiddenEmptySkills() {
            this.$store.commit('hiddenSkillsEmpty');
        }
    }
}
</script>

<style scoped>
.skillstext {
    display: flex;
    flex-direction: row;
    margin: auto;

}

.skillstitle {
    background-color: black;
    width: 10%;
    margin: auto;
}

.skillslearn {
    width: 60%;
    height: auto;
}

.skillsmanage {
    width: 30%;
}

.alllistskills {
    display: flex;
    flex-direction: row;
    width: 100%;
}

.skillsmenu {
    display: flex;
    flex-direction: column;
    width: 33%;
}
</style>