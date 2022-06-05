<template>
    <div class="cnblock">

        <button class="title" @click="openImplants">
            <h3>
                <strong style="color: white">WEAPONS</strong>
            </h3>
        </button>

        <table class="table" v-show="isOpenImplants">
            <thead>
                <tr class="item">
                    <th class="nameitem" style="color: blue">Name</th>
                    <th class="wi" style="color: blue">Type</th>
                    <th class="wi" style="color: blue">WA</th>
                    <th class="wi" style="color: blue">Con</th>
                    <th class="wi" style="color: blue">Avall</th>
                    <th class="wi" style="color: blue">Dammage</th>
                    <th class="wi" style="color: blue">Ammo</th>
                    <th class="wi" style="color: blue">Shots</th>
                    <th class="wi" style="color: blue">ROF</th>
                    <th class="wi" style="color: blue">Rel</th>
                    <th class="btn" style="color: blue"></th>
                </tr>
            </thead>
            <tbody>
                <tr class="item" v-for="i in $store.state.Weapons" :key="i.name">
                    <th class="nameitem">{{ i.name }}</th>
                    <td class="hum">{{ i.humanity }}</td>
                    <td class="price">{{ i.price }}</td>
                    <button class="btn" @click="deleteCybernetics(i)"> - delete implant</button>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpenImplants: true,
        }
    },
    methods: {
        openImplants() {
            if (!this.isOpenImplants) {
                this.isOpenImplants = true
            } else {
                this.isOpenImplants = false
            }
        },

        deleteCybernetics(i) {
            this.$store.commit('deleteWeapons', i);
        }
    }
}
</script>

<style scoped>
.cnblock {
    margin-top: 5px;
}

.title {
    background-color: black;
    width: 100%;
    margin: auto;
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
}

.table {
    width: 100%;
}

.item {
    width: 100%;
    display: flex;
    margin-top: 2px;
}

.hum {
    width: 15%;
    border: 1px solid black;
}

.price {
    width: 10%;
    border: 1px solid black;
}

.code {
    width: 10%;
    border: 1px solid black;
}

.nameitem {
    width: 50%;
    border: 1px solid black;
}

.wi {
    border: 1px solid black;
    width: 10%;
}
</style>