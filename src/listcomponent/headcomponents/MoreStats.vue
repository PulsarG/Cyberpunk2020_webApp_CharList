<template>
  <div class="morestats">
    <div class="rep">
      <h4>REP</h4>
      <input type="text" v-model="Morestats.rep" class="morestatsinp" />
    </div>

    <div class="rep">
      <h4>CURRENT IP</h4>
      <input type="text" v-model="Morestats.ip" class="morestatsinp" />
    </div>

    <div class="rep">
      <h4>HUMANITY</h4>
      <input type="text" v-model="Morestats.humanity" class="morestatsinp" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Morestats: {
        rep: "",
        ip: "",
        humanity: "",
      },
    };
  },

  methods: {
    setMorestatsFromStore() {
      this.Morestats = this.$store.state.Morestats;
    },
  },

  computed: {
    isLoadChar() {
      return this.$store.state.isLoadChar;
    },
  },

  watch: {
    Morestats: {
      handler(i) {
        this.$store.commit("setMorestats", i);
      },
      deep: true,
    },

    isLoadChar(v) {
      if (v) this.setMorestatsFromStore();
    },
  },
};
</script>

<style scoped>
.morestats {
  display: flex;
  flex-direction: row;
  height: 10%;
}

.rep {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "Qore";
  font-size: 12px;
  color: #383127;
}

.morestatsinp {
  display: flex;
  width: 25%;
  height: 60%;
  margin-left: 3px;
  text-align: center;
  background-color: #e4dbbf;
  border: 1px solid #383127;
  color: #383127;
}
</style>
