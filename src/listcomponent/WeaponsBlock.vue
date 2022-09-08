<template>
  <div class="cnblock">
    <button class="title" @click="openImplants">
      <h3>
        <strong style="color: white">WEAPONS</strong>
      </h3>
    </button>

    <table class="table" v-show="isOpenImplants">
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
          <th class="btn" style="color: blue"></th>
        </tr>
      </thead>
      <tbody>
        <tr class="item" v-for="i in $store.state.Weapons" :key="i.name">
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
          <button class="btn" @click="deleteWeapons(i)">-delete</button>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpenImplants: true,
    };
  },
  methods: {
    openImplants() {
      if (!this.isOpenImplants) {
        this.isOpenImplants = true;
      } else {
        this.isOpenImplants = false;
      }
    },

    deleteWeapons(i) {
      this.$store.commit("deleteWeapons", i);
    },
  },
};
</script>

<style scoped>
.cnblock {
  margin-top: 5px;
}

.title {
  background-color: black;
  width: 100%;
  margin: auto;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  cursor: pointer;
}

.table {
  width: 100%;
}

.item {
  width: 100%;
  display: flex;
  margin-top: 2px;
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
</style>
