<template>
  <base-buttonslice class="btnsubmenu" @click="showTable">
    <p>Custom Specgear</p>
  </base-buttonslice>
  <table class="table" v-show="isShow">
    <thead>
      <tr class="item">
        <th class="type">Наименование</th>
        <th class="nameitem">Описание</th>
        <th class="price">Цена</th>
        <th class="btn"></th>
        <th class="btn"></th>
      </tr>
    </thead>
    <tbody style="display: flex; flex-direction: column">
      <tr
        class="item"
        v-for="i in $store.state.customs.Customspec"
        :key="i.name"
      >
        <td class="type">{{ i.type }}</td>
        <th class="nameitem">{{ i.body }}</th>
        <td class="price">{{ i.price }}</td>
        <button class="btn" @click="deleteCustomSpec(i)">Del</button>
        <button class="btn" @click="addSpec(i)">BUY</button>
      </tr>

      <h4>Добавить свою Особую экипировку</h4>

      <tr class="item" style="margin-top: 1px">
        <td class="type"><input type="text" id="typeas" /></td>
        <td class="nameitem"><input type="text" id="nameitemas" /></td>
        <td class="price"><input type="text" name="" id="priceitemas" /></td>
        <button class="btnaddimp" @click="addCustomSpec">
          Create Specgear
        </button>
      </tr>
    </tbody>
  </table>
</template>

<script>
import BaseButtonslice from "@/components/BaseButtonslice.vue";
export default {
  components: { BaseButtonslice },
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

    addCustomSpec() {
      let type = document.getElementById("typeas").value;
      let body = document.getElementById("nameitemas").value;
      let price = document.getElementById("priceitemas").value;

      let X = {
        type,
        body,
        price,
      };

      this.$store.commit("addCustomSpec", X);

      document.getElementById("typeas").value = "";
      document.getElementById("nameitemas").value = "";
      document.getElementById("priceitemas").value = "";
    },

    addSpec(i) {
      this.$store.commit("addGear", i);
    },

    deleteCustomSpec(i) {
      this.$store.commit("deleteCustomSpec", i);
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

.item {
  width: 100%;
  display: flex;
  margin-top: 2px;
  background: white;
}

.nameitem {
  width: 50%;
  border: 1px solid black;
}

.btn {
  width: 7%;
}

.btnaddimp {
  width: 15%;
}

.btnadd {
  border: none;
  display: flex;
  justify-self: center;
  align-self: center;
  width: 10%;
  align-items: center;
  justify-content: center;
  height: 25px;
}

input {
  width: 100%;
  border: none;
  height: 100%;
}

.nameitem {
  width: 45%;
  border: 1px solid black;
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
}

.type {
  width: 45%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
}

.price {
  width: 10%;
  border: 1px solid black;
}
</style>
