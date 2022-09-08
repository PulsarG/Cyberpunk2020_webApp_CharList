<template>
  <base-buttonslice class="btnsubmenu" @click="showTable">
    <p>{{ NameShop }}</p>
  </base-buttonslice>
  <!-- <button class="btnsubmenu" @click="showTable">{{ NameShop }}</button> -->

  <table class="table" v-show="isShow">
    <thead>
      <tr class="item">
        <th class="type" >Навык</th>
        <th class="price" >Цена за уровень</th>
        <th class="btn" style="color: blue"></th>
      </tr>
    </thead>
    <tbody>
      <tr class="item" v-for="i in Items" :key="i.name">
        <td class="type">{{ i.type }}</td>
        <td class="price">{{ i.price }}</td>
        <button class="btn" @click="addArmor(i)">+ BUY</button>
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

    addArmor(i) {
      this.$store.commit("addGear", i);
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
  justify-content: flex-start;
  align-items: center;
}
p {
  margin-left: 15px;
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
  width: 30%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
}

.type {
  width: 60%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
}

.btn {
  width: 20%;
}
</style>
