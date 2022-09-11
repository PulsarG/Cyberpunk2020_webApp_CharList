<template>
  <base-buttonslice class="btnsubmenu" @click="showTable">
    <p>Custom Gear</p>
  </base-buttonslice>
  <table class="table" v-show="isShow">
    <thead>
      <tr class="item">
        <th class="type" style="color: blue">Type</th>
        <th class="price" style="color: blue">Price</th>
        <th class="btn" style="color: blue"></th>
        <th class="btn" style="color: blue"></th>
      </tr>
    </thead>
    <tbody style="display: flex; flex-direction: column">
      <tr
        class="item"
        v-for="i in $store.state.customs.Customgear"
        :key="i.name"
      >
        <td class="type">{{ i.type }}</td>
        <td class="price">{{ i.price }}</td>
        <button class="btn" @click="deleteCustomArmor(i)">Del</button>
        <button class="btn" @click="addArmor(i)">BUY</button>
      </tr>

      <h4>Добавить свое Снаряжение</h4>

      <tr class="item" style="margin-top: 1px">
        <td class="type"><input type="text" id="typeg" /></td>
        <td class="price"><input type="text" name="" id="priceitemg" /></td>
        <button class="btnaddimp" @click="addCustomGear">Create Armor</button>
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

    addCustomGear() {
      let type = document.getElementById("typeg").value;
      let price = document.getElementById("priceitemg").value;

      let X = {
        type,
        price,
      };

      this.$store.commit("addCustomGear", X);

      document.getElementById("typeg").value = "";
      document.getElementById("priceitemg").value = "";
    },

    addArmor(i) {
      this.$store.commit("addGear", i);
    },

    deleteCustomArmor(i) {
      this.$store.commit("deleteCustomGear", i);
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

.btn {
  width: 8%;
}

.btnaddimp {
  width: 15%;
}

.btnadd {
  border: none;
  display: flex;
  justify-self: center;
  align-self: center;
  width: 15%;
  align-items: center;
  justify-content: center;
  height: 25px;
}

input {
  width: 100%;
  border: none;
  height: 100%;
}

.type {
  width: 50%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
}

.price {
  width: 40%;
  border: 1px solid black;
}
</style>
