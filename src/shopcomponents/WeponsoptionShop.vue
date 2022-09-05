<template>
  <base-buttonslice class="btnsubmenu" @click="showTable">{{
    NameShop
  }}</base-buttonslice>
  <!-- <button class="btnsubmenu" @click="showTable">{{ NameShop }}</button> -->
    <table class="table" v-show="isShow">
      <h4>* Бронебойные х3 цена</h4>
      <h4>** Гильзовые патроны для старых пушек х2 цена</h4>
      <h4>*** Препараты, наркотик х5 цена</h4>
      <thead>
        <tr class="item">
          <th class="nameitem" style="color: blue">NAME</th>
          <th class="range" style="color: blue">Amount</th>
          <th class="price" style="color: blue">Price</th>
          <th class="btn" style="color: blue"></th>
        </tr>
      </thead>
      <tbody>
        <tr class="item" v-for="i in Items" :key="i.name">
          <th class="nameitem">{{ i.name }}</th>
          <td class="range">{{ i.amount }}</td>
          <td class="price">{{ i.price }}</td>
          <button class="btn" @click="addWeapons(i)">+ BUY</button>
        </tr>
      </tbody>
    </table>
</template>

<script>
import BaseButtonslice from "@/components/BaseButtonslice.vue";
export default {
  components: { BaseButtonslice },
  props: {
    Items: Array,
    NameShop: String,
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    showTable() {
      if (!this.isShow) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },

    addWeapons(i) {
      this.$store.commit("addWeapons", i);
    },
  },
};
</script>

<style scoped>
h4 {
  color: orange;
}
.btnsubmenu {
  width: 500px;
  margin-top: 5px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cybershop {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.table {
}

.item {
  width: 100%;
  display: flex;
  margin-top: 2px;
  background: white;
}

.price {
  width: 15%;
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

.range {
  width: 15%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
}

.btn {
  width: 20%;
}
</style>
