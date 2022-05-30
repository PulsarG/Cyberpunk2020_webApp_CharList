<template>
    <div class="skillslist">
        <div class="title">
            <button @click="closeSkills" class="title">
                <h4>ATTR</h4>
            </button>
        </div>

        <div class="skillsmenu" v-show="!isSkillClose">

            <!--  <div class="skill" v-show="isUse1">
                <div class="skillname">
                    <p>Personal Crooming</p>
                </div>
                <div class="skillus">
                    <div class="skillpoints">
                        <input v-model="pcSkill" type="number" name="" id="" class="skillpointsinp">
                    </div>
                    <div class="skillchip">
                        <input type="checkbox" name="" id="">
                    </div>
                </div>
            </div>

            <div class="skill" v-show="isUse2">
                <div class="skillname">
                    <p>Wardrobe & Style</p>
                </div>
                <div class="skillus">
                    <div class="skillpoints">
                        <input v-model="wsSkill" type="number" name="" id="" class="skillpointsinp">
                    </div>
                    <div class="skillchip">
                        <input type="checkbox" name="" id="">
                    </div>
                </div>
            </div> -->
            <div v-for="i in $store.state.Skillsatr" :key="i.name">
                <test-skills :i="i"></test-skills>
            </div>

        </div>
        <button @click="hidenAll">1313123</button>
    </div>
</template>

<script>
import TestSkills from './OneSkill.vue';
export default {
    components: { TestSkills },
    data() {
        return {
            isSkillClose: false,
            isUse: true,

            pcSkill: Number,
            wsSkill: Number,
            isPcSkill: false,
            isWsSkill: false,

            hiddenAll: false,

            isUse1: true,
            isUse2: true,
        }
    },
    methods: {
        hidenAll() {
            this.hiddenAll = true;
        },
        closeSkills() {
            if (!this.isSkillClose) {
                this.isSkillClose = true;
            } else {
                this.isSkillClose = false;
            }
        }
    },

    watch: {
        pcSkill(v) {
            if (v != "") {
                this.isPcSkill = true;
            }
        },
        wsSkill(v) {
            if (v != "")
                this.isWsSkill = true;
        },

        hiddenAll(v) {
            if (v) {
                this.isUse1 = this.isPcSkill;
                this.isUse2 = this.isWsSkill;
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
    width: 30%;
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