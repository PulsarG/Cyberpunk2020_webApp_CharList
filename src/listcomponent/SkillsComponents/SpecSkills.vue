<template>
    <div class="skillslist">
        <div class="title">
            <button @click="closeSkills" class="title">
                <h4>SPECIALABILITIES</h4>
            </button>
        </div>

        <div class="skillsmenu" v-show="!isSkillClose">

            <div class="skill">
                <div class="skillname">
                    <p>Authority................................</p>
                </div>
                <div class="skillus">
                    <div class="skillpoints">
                        <input type="number" name="" id="" class="skillpointsinp">
                    </div>
                    <div class="skillchip">
                        <input type="checkbox" name="" id="">
                    </div>
                </div>
            </div>

            <div class="skill">
                <div class="skillname">
                    <p>Charismatic Leadership</p>
                </div>
                <div class="skillus">
                    <div class="skillpoints">
                        <input type="number" name="" id="" class="skillpointsinp">
                    </div>
                    <div class="skillchip">
                        <input type="checkbox" name="" id="">
                    </div>
                </div>
            </div>
            <div class="skill">
                <div class="skillname">
                    <p>Combat Sense</p>
                </div>
                <div class="skillus">
                    <div class="skillpoints">
                        <input type="number" name="" id="" class="skillpointsinp">
                    </div>
                    <div class="skillchip">
                        <input type="checkbox" name="" id="">
                    </div>
                </div>
            </div>
            <div class="skill">
                <div class="skillname">
                    <p>Credibility</p>
                </div>
                <div class="skillus">
                    <div class="skillpoints">
                        <input type="number" name="" id="" class="skillpointsinp">
                    </div>
                    <div class="skillchip">
                        <input type="checkbox" name="" id="">
                    </div>
                </div>
            </div>
            <div class="skill">
                <div class="skillname">
                    <p>Family</p>
                </div>
                <div class="skillus">
                    <div class="skillpoints">
                        <input type="number" name="" id="" class="skillpointsinp">
                    </div>
                    <div class="skillchip">
                        <input type="checkbox" name="" id="">
                    </div>
                </div>
            </div>
            <div class="skill">
                <div class="skillname">
                    <p>Interface</p>
                </div>
                <div class="skillus">
                    <div class="skillpoints">
                        <input type="number" name="" id="" class="skillpointsinp">
                    </div>
                    <div class="skillchip">
                        <input type="checkbox" name="" id="">
                    </div>
                </div>
            </div>
            <div class="skill">
                <div class="skillname">
                    <p>Jury Rig</p>
                </div>
                <div class="skillus">
                    <div class="skillpoints">
                        <input type="number" name="" id="" class="skillpointsinp">
                    </div>
                    <div class="skillchip">
                        <input type="checkbox" name="" id="">
                    </div>
                </div>
            </div>
            <div class="skill">
                <div class="skillname">
                    <p>Medical Tech</p>
                </div>
                <div class="skillus">
                    <div class="skillpoints">
                        <input type="number" name="" id="" class="skillpointsinp">
                    </div>
                    <div class="skillchip">
                        <input type="checkbox" name="" id="">
                    </div>
                </div>
            </div>
            <div class="skill">
                <div class="skillname">
                    <p>Resources</p>
                </div>
                <div class="skillus">
                    <div class="skillpoints">
                        <input type="number" name="" id="" class="skillpointsinp">
                    </div>
                    <div class="skillchip">
                        <input type="checkbox" name="" id="">
                    </div>
                </div>
            </div>
            <div class="skill">
                <div class="skillname">
                    <p>Streerdeal</p>
                </div>
                <div class="skillus">
                    <div class="skillpoints">
                        <input type="number" name="" id="" class="skillpointsinp">
                    </div>
                    <div class="skillchip">
                        <input type="checkbox" name="" id="">
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