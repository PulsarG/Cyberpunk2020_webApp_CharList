<template>
  <base-buttonslice class="btnsubmenu" @click="showTable">
    <p>Custom Cybernetics</p>
  </base-buttonslice>
  <!-- <button class="btnsubmenu" @click="showTable">Custom Cybernetics</button> -->

  <table class="table" v-show="isShow">
    <thead>
      <tr class="item">
        <th class="nameitem" style="color: blue">NAME</th>
        <th class="code" style="color: blue">CODE</th>
        <th class="price" style="color: blue">PRICE</th>
        <th class="hum" style="color: blue">HUMANITY</th>
        <th class="btn" style="color: blue"></th>
        <th class="btn" style="color: blue"></th>
      </tr>
    </thead>
    <tbody style="display: flex; flex-direction: column">
      <tr
        class="item"
        v-for="i in $store.state.customs.Customcybernetics"
        :key="i.name"
      >
        <th class="nameitem">{{ i.name }}</th>
        <td class="code">{{ i.code }}</td>
        <td class="price">{{ i.price }}</td>
        <td class="hum">{{ i.humanity }}</td>
        <button class="btn" @click="deleteCustomCybernetics(i)">Delete</button>
        <button class="btn" @click="addCybernetics(i)">+ BUY</button>
      </tr>

      <h4 style="color: orange">Добавить свои импланты</h4>

      <tr class="item" style="margin-top: 1px">
        <th class="nameitem"><input type="text" id="name" /></th>
        <td class="code"><input type="text" id="code" /></td>
        <td class="price"><input type="number" name="" id="price" /></td>
        <td class="hum"><input type="text" id="humanity" /></td>
        <button class="btnaddimp" @click="addCustomCybernetics">
          Create implant
        </button>
      </tr>
    </tbody>
  </table>
</template>

<script>
import BaseButtonslice from "@/components/BaseButtonslice.vue";
export default {
  components: {
    BaseButtonslice,
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

    addCustomCybernetics() {
      let name = document.getElementById("name").value;
      let code = document.getElementById("code").value;
      let price = document.getElementById("price").value;
      let humanity = document.getElementById("humanity").value;

      let X = {
        name,
        code,
        price,
        humanity,
      };

      this.$store.commit("addCustomCybernetics", X);

      document.getElementById("name").value = "";
      document.getElementById("code").value = "";
      document.getElementById("price").value = "";
      document.getElementById("humanity").value = "";
    },

    addCybernetics(i) {
      this.$store.commit("addCybernetics", i);
    },

    deleteCustomCybernetics(i) {
      this.$store.commit("deleteCustomCybernetics", i);
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
  width: 20%;
  align-items: center;
  justify-content: center;
  height: 25px;
}

input {
  width: 100%;
}
</style>
