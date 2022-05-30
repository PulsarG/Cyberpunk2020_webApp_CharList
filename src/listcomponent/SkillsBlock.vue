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

    <div class="skillsmenu">
        <spec-skills></spec-skills>
        <attr-skills></attr-skills>
    </div>
</template>

<script>
import SpecSkills from "@/listcomponent/SkillsComponents/SpecSkills.vue";
import AttrSkills from "@/listcomponent/SkillsComponents/AttrSkills.vue";


export default {
    components: { SpecSkills, AttrSkills, },
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

.skillsmenu {
    display: flex;
    flex-direction: column;
}
</style>