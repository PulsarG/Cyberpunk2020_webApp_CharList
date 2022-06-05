<template>

    <button class="btnsubmenu" @click="showTable">{{ NameShop }}</button>

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
            <tr class="item" v-for="i in Items" :key="i.name">
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
    props: {
        Items: Array,
        NameShop: String,
    },
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

        addCybernetics(i) {
            this.$store.commit('addCybernetics', i);
        }
    }
}
</script>

<style scoped>
.btnsubmenu {
    width: 40%;
    margin-top: 5px;
}

.cybershop {
    width: 100%;
    display: flex;
    flex-direction: row;
}

.table {}

.item {
    width: 100%;
    display: flex;
    margin-top: 2px;
    background: white;
}

.hum {
    width: 15%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
}

.price {
    width: 10%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
}

.code {
    width: 10%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
}

.nameitem {
    width: 50%;
    border: 1px solid black;
    display: flex;
    justify-content: flex-start;
    padding-left: 10px;
}

.btn {
    width: 20%;
}
</style>