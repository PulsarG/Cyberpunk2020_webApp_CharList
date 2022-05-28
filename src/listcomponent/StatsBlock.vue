<template>
    <div class="head">

        <div class="allstats">

            <!-- <div class="nickblock">
                <label class="nicklabel" for="nick"> <strong style="color: white">NAME</strong></label>
                <input type="text" id="nick" class="nick" v-model="this.Char.nick">
            </div> -->

            <nickname-char></nickname-char>

            <!--  <div class="roleblock">
                <label class="nicklabel" for="role"><strong style="color: white">ROLE</strong></label>
                <select name="role" id="role" class="nick">
                    <option value="msk"><strong style="color: white">SELECT</strong></option>
                    <option value="msk"><strong style="color: white">Solo</strong></option>
                    <option value="msk"><strong style="color: white">Rocker</strong></option>
                    <option value="msk"><strong style="color: white">Netrunner</strong></option>
                    <option value="msk"><strong style="color: white">Media</strong></option>
                    <option value="msk"><strong style="color: white">Nomad</strong></option>
                    <option value="msk"><strong style="color: white">Fixer</strong></option>
                    <option value="msk"><strong style="color: white">Cop</strong></option>
                    <option value="msk"><strong style="color: white">Corp</strong></option>
                    <option value="msk"><strong style="color: white">Techie</strong></option>
                    <option value="msk"><strong style="color: white">Medtechie</strong></option>
                </select>
            </div> -->

            <role-char></role-char>

            <div class="charpoints">
                <label for="charpoints" class="cplabel"><strong style="color: white">CHARACTER POINTS</strong></label>
                <input type="number" id="charpoints" class="charpointsinput">
            </div>

            <!-- <div class="stats">
                <div class="titlestats">
                    <label for="" class="statslabel"><strong style="color: white">STATS</strong></label>
                    <div></div>
                </div>

                <div class="statscount">
                    <div class="statsrow">
                        <div class="stat">
                            <label for="stat" class="statlabel"> <strong>INT</strong> </label>
                            <input type="number" name="stat" id="stat" class="statinp">
                        </div>
                        <div class="stat">
                            <label for="stat" class="statlabel"> <strong>REF</strong> </label>
                            <input type="number" name="stat" id="stat" class="statinp">
                        </div>
                        <div class="stat">
                            <label for="stat" class="statlabel"> <strong>TECH</strong> </label>
                            <input type="number" name="stat" id="stat" class="statinp">
                        </div>
                        <div class="stat">
                            <label for="stat" class="statlabel"> <strong>COOL</strong> </label>
                            <input type="number" name="stat" id="stat" class="statinp">
                        </div>
                    </div>
                    <div class="statsrow">
                        <div class="stat">
                            <label for="stat" class="statlabel"> <strong>ATTR</strong> </label>
                            <input type="number" name="stat" id="stat" class="statinp">
                        </div>
                        <div class="stat">
                            <label for="stat" class="statlabel"> <strong>LUCK</strong> </label>
                            <input type="number" name="stat" id="stat" class="statinp">
                        </div>
                        <div class="stat">
                            <label for="stat" class="statlabel"> <strong>MA</strong> </label>
                            <input type="number" name="stat" id="stat" class="statinp">
                        </div>
                        <div class="stat">
                            <label for="stat" class="statlabel"> <strong>BODY</strong> </label>
                            <input type="number" name="stat" id="stat" class="statinp">
                        </div>
                    </div>
                    <div class="statsrow">
                        <div class="stat">
                            <label for="stat" class="statlabel"> <strong>EMP</strong> </label>
                            <input type="number" name="stat" id="stat" class="statinp">
                        </div>
                        <div class="stat">
                            <label for="stat" class="statlabel"> <strong>Run</strong> </label>
                            <input type="number" name="stat" id="stat" class="statinp">
                        </div>
                        <div class="stat">
                            <label for="stat" class="statlabel"> <strong>Leap</strong> </label>
                            <input type="number" name="stat" id="stat" class="statinp">
                        </div>
                        <div class="stat">
                            <label for="stat" class="statlabel"> <strong>Lift</strong> </label>
                            <input type="number" name="stat" id="stat" class="statinp">
                        </div>
                    </div>
                </div>
            </div> -->

            <stats-char></stats-char>

            <!-- 
            <div class="armorblock">
                <div class="armortitle">
                    <div class="armortitleone">
                        <strong style="color: white">Location</strong>
                    </div>
                    <div class="armortitleone">
                        <strong style="color: white">Armor SP</strong>
                    </div>
                </div>

                <div class="armorstat">
                    <div class="armorlocation">
                        <div class="armor"><strong>Head <br> 1</strong></div>
                        <div class="armor"><strong>Torso <br> 2-4</strong></div>
                        <div class="armor"><strong>R. Arm <br> 5</strong></div>
                        <div class="armor"><strong>L. Arm <br> 6</strong></div>
                        <div class="armor"><strong>R. Leg <br> 7-8</strong></div>
                        <div class="armor"><strong>L. Leg <br> 9-0</strong></div>
                    </div>
                    <div class="armorlocation">
                        <div class="armor"><input type="number" name="" id="" class="armorinp"></div>
                        <div class="armor"><input type="number" name="" id="" class="armorinp"></div>
                        <div class="armor"><input type="number" name="" id="" class="armorinp"></div>
                        <div class="armor"><input type="number" name="" id="" class="armorinp"></div>
                        <div class="armor"><input type="number" name="" id="" class="armorinp"></div>
                        <div class="armor"><input type="number" name="" id="" class="armorinp"></div>
                    </div>
                </div>
            </div> -->

            <armor-char></armor-char>


            <!-- 
            <div class="battlepoints">

                <div class="savepoints">
                    <div class="savebtm">
                        <h4>SAVE</h4>
                        <input type="number" name="" id="" class="savebtminp">
                    </div>
                      <div class="savebtm">
                        <h4>BTM</h4>
                        <input type="number" name="" id="" class="savebtminp">
                    </div>
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

            </div> -->

            <battle-points></battle-points>

        </div>





        <div class="photo">
            <div class="fotoimg">
                <img src="" alt="">
            </div>

            <div class="morestats">
                <div class="rep">
                    <h4>REP</h4>
                    <input type="text" class="morestatsinp">
                </div>

                <div class="rep">
                    <h4>CURRENT IP</h4>
                    <input type="text" class="morestatsinp">
                </div>

                <div class="rep">
                    <h4>HUMANITY</h4>
                    <input type="text" class="morestatsinp">
                </div>
            </div>


        </div>
    </div>

    <button @click="setNickFromStore">2312312312</button>
</template>

<script>
import NicknameChar from "@/listcomponent/headcomponents/NicknameChar.vue"
import RoleChar from "@/listcomponent/headcomponents/RoleChar.vue";
import StatsChar from "@/listcomponent/headcomponents/StatsChar.vue";
import ArmorChar from "@/listcomponent/headcomponents/ArmorChar.vue";
import BattlePoints from "@/listcomponent/headcomponents/BattlePoints.vue";

export default {
    components: { NicknameChar, RoleChar, StatsChar, ArmorChar, BattlePoints, },
    props: {

    },
    data() {
        return {
            Char: {
                nick: ""
            },
        }
    },
    methods: {
        setNickFromStore() {
            this.Char.nick = this.$store.state.Char.nick;
        }
    },
    watch: {
        nick(v) {
            this.$store.commit('setNick', v);
        }
    }

}
</script>

<style scoped>
.photo {
    display: flex;
    flex-direction: column;
}

.fotoimg {
    border: 5px solid black;
    border-radius: 5%;
    margin: 5px;
    height: 80%;
}

.morestats {
    display: flex;
    flex-direction: row;
}

.rep {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.morestatsinp {
    display: flex;
    width: 25%;
    height: 60%;
    margin-left: 3px;
}






.head {
    display: flex;
    flex-direction: row;
    /*  border: 2px solid yellow; */
}

.allstats {
    width: 50%;
    /*  border: 2px solid red; */
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
}

/* .nickblock {
    width: 100%;
    display: flex;
} */

.photo {
    width: 50%;
    /* border: 2px solid blue; */
}

/* .nicklabel {
    background-color: black;
    width: 20%;
}

.nick {
    width: 80%;
}

.roleblock {
    margin-top: 3px;
    width: 100%;
    display: flex;
} */

.charpoints {
    margin-top: 3px;
    width: 100%;
    display: flex;
    align-items: center;
}

.cplabel {
    background-color: black;
    width: 40%;
}

.charpointsinput {
    width: 10%;
    height: 25px;
}

/* .statslabel {
    background-color: black;
    width: 15%;
    margin-top: 3px;
    display: flex;
}

.stats {
    display: flex;
    flex-direction: column;
}

.statscount {
    display: flex;
    flex-direction: column;
}

.statsrow {
    display: flex;
    flex-direction: row;
    margin-top: 3px;
}

.stat {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.statinp {
    width: 30%;
    height: 25px;
}

.statlabel {
    margin-right: 10px;
} */

/* .armorblock {
    display: flex;
    flex-direction: row;
    margin-top: 3px;
}

.armortitle {
    display: flex;
    flex-direction: column;
    width: 20%;
}

.armortitleone {
    height: 40px;
    margin: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;

}

.armorstat {
    display: flex;
    flex-direction: column;
    width: 80%;
}

.armorlocation {
    display: flex;
    flex-direction: row;
}

.armor {
    border: 1px solid black;
    width: 20%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.armorinp {
    display: flex;
    width: 90%;
    height: 90%;
} */




/* .battlepoints {
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
} */
</style>