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
                <img :src='imgRole' alt="">
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

            link: "http://drive.google.com/uc?export=view&id=",
            imgRole: "https://klike.net/uploads/posts/2019-11/1572778667_3.jpg",
        }
    },
    methods: {
        setNickFromStore() {
            this.Char.nick = this.$store.state.Char.nick;
        }
    },
    computed: {
        role() {
            return this.$store.state.role
        }
    },
    watch: {
        nick(v) {
            this.$store.commit('setNick', v);
        },

        role(v) {
            if (v == "Cop")
                this.imgRole = this.link + "1RX4eC1sC_94-9cf1meUzvbSIkUxiPjIS"
            else if (v == "Solo")
                this.imgRole = this.link + "1wTypQEq-VxxW91zsX_1d_QFrq66af0QK"
            else if (v == "Corpo")
                this.imgRole = this.link + "1XMuA8M-Ac8qzByoVcCMmJWSwQZD9IfFg"
            else if (v == "Fixer")
                this.imgRole = this.link + "1MugmfRIHp1HsgXfYf5lO7_6VQY4MSkds"
            else if (v == "Media")
                this.imgRole = this.link + "1Pd-SOSzdvSyD5Lt_L8SGhu_tNR5dJXgu"
            else if (v == "Netrunner")
                this.imgRole = this.link + "1JRrjeb5sI-CWHUU6MDGmCx6Uo9UkTOlx"
            else if (v == "Nomad")
                this.imgRole = this.link + "1AErgQolD-4_DJoVoZJJaEHUKWqAlVKTk"
            else if (v == "Rocker")
                this.imgRole = this.link + "1k9x0iVcK-vNRV3ZDHveZqY5eJFgf_ylo"
            else if (v == "Techie" || v == "Medtechie")
                this.imgRole = this.link + "1gNUQ0j4T3lRIhJ1jYzRvy7JhlWM0jPiv"
        }
    }

}
</script>

<style scoped>
.photo {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-left: 3px;
    align-items: center;
    justify-content: center;
}

.fotoimg {
    border: 5px solid black;
    border-radius: 5%;
    height: 70%;
    display: flex;
    width: 70%;
    justify-content: center;
    align-items: center;
}

img {
    width: 70%;
    height: 70%;
    margin: auto;
}

.head {
    display: flex;
    flex-direction: row;
    height: auto;
}

.allstats {
    width: 50%;
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