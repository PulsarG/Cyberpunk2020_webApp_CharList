<template>
    <div class="head">

        <div class="allstats">
            <nickname-char></nickname-char>
            <role-char></role-char>
            <div class="charpoints">
                <label for="charpoints" class="cplabel"><strong style="color: white">CHARACTER POINTS</strong></label>
                <input type="number" id="charpoints" class="charpointsinput">
            </div>
            <stats-char></stats-char>
            <armor-char></armor-char>
            <battle-points></battle-points>
        </div>

        <div class="photo">
            <div class="fotoimg">
                <img src="" alt="">
            </div>
            <more-stats></more-stats>
        </div>
    </div>
</template>

<script>
import NicknameChar from "@/listcomponent/headcomponents/NicknameChar.vue"
import RoleChar from "@/listcomponent/headcomponents/RoleChar.vue";
import StatsChar from "@/listcomponent/headcomponents/StatsChar.vue";
import ArmorChar from "@/listcomponent/headcomponents/ArmorChar.vue";
import BattlePoints from "@/listcomponent/headcomponents/BattlePoints.vue";
import MoreStats from "@/listcomponent/headcomponents/MoreStats.vue"

export default {
    components: { NicknameChar, RoleChar, StatsChar, ArmorChar, BattlePoints, MoreStats },
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
    width: 50%
}

.fotoimg {
    border: 5px solid black;
    border-radius: 5%;
    margin: 5px;
    height: 80%;
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
</style>