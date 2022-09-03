<template>
  <div class="skill" v-show="isUse">
    <div class="skillname">
      <div>
        <input
          v-model="i.name"
          
          type=""
          name=""
          id=""
          class="skillnameinp"
          style="border: none; border-bottom: 1px dotted black"
        />
      </div>
      <!--  <p>{{ i.name }}</p> -->
    </div>
    <div class="skillus">
      <div class="skillpoints">
        <input
          v-model="i.count"
          type="number"
          name=""
          id=""
          class="skillpointsinp"
        />
      </div>
      <div class="skillchip">
        <input type="checkbox" name="" id="" />
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
      skillName: "",
      counte: this.i.count,
      isNotEmpty: false,

      isUse: true,
    };
  },

  computed: {
    hiddenAll() {
      return this.$store.state.hiddenEmptySkills;
    },
  },

  watch: {
    /* focused(v) {
      if (!v) {
        this.i.name = this.skillName;
      }
    }, */
    /* i: {
      handler(v) {
        this.counte = v.count;
      },
      deep: true,
    }, */

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

.skillname {
  width: 75%;
  height: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /*   border: 2px solid red; */
}
.skillnameinp {
  background-color: #e4dbbf;
  border: 1px solid #383127;
  color: #383127;
}
</style>
