<template>
  <base-buttonslice class="btnsubmenu" @click="showTable">
    <p>{{ NameShop }}</p>
  </base-buttonslice>
  <!-- <button class="btnsubmenu" @click="showTable">{{ NameShop }}</button> -->

  <table class="table" v-show="isShow">
    <thead>
      <tr class="item">
        <th class="type" style="color: blue">Type</th>
        <th class="nameitem" style="color: blue">NAME</th>
        <th class="wa" style="color: blue">WA</th>
        <th class="con" style="color: blue">Con</th>
        <th class="avail" style="color: blue">Avail</th>
        <th class="damage" style="color: blue">Damage</th>
        <th class="shots" style="color: blue">Shots</th>
        <th class="rof" style="color: blue">Rof</th>
        <th class="rel" style="color: blue">Rel</th>
        <th class="range" style="color: blue">Range</th>
        <th class="price" style="color: blue">Price</th>
        <th class="btn" style="color: blue"></th>
      </tr>
    </thead>
    <tbody>
      <tr class="item" v-for="i in Items" :key="i.name">
        <td class="type">{{ i.type }}</td>
        <th class="nameitem">{{ i.name }}</th>
        <td class="wa">{{ i.wa }}</td>
        <td class="con">{{ i.con }}</td>
        <th class="avail">{{ i.avail }}</th>
        <td class="damage">{{ i.damage }}</td>
        <td class="shots">{{ i.shots }}</td>
        <td class="rof">{{ i.rof }}</td>
        <th class="rel">{{ i.rel }}</th>
        <td class="range">{{ i.range }}</td>
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
  width: 10%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
}

.nameitem {
  width: 30%;
  border: 1px solid black;
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
}

.type {
  width: 20%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
}

.wa {
  width: 10%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
}

.con {
  width: 10%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
}

.rof {
  width: 10%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
}

.rel {
  width: 10%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
}

.avail {
  width: 10%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
}

.damage {
  width: 18%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
}

.shots {
  width: 10%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
}

.range {
  width: 10%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
}

.btn {
  width: 20%;
}
</style>
