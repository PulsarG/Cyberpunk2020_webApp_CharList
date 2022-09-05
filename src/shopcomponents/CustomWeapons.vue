<template>
  <!-- <button class="btnsubmenu" @click="showTable">Custom Weapons</button> -->
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
        <button class="btn" @click="deleteCustomWeapons(i)">Delete</button>
        <button class="btn" @click="addWeapons(i)">+ BUY</button>
      </tr>

      <h4>Добавить своё оружие</h4>

      <tr class="item" style="margin-top: 1px">
        <td class="type"><input type="text" id="type" /></td>
        <td class="nameitem"><input type="text" id="nameitem" /></td>
        <td class="wa"><input type="text" name="" id="wa" /></td>
        <td class="con"><input type="text" id="con" /></td>
        <td class="avail"><input type="text" id="avail" /></td>
        <td class="damage"><input type="text" id="damage" /></td>
        <td class="shots"><input type="text" name="" id="shots" /></td>
        <td class="rof"><input type="text" id="rof" /></td>
        <td class="rel"><input type="text" id="rel" /></td>
        <td class="range"><input type="text" id="range" /></td>
        <td class="price"><input type="text" name="" id="priceitem" /></td>
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
      let type = document.getElementById("type").value;
      let name = document.getElementById("nameitem").value;
      let wa = document.getElementById("wa").value;
      let con = document.getElementById("con").value;
      let avail = document.getElementById("avail").value;
      let damage = document.getElementById("damage").value;
      let shots = document.getElementById("shots").value;
      let rof = document.getElementById("rof").value;
      let rel = document.getElementById("rel").value;
      let range = document.getElementById("range").value;
      let price = document.getElementById("priceitem").value;

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

      document.getElementById("type").value = "";
      document.getElementById("nameitem").value = "";
      document.getElementById("wa").value = "";
      document.getElementById("con").value = "";
      document.getElementById("avail").value = "";
      document.getElementById("damage").value = "";
      document.getElementById("shots").value = "";
      document.getElementById("rof").value = "";
      document.getElementById("rel").value = "";
      document.getElementById("range").value = "";
      document.getElementById("priceitem").value = "";
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
  width: 30%;
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
  width: 10%;
  border: 1px solid black;
}
</style>
