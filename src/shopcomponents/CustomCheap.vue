<template>
  <!-- <button class="btnsubmenu" @click="showTable">Custom Weapons</button> -->
  <base-buttonslice class="btnsubmenu" @click="showTable">
    <p>Customs, Языковые, Боевые искусства и Эксперт в...</p>
  </base-buttonslice>
  <table class="table" v-show="isShow">
    <thead>
      <tr class="item">
        <th class="type" >Навык</th>
        <th class="price" >Цена за уровень</th>
        <th class="btn" ></th>
        <th class="btn" ></th>
      </tr>
    </thead>
    <tbody style="display: flex; flex-direction: column">
      <tr
        class="item"
        v-for="i in $store.state.customs.Customcheap"
        :key="i.name"
      >
        <td class="type">{{ i.type }}</td>

        <td class="price">{{ i.price }}</td>
        <button class="btn" @click="deleteCustomCheap(i)">Del</button>
        <button class="btn" @click="addCheap(i)">BUY</button>
      </tr>

      <h4>Добавить свою Броню</h4>

      <tr class="item" style="margin-top: 1px">
        <td class="type"><input type="text" id="typeacc" /></td>
        <td class="price"><input type="text" name="" id="priceitemacc" /></td>
        <button class="btnaddimp" @click="addCustomCheap">Create Cheap</button>
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

    addCustomCheap() {
      let type = document.getElementById("typeacc").value;
     
      let price = document.getElementById("priceitemacc").value;

      let X = {
        type,
        price,
      };

      this.$store.commit("addCustomCheap", X);

      document.getElementById("typeacc").value = "";
      document.getElementById("priceitemacc").value = "";
    },

    addCheap(i) {
      this.$store.commit("addGear", i);
    },

    deleteCustomCheap(i) {
      this.$store.commit("deleteCustomCheap", i);
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
.table {
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
  width: 60%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
}

.price {
  width: 30%;
  border: 1px solid black;
}
</style>
