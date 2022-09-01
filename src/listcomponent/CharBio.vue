<template>
  <div class="cnblock">
    <button class="title" @click="openBio">
      <h3>
        <strong style="color: white">BIOGRAPHY</strong>
      </h3>
    </button>
    <slot></slot>
    <textarea
      v-show="isOpenBio"
      class="textarea"
      maxlength="5000"
      placeholder="Биография вашего персонажа (макс. 5000 символов)"
      v-model="BioText"
    ></textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpenBio: true,

      BioText: "",
    };
  },
  computed: {
    isLoadChar() {
      return this.$store.state.isLoadChar;
    },
  },
  watch: {
    BioText(v) {
      this.$store.commit("setBioText", v);
    },
    isLoadChar(v) {
      if (v) this.setBioText();
    },
  },
  methods: {
    openBio() {
      if (!this.isOpenBio) {
        this.isOpenBio = true;
      } else {
        this.isOpenBio = false;
      }
    },

    setBioText() {
      this.BioText = this.$store.state.BioText;
    },
  },
};
</script>

<style scoped>
.textarea {
  min-width: 990px;
  max-width: 990px;
  max-height: 200px;
  min-height: 200px;
}

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
}
</style>
