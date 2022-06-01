<template>
    <button class="btnsubmenu" @click="showTable">Custom Cybernetics</button>

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
        <tbody style="display: flex; flex-direction: column">
            <tr class="item" v-for="i in $store.state.customs.Customcybernetics" :key="i.name">
                <th class="nameitem">{{ i.name }}</th>
                <td class="code">{{ i.code }}</td>
                <td class="price">{{ i.price }}</td>
                <td class="hum">{{ i.humanity }}</td>
                <button class="btn" @click="addCybernetics(i)"> + BUY</button>
            </tr>
            <tr class="item" style="margin-top: 50px">
                <th class="nameitem"><input v-model="this.customitem.name" type="text"></th>
                <td class="code"><input v-model="this.customitem.code" type="text"></td>
                <td class="price"><input v-model="this.customitem.price" type="number" name="" id=""></td>
                <td class="hum"><input v-model="this.customitem.humanity" type="text"></td>
                <button class="btn" @click="addCustomCybernetics"> Create implant</button>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    data() {
        return {
            isShow: false,

            customitem: {
                name: "",
                code: "",
                price: "",
                humanity: ""
            }
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
            this.$store.commit('addCustomCybernetics', this.customitem);
        },

        addCybernetics(i) {
            this.$store.commit('addCybernetics', i);
        },
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

.table {}

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

.btnadd {
    border: none;
    display: flex;
    justify-self: center;
    align-self: center;
    width: 20%;
    align-items: center;
    justify-content: center;
    height: 25px;
}

input {
    width: 100%;
}
</style>