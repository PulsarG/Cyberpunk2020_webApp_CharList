<template>
    <div class="cnblock">
      <button class="title" @click="openBlock">
        <h3>
          <strong style="color: white">Описание и Внешность</strong>
        </h3>
      </button>
      <slot></slot>
      <textarea
        v-show="isOpen"
        class="textarea"
        maxlength="2000"
        placeholder="Описание вашего персонажа (макс. 2000 символов)"
        v-model="LookText"
      ></textarea>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: true,
  
        LookText: "",
      };
    },
    computed: {
      isLoadChar() {
        return this.$store.state.isLoadChar;
      },
    },
    watch: {
      LookText(v) {
        this.$store.commit("setLookText", v);
      },
      isLoadChar(v) {
        if (v) this.setLookText();
      },
    },
    methods: {
      openBlock() {
        if (!this.isOpen) {
          this.isOpen = true;
        } else {
          this.isOpen = false;
        }
      },
  
      setLookText() {
        this.LookText = this.$store.state.LookText;
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
  