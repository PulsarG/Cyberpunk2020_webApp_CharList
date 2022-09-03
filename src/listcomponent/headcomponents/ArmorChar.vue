<template>
  <div class="armorblock">
    <div class="armortitle">
      <div class="armortitleone">
        <strong style="color: white">Location</strong>
      </div>
      <div class="armortitleone">
        <strong style="color: white">Armor SP</strong>
      </div>
    </div>

    <div class="armorstat">
      <div class="armorlocation">
        <div class="armor">
          <strong
            >Head <br />
            1</strong
          >
        </div>
        <div class="armor">
          <strong
            >Torso <br />
            2-4</strong
          >
        </div>
        <div class="armor">
          <strong
            >R. Arm <br />
            5</strong
          >
        </div>
        <div class="armor">
          <strong
            >L. Arm <br />
            6</strong
          >
        </div>
        <div class="armor">
          <strong
            >R. Leg <br />
            7-8</strong
          >
        </div>
        <div class="armor">
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
            class="armorinp"
            v-model="Armor.headArmor"
          />
        </div>
        <div class="armor">
          <input
            type="number"
            name=""
            id=""
            class="armorinp"
            v-model="Armor.torsoArmor"
          />
        </div>
        <div class="armor">
          <input
            type="number"
            name=""
            id=""
            class="armorinp"
            v-model="Armor.RArmArmor"
          />
        </div>
        <div class="armor">
          <input
            type="number"
            name=""
            id=""
            class="armorinp"
            v-model="Armor.LArmArmor"
          />
        </div>
        <div class="armor">
          <input
            type="number"
            name=""
            id=""
            class="armorinp"
            v-model="Armor.RLegArmor"
          />
        </div>
        <div class="armor">
          <input
            type="number"
            name=""
            id=""
            class="armorinp"
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
.armorblock {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}

.armortitle {
  display: flex;
  flex-direction: column;
  width: 20%;
  /*  border: 2px solid blue; */
}

.armortitleone {
  height: 40px;
  margin: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
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

.armorinp {
  display: flex;
  width: 90%;
  height: 90%;
  text-align: center;
  font-size: 20px;
  background-color: #E4DBBF;
  border: 1px solid #383127;
  color: #383127;
}
</style>
