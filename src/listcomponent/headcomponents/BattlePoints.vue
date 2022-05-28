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
                    <strong>LIGHT</strong>
                    <div class="dmgpoints">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                    </div>
                    <div class="dmglvl">
                        <strong style="color: white">Stun 0</strong>
                    </div>
                </div>
                <div class="fourpoints">
                    <strong>LIGHT</strong>
                    <div class="dmgpoints">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                    </div>
                    <div class="dmglvl">
                        <strong style="color: white">Stun 0</strong>
                    </div>
                </div>
                <div class="fourpoints">
                    <strong>LIGHT</strong>
                    <div class="dmgpoints">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                    </div>
                    <div class="dmglvl">
                        <strong style="color: white">Stun 0</strong>
                    </div>
                </div>
                <div class="fourpoints">
                    <strong>LIGHT</strong>
                    <div class="dmgpoints">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                    </div>
                    <div class="dmglvl">
                        <strong style="color: white">Stun 0</strong>
                    </div>
                </div>
                <div class="fourpoints">
                    <strong>LIGHT</strong>
                    <div class="dmgpoints">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                    </div>
                    <div class="dmglvl">
                        <strong style="color: white">Stun 0</strong>
                    </div>
                </div>
            </div>
            <div class="takedmgrow">
                <div class="fourpoints">
                    <strong>LIGHT</strong>
                    <div class="dmgpoints">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                    </div>
                    <div class="dmglvl">
                        <strong style="color: white">Stun 0</strong>
                    </div>
                </div>
                <div class="fourpoints">
                    <strong>LIGHT</strong>
                    <div class="dmgpoints">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                    </div>
                    <div class="dmglvl">
                        <strong style="color: white">Stun 0</strong>
                    </div>
                </div>
                <div class="fourpoints">
                    <strong>LIGHT</strong>
                    <div class="dmgpoints">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                    </div>
                    <div class="dmglvl">
                        <strong style="color: white">Stun 0</strong>
                    </div>
                </div>
                <div class="fourpoints">
                    <strong>LIGHT</strong>
                    <div class="dmgpoints">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                    </div>
                    <div class="dmglvl">
                        <strong style="color: white">Stun 0</strong>
                    </div>
                </div>
                <div class="fourpoints">
                    <strong>LIGHT</strong>
                    <div class="dmgpoints">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                        <input type="checkbox" name="" id="" class="pointinp">
                    </div>
                    <div class="dmglvl">
                        <strong style="color: white">Stun 0</strong>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
export default {

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
}

.savetitle {
    display: flex;
}

.savebtminp {
    height: 75px;
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
}

.dmglvl {
    background-color: black;
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