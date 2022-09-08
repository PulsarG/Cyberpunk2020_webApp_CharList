<template>
  <div class="skill" v-show="isUse">
    <div
      v-bind:class="{ skillname: !this.isTheme77, secondcolor: this.isTheme77 }"
    >
      <p>{{ i.name }}</p>
    </div>
    <div class="skillus">
      <div class="skillpoints">
        <input
          v-model="i.count"
          type="number"
          name=""
          id=""
          v-bind:class="{
            skillpointsinp: !this.isTheme77,
            skillpointsinpsecond: this.isTheme77,
          }"
        />
      </div>
      <div class="skillchip">
        <input type="checkbox" v-model="i.chekbox" name="" id="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    i: Object,
  },

  data() {
    return {
      counte: this.i.count,

      isNotEmpty: false,

      isUse: true,

      chekbox: this.i.chekbox,
    };
  },

  computed: {
    hiddenAll() {
      return this.$store.state.hiddenEmptySkills;
    },
    isTheme77() {
      return this.$store.state.isTheme77;
    },
  },

  watch: {
    i: {
      handler(v) {
        this.counte = v.count;
      },
      deep: true,
    },

    hiddenAll(v) {
      if (this.counte > 0) {
        this.isNotEmpty = true;
      } else {
        this.isNotEmpty = false;
      }

      if (v) {
        this.isUse = this.isNotEmpty;
      } else {
        this.isUse = true;
      }
    },
  },
};
</script>

<style scoped>
.skill {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2px;
  width: 100%;
}

.skillus {
  display: flex;
  flex-direction: row;
  width: 25%;
}

.skillpointsinp {
  width: 70%;
  background-color: #e4dbbf;
  border: 1px solid #383127;
  color: #383127;
}
.skillpointsinpsecond {
  width: 70%;
  background-color: inherit;
  border: 1px solid #383127;
  color: #00ccff;
}

.skillname {
  width: 75%;
  height: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /*   border: 2px solid red; */
  font-family: "Qore";
  font-size: 12px;
  color: #383127;
  /* color:#00ccff; */
}
.secondcolor {
  width: 75%;
  height: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /*   border: 2px solid red; */
  font-family: "Qore";
  font-size: 12px;
  color: #00ccff;
}
</style>
