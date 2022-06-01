<template>
    <div class="battlepoints">

        <div class="savepoints">
            <div class="savebtm">
                <h4>SAVE</h4>
                <input type="number" name="" id="" class="savebtminp">
            </div>
            <!--   <div class="savebtm">
                        <h4>BTM</h4>
                        <input type="number" name="" id="" class="savebtminp">
                    </div> -->
        </div>

        <div class="takedmg">
            <div class="takedmgrow">
                <div class="fourpoints">
                    <div style="width: 100%">
                        <strong>_.LIGHT_</strong>
                    </div>

                    <div class="dmgpoints">
                        <input type="checkbox" name="" id="check1" class="pointinp" value="2">
                        <input type="checkbox" name="" id="" class="pointinp" value="2">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                    </div>
                    <div class="dmglvl">
                        <strong style="color: white">Stun 0</strong>
                    </div>
                </div>
                <div class="fourpoints">
                    <strong>SERIOUS</strong>
                    <div class="dmgpoints">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                    </div>
                    <div class="dmglvl">
                        <strong style="color: white">Stun -1</strong>
                    </div>
                </div>
                <div class="fourpoints">
                    <strong>CRITICAL</strong>
                    <div class="dmgpoints">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                    </div>
                    <div class="dmglvl">
                        <strong style="color: white">Stun -2</strong>
                    </div>
                </div>
                <div class="fourpoints">
                    <strong>MORTAL0</strong>
                    <div class="dmgpoints">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                    </div>
                    <div class="dmglvl">
                        <strong style="color: white">Stun -3</strong>
                    </div>
                </div>
                <div class="fourpoints">
                    <strong>MORTAL1</strong>
                    <div class="dmgpoints">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                    </div>
                    <div class="dmglvl">
                        <strong style="color: white">Stun -4</strong>
                    </div>
                </div>
            </div>
            <div class="takedmgrow">
                <div class="fourpoints">
                    <strong>MORTAL2</strong>
                    <div class="dmgpoints">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                    </div>
                    <div class="dmglvl">
                        <strong style="color: white">Stun -5</strong>
                    </div>
                </div>
                <div class="fourpoints">
                    <strong>MORTAL3</strong>
                    <div class="dmgpoints">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                    </div>
                    <div class="dmglvl">
                        <strong style="color: white">Stun -6</strong>
                    </div>
                </div>
                <div class="fourpoints">
                    <strong>MORTAL4</strong>
                    <div class="dmgpoints">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                    </div>
                    <div class="dmglvl">
                        <strong style="color: white">Stun -7</strong>
                    </div>
                </div>
                <div class="fourpoints">
                    <strong>MORTAL5</strong>
                    <div class="dmgpoints">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                    </div>
                    <div class="dmglvl">
                        <strong style="color: white">Stun -8</strong>
                    </div>
                </div>
                <div class="fourpoints">
                    <strong>MORTAL6</strong>
                    <div class="dmgpoints">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                    </div>
                    <div class="dmglvl">
                        <strong style="color: white">Stun -9</strong>
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
            el1: document.getElementById('check1'),

            check1: false,
            check2: 0,
            check3: 0,
            check4: 0,
            check5: 0,
            check6: 0,
            check7: 0,
            check8: 0,
            check9: 0,
            check10: 0,
            check11: 0,
            check12: 0,
            check13: 0,
            check14: 0,
            check15: 0,
            check16: 0,
            check17: 0,
            check18: 0,
            check19: 0,
            check20: 0,
            check21: 0,
            check22: 0,
            check23: 0,
            check24: 0,
            check25: 0,
            check26: 0,
            check27: 0,
            check28: 0,
            check29: 0,
            check30: 0,
            check31: 0,
            check32: 0,
            check33: 0,
            check34: 0,
            check35: 0,
            check36: 0,
            check37: 0,
            check38: 0,
            check39: 0,
            check40: 0,
        }
    },

    methods: {

    },

    watch: {

    }
}
</script>

<style scoped>
.battlepoints {
    margin: 3px;
    display: flex;
    flex-direction: row;
}

.savepoints {
    width: 15%;
    height: 120px;
    display: flex;
    flex-direction: row;
}

.savebtm {
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    width: 90%;
    justify-content: center;
    align-items: center;
}

.savetitle {
    display: flex;
}

.savebtminp {
    height: 75px;
    width: 90%;
}


.fourpoints {
    display: flex;
    flex-direction: column;
    margin: 2px;
    width: 20%;
}

.dmgpoints {
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    width: 100%;
}

.dmglvl {
    background-color: black;
    width: 100%;
}

.takedmg {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
}

.takedmgrow {
    display: flex;
    flex-direction: row;
}

.pointinp {
    display: flex;
    width: 20%;
}
</style>