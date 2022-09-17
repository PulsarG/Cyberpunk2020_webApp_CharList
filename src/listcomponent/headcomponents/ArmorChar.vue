<template>
  <div class="armorblock">
    <div class="armortitle">
      <div v-bind:class="{ armortitleone: !this.isTheme77, armortitleonesecond: this.isTheme77 }">
        <strong>Location</strong>
      </div>
      <div v-bind:class="{ armortitleone: !this.isTheme77, armortitleonesecond: this.isTheme77 }">
        <strong>Armor SP</strong>
      </div>
    </div>

    <div class="armorstat">
      <div class="armorlocation">
        <div v-bind:class="{ armor: !this.isTheme77, armorsecond: this.isTheme77 }">
          <strong
            >Head <br />
            1</strong
          >
        </div>
        <div v-bind:class="{ armor: !this.isTheme77, armorsecond: this.isTheme77 }">
          <strong
            >Torso <br />
            2-4</strong
          >
        </div>
        <div v-bind:class="{ armor: !this.isTheme77, armorsecond: this.isTheme77 }">
          <strong
            >R. Arm <br />
            5</strong
          >
        </div>
        <div v-bind:class="{ armor: !this.isTheme77, armorsecond: this.isTheme77 }">
          <strong
            >L. Arm <br />
            6</strong
          >
        </div>
        <div v-bind:class="{ armor: !this.isTheme77, armorsecond: this.isTheme77 }">
          <strong
            >R. Leg <br />
            7-8</strong
          >
        </div>
        <div v-bind:class="{ armor: !this.isTheme77, armorsecond: this.isTheme77 }">
          <strong
            >L. Leg <br />
            9-0</strong
          >
        </div>
      </div>
      <div class="armorlocation">
        <div class="armor">
          <input
            type="number"
            name=""
            id=""
            v-bind:class="{ armorinp: !this.isTheme77, armorinpsecond: this.isTheme77 }"
            v-model="Armor.headArmor"
          />
        </div>
        <div class="armor">
          <input
            type="number"
            name=""
            id=""
            v-bind:class="{ armorinp: !this.isTheme77, armorinpsecond: this.isTheme77 }"
            v-model="Armor.torsoArmor"
          />
        </div>
        <div class="armor">
          <input
            type="number"
            name=""
            id=""
            v-bind:class="{ armorinp: !this.isTheme77, armorinpsecond: this.isTheme77 }"
            v-model="Armor.RArmArmor"
          />
        </div>
        <div class="armor">
          <input
            type="number"
            name=""
            id=""
            v-bind:class="{ armorinp: !this.isTheme77, armorinpsecond: this.isTheme77 }"
            v-model="Armor.LArmArmor"
          />
        </div>
        <div class="armor">
          <input
            type="number"
            name=""
            id=""
            v-bind:class="{ armorinp: !this.isTheme77, armorinpsecond: this.isTheme77 }"
            v-model="Armor.RLegArmor"
          />
        </div>
        <div class="armor">
          <input
            type="number"
            name=""
            id=""
            v-bind:class="{ armorinp: !this.isTheme77, armorinpsecond: this.isTheme77 }"
            v-model="Armor.LLegArmor"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Armor: {
        headArmor: "",
        torsoArmor: "",
        RArmArmor: "",
        LArmArmor: "",
        RLegArmor: "",
        LLegArmor: "",
      },
    };
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
    Armor: {
      handler(i) {
        this.$store.commit("setArmor", i);
      },
      deep: true,
    },
    isLoadChar(v) {
      if (v) this.setArmor();
    },
  },
  methods: {
    setArmor() {
      this.Armor = this.$store.state.Armor;
    },
  },
};
</script>

<style scoped>
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.armorblock {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}

.armortitle {
  display: flex;
  flex-direction: column;
  width: 20%;
}

.armortitleone {
  height: 40px;
  margin: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
}
.armortitleonesecond {
  height: 40px;
  margin: 1px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: none;
  color: red;
  font-family: "Qore";
  font-size: 15px;
}

.armorstat {
  display: flex;
  flex-direction: column;
  width: 80%;
}

.armorlocation {
  display: flex;
  flex-direction: row;
}

.armor {
  border: 1px solid black;
  width: 20%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.armorsecond {
  border: 1px solid #383127;
  width: 20%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
}

.armorinp {
  display: flex;
  width: 90%;
  height: 90%;
  text-align: center;
  font-size: 20px;
  background-color: #e4dbbf;
  border: 1px solid #383127;
  color: #383127;
}.armorinpsecond {
  display: flex;
  width: 90%;
  height: 90%;
  text-align: center;
  font-size: 20px;
  background-color: inherit;
  border: 1px solid #383127;
  color: #00ccff;
}

</style>
