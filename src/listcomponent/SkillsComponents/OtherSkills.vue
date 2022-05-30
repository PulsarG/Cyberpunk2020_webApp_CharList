<template>
    <div class="skillslist">
        <div class="title">
            <button @click="closeSkills" class="title">
                <h4>OTHER</h4>
            </button>
        </div>

        <div class="skillsmenu" v-show="!isSkillClose">
            <div v-for="i in $store.state.Skillsother" :key="i.name">
                <test-skills :i="i"></test-skills>
            </div>
        </div>

    </div>
</template>

<script>
import TestSkills from './InputSkills.vue';
export default {
    components: { TestSkills },
    data() {
        return {
            isSkillClose: false,
        }
    },
    methods: {
        closeSkills() {
            if (!this.isSkillClose) {
                this.isSkillClose = true;
            } else {
                this.isSkillClose = false;
            }
        }
    }
}
</script>

<style scoped>
.title {
    width: 100%;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: none; */
    background: none;
}

.skillslist {
    display: flex;
    flex-direction: column;
    width: 95%;
    align-items: flex-start;
    margin-left: 3px;

}

.skill {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2px;
    width: 100%;
}

.skillus {
    display: flex;
    flex-direction: row;
    width: 25%;
}

.skillpointsinp {
    width: 70%;
}

.skillname {
    width: 75%;
    height: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /*   border: 2px solid red; */
}
</style>