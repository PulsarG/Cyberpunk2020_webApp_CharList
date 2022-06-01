<template>
    <div class="fullcharlist" id="mainlist">

        <div>
            <button class="btn" @click="openSettings">Settings</button>
            <div class="settings" v-show="isOpenSettings">
                <button>Char-list</button>
                <button>Auto-armor</button>
                <button>Save current char</button>
            </div>
        </div>

        <div>
            <button class="btn" @click="openShop">Shop</button>
            <div class="shopmenu" v-show="isOpenShop">

                <button class="btnsm" @click="openCybershop">Cybernetics / Импланты</button>
                <div class="submenu" v-show="isCybershopOpen">
                    <cybernetics-shop></cybernetics-shop>
                </div>

                <button class="btnsm">Armor</button>
                <button class="btnsm">Weapons</button>
            </div>
        </div>

        <div class="">
            <button class="btn" @click="openCharlist">
                Charlist
            </button>
            <div v-show="isOpenCharlist">
                <char-list :Char="Char"></char-list>
            </div>
        </div>

        <div class="">
            <button class="btn" @click="openDeck">
                Deck
            </button>
            <div v-show="isOpenDeck">
                <deck-list></deck-list>
            </div>
        </div>
        <button @click="setWidth">SET WIDTH</button>
    </div>
</template>

<script>
import CharList from "@/components/CharList.vue";
import DeckList from "@/components/DeckList.vue";

import CyberneticsShop from "@/shopcomponents/CyberneticsShop.vue";

export default {
    components: { CharList, DeckList, CyberneticsShop },
    data() {
        return {
            isOpenCharlist: true,
            isOpenDeck: false,
            isOpenSettings: false,
            isOpenShop: true,

            isCybershopOpen: false,

            setWidthcount: 1,
        }
    },
    methods: {
        openCharlist() {
            if (!this.isOpenCharlist) {
                this.isOpenCharlist = true;
            } else {
                this.isOpenCharlist = false;
            }
            /*   return this.isOpenCharlist */
        },
        openDeck() {
            if (!this.isOpenDeck) {
                this.isOpenDeck = true;
            } else {
                this.isOpenDeck = false;
            }
        },

        openSettings() {
            if (!this.isOpenSettings) { this.isOpenSettings = true } else { this.isOpenSettings = false }
        },

        openShop() {
            if (!this.isOpenShop) {
                this.isOpenShop = true;
            } else {
                this.isOpenShop = false;
            }
        },


        openCybershop() {
            if (!this.isCybershopOpen) {
                this.isCybershopOpen = true;
            } else {
                this.isCybershopOpen = false
            }
        },

        setWidth() {
            if (this.setWidthcount) {
                document.getElementById('mainlist').style.width = '60%';
                this.setWidthcount -= 1;
            } else {
                document.getElementById('mainlist').style.width = '50%';
                this.setWidthcount += 1;
            }

        }
    }
}
</script>

<style scoped>
.fullcharlist {
    display: flex;
    flex-direction: column;
    width: 50%;
    /*  justify-self: center; */
    align-self: center;
    margin: auto;
}

.btn {
    height: 30px;
    width: 100%;
}

.shopmenu {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.btnsm {
    width: 50%;
    margin-top: 10px;
}

.submenu {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
}
</style>