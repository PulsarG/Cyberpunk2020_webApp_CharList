<template>
  <div class="roleblock">
    <label
      v-bind:class="{
        nicklabel: !this.isTheme77,
        nicklabelsecond: this.isTheme77,
      }"
      for="role"
      ><strong>ROLE</strong></label
    >
    <select
      v-model="this.role"
      name="role"
      id="role"
      v-bind:class="{
        select: !this.isTheme77,
        selectsecond: this.isTheme77,
      }"
    >
      <option
        v-for="(role, index) in roles"
        :key="index"
        v-bind:class="{
          option: !this.isTheme77,
          optionsecond: this.isTheme77,
        }"
      >
        <strong>{{ role }}</strong>
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      role: "",

      roles: [
        "Solo",
        "Rocker",
        "Netrunner",
        "Media",
        "Nomad",
        "Fixer",
        "Cop",
        "Corpo",
        "Techie",
        "Medtechie",
      ],
    };
  },

  methods: {
    setRoleFromStore() {
      this.role = this.$store.state.Char.role;
    },
  },

  computed: {
    isLoadChar() {
      return this.$store.state.isLoadChar;
    },
    isTheme77() {
      return this.$store.state.isTheme77;
    },
  },
  watch: {
    isLoadChar(v) {
      if (v) this.setRoleFromStore();
    },

    role(v) {
      this.$store.commit("setRole", v);
    },
  },
};
</script>

<style scoped>
.nicklabel {
  background-color: black;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.nicklabelsecond {
  background-color: none;
  width: 20%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: red;
  font-family: "Qore";
  font-size: 25px;
}

.roleblock {
  margin-top: 3px;
  width: 100%;
  display: flex;
}

.select,
.option {
  background-color: #e4dbbf;
  border: 1px solid #383127;
  color: #383127;
}

.selectsecond,
.optionsecond {
  background-color: inherit;
  border: 1px solid #383127;
  color: #00ccff;
}
</style>
