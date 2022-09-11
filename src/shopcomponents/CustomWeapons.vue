<template>
  <base-buttonslice class="btnsubmenu" @click="showTable">
    <p>Custom Weapons</p>
  </base-buttonslice>
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
        <th class="btn" style="color: blue"></th>
      </tr>
    </thead>
    <tbody style="display: flex; flex-direction: column">
      <tr
        class="item"
        v-for="i in $store.state.customs.Customweapons"
        :key="i.name"
      >
        <td class="type">{{ i.type }}</td>
        <td class="nameitem">{{ i.name }}</td>
        <td class="wa">{{ i.wa }}</td>
        <td class="con">{{ i.con }}</td>
        <td class="avail">{{ i.avail }}</td>
        <td class="damage">{{ i.damage }}</td>
        <td class="shots">{{ i.shots }}</td>
        <td class="rof">{{ i.rof }}</td>
        <td class="rel">{{ i.rel }}</td>
        <td class="range">{{ i.range }}</td>
        <td class="price">{{ i.price }}</td>
        <button class="btn" @click="deleteCustomWeapons(i)">Del</button>
        <button class="btn" @click="addWeapons(i)">BUY</button>
      </tr>

      <h4>Добавить своё оружие</h4>

      <tr class="item" style="margin-top: 1px">
        <td class="type"><input type="text" id="typew" /></td>
        <td class="nameitem"><input type="text" id="nameitemw" /></td>
        <td class="wa"><input type="text" name="" id="waw" /></td>
        <td class="con"><input type="text" id="conw" /></td>
        <td class="avail"><input type="text" id="availw" /></td>
        <td class="damage"><input type="text" id="damagew" /></td>
        <td class="shots"><input type="text" name="" id="shotsw" /></td>
        <td class="rof"><input type="text" id="rofw" /></td>
        <td class="rel"><input type="text" id="relw" /></td>
        <td class="range"><input type="text" id="rangew" /></td>
        <td class="price"><input type="text" name="" id="priceitemw" /></td>
        <button class="btnaddimp" @click="addCustomWeapons">
          Create Weapon
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

    addCustomWeapons() {
      let type = document.getElementById("typew").value;
      let name = document.getElementById("nameitemw").value;
      let wa = document.getElementById("waw").value;
      let con = document.getElementById("conw").value;
      let avail = document.getElementById("availw").value;
      let damage = document.getElementById("damagew").value;
      let shots = document.getElementById("shotsw").value;
      let rof = document.getElementById("rofw").value;
      let rel = document.getElementById("relw").value;
      let range = document.getElementById("rangew").value;
      let price = document.getElementById("priceitemw").value;

      let X = {
        type,
        name,
        wa,
        con,
        avail,
        damage,
        shots,
        rof,
        rel,
        range,
        price,
      };
      this.$store.commit("addCustomWeapons", X);

      document.getElementById("typew").value = "";
      document.getElementById("nameitemw").value = "";
      document.getElementById("waw").value = "";
      document.getElementById("conw").value = "";
      document.getElementById("availw").value = "";
      document.getElementById("damagew").value = "";
      document.getElementById("shotsw").value = "";
      document.getElementById("rofw").value = "";
      document.getElementById("relw").value = "";
      document.getElementById("rangew").value = "";
      document.getElementById("priceitemw").value = "";
    },

    addWeapons(i) {
      this.$store.commit("addWeapons", i);
    },

    deleteCustomWeapons(i) {
      this.$store.commit("deleteCustomWeapons", i);
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
  margin-left: -105px;
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
  width: 5%;
}

.btnaddimp {
  width: 10%;
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
  border: none;
}

.nameitem {
  width: 25%;
  border: 1px solid black;
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
}

.type {
  width: 5%;
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

.con {
  width: 5%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
}

.rof {
  width: 5%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
}

.rel {
  width: 5%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
}

.avail {
  width: 5%;
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
