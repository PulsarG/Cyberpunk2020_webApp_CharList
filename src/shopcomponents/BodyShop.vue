<template>

    <button class="btnsubmenu" @click="showTable">Телесные импланты</button>

    <table class="table" v-show="isShow">
        <thead>
            <tr class="item">
                <th class="nameitem" style="color: blue">NAME</th>
                <th class="code" style="color: blue">CODE</th>
                <th class="price" style="color: blue">PRICE</th>
                <th class="hum" style="color: blue">HUMANITY</th>
                <th class="btn" style="color: blue"></th>
            </tr>
        </thead>
        <tbody>
            <tr class="item" v-for="i in $store.state.cyberneticsshop.Body" :key="i.name">
                <th class="nameitem">{{ i.name }}</th>
                <td class="code">{{ i.code }}</td>
                <td class="price">{{ i.price }}</td>
                <td class="hum">{{ i.humanity }}</td>
                <button class="btn" @click="addCybernetics(i)"> + BUY</button>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    data() {
        return {
            isShow: false,
        }
    },
    methods: {
        showTable() {
            if (!this.isShow) {
                this.isShow = true
            } else {
                this.isShow = false
            }
        },

        addCustomCybernetics() {
            this.$store.commit('addCustomCybernetics');
        },

        addCybernetics(i) {
            this.$store.commit('addCybernetics', i);
        }
    }
}
</script>

<style scoped>
.btnsubmenu {
    width: 35%;
    margin-top: 5px;
}

.cybershop {
    width: 100%;
    display: flex;
    flex-direction: row;
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

.btn {
    width: 20%;
}

</style>