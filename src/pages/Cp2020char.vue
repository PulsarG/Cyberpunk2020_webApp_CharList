<template>
    <div class="fullcharlist">

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
    </div>
</template>

<script>
import CharList from "@/components/CharList.vue";
import DeckList from "@/components/DeckList.vue";

export default {
    components: { CharList, DeckList },
    data() {
        return {
           

            isOpenCharlist: true,
            isOpenDeck: false,
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
    height: 20px;
    width: 100%;
}
</style>