<template>
  <!-- <button class="btnsubmenu" @click="showTable">Custom Weapons</button> -->
  <base-buttonslice class="btnsubmenu" @click="showTable">
    <p>Custom Armor</p>
  </base-buttonslice>
  <table class="table" v-show="isShow">
    <thead>
      <tr class="item">
        <th class="type" style="color: blue">Type</th>
        <th class="nameitem" style="color: blue">Чать тела</th>
        <th class="wa" style="color: blue">SP</th>
        <th class="range" style="color: blue">Обр</th>
        <th class="price" style="color: blue">Price</th>
        <th class="btn" style="color: blue"></th>
        <th class="btn" style="color: blue"></th>
      </tr>
    </thead>
    <tbody style="display: flex; flex-direction: column">
      <tr
        class="item"
        v-for="i in $store.state.customs.Customarmor"
        :key="i.name"
      >
      <td class="type">{{ i.type }}</td>
        <th class="nameitem">{{ i.body }}</th>
        <td class="wa">{{ i.sp }}</td>
        <td class="range">{{ i.obr }}</td>
        <td class="price">{{ i.price }}</td>
        <button class="btn" @click="addWArmor(i)">+ BUY</button>
        <button class="btn" @click="deleteCustomArmor(i)">Delete</button>
      </tr>

      <h4>Добавить свою Броню</h4>

      <tr class="item" style="margin-top: 1px">
        <td class="type"><input type="text" id="type" /></td>
        <td class="nameitem"><input type="text" id="nameitem" /></td>
        <td class="wa"><input type="text" name="" id="wa" /></td>
        <td class="range"><input type="text" id="range" /></td>
        <td class="price"><input type="text" name="" id="priceitem" /></td>
        <button class="btnaddimp" @click="addCustomArmor">
          Create Armor
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

    addCustomArmor() {
      let type = document.getElementById("type").value;
      let body = document.getElementById("nameitem").value;
      let sp = document.getElementById("wa").value;
      let obr = document.getElementById("range").value;
      let price = document.getElementById("priceitem").value;

      let X = {
        type,
        body,
        sp,
        obr,
        price,
      };

      this.$store.commit("addCustomArmor", X);

      document.getElementById("type").value = "";
      document.getElementById("nameitem").value = "";
      document.getElementById("wa").value = "";
      document.getElementById("range").value = "";
      document.getElementById("priceitem").value = "";
    },

    addArmor(i) {
      this.$store.commit("addCustomArmor", i);
    },

    deleteCustomArmor(i) {
      this.$store.commit("deleteCustomArmor", i);
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

.table {
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
  width: 10%;
}

.btnaddimp {
  width: 20%;
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

.nameitem {
  width: 25%;
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

.wa {
  width: 5%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
}


.range {
  width: 5%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
}

.price {
  width: 5%;
  border: 1px solid black;
}
</style>
