<template>
    <div class="title">
        <h2>Магазин</h2>
    </div>
    <div>
        <button class="btn" @click="openShop"> <h1>SHOP</h1> </button>
        <div class="shopmenu" v-show="isOpenShop">

            <button class="btnsm" @click="openCybershop">Cybernetics / Импланты</button>
            <div class="submenu" v-show="isCybershopOpen">
                <cybernetics-shop></cybernetics-shop>
            </div>

            <button class="btnsm">Armor</button>
            <button class="btnsm">Weapons</button>
            <button class="btnsm">Other Items</button>
        </div>
    </div>
</template>

<script>
import CyberneticsShop from "@/shopcomponents/CyberneticsShop.vue";
export default {
    components: { CyberneticsShop },
    data() {
        return {
            isOpenShop: true,

            isCybershopOpen: false,
        }
    },
    methods: {
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
    }

}
</script>

<style scoped>
.title {
    width: 200px;
    position: relative;
    right: 150px;
    height: 15vh;
}

.btn {
    height: 30px;
    width: 100%;
    border: none;
    background: none;
}

.shopmenu {
    display: flex;
    flex-direction: column;
    margin-left: 5%;
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