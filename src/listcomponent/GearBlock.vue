<template>
  <div class="cnblock">
    <button class="title" @click="openImplants">
      <h3>
        <strong style="color: white">GEAR</strong>
      </h3>
    </button>

    <table class="table" v-show="isOpenImplants">
      <thead>
        <tr class="item">
          <th class="nameitem" style="color: #383127">Type</th>
          <th class="price" style="color: #383127">COST</th>
          <th class="hum" style="color: #383127">WT</th>
          <th class="btn" style="color: #383127"></th>
        </tr>
      </thead>
      <tbody>
        <tr class="item" v-for="i in $store.state.Gear" :key="i.name">
          <th class="nameitem">{{ i.type }}</th>
          <td class="hum">{{ i.price }}</td>
          <td class="price">{{ i.obr }}</td>
          <button class="btn" @click="deleteCybernetics(i)">- delete</button>
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

    deleteCybernetics(i) {
      this.$store.commit("deleteGear", i);
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

.hum {
  width: 20%;
  border: 1px solid black;
  text-align: center;
}

.price {
  width: 20%;
  border: 1px solid black;
  text-align: center;
}

.nameitem {
  width: 50%;
  border: 1px solid black;
  text-align: center;
}
</style>
