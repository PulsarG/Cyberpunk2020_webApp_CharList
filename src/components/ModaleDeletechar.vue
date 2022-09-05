<template>
  <div class="modalreg" v-show="isShowDel" @click.stop="hideModal">
    <div @click.stop class="modalcontent">
      <h4>УДАЛИТЬ</h4>
      <h4 style="color: red">{{ nickCharForDelete }} ?</h4>
      <div>
        <button @click="deleteChar">Да</button>
        <button>Нет</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShowDel: Boolean,
    nickCharForDelete: String,
  },
  methods: {
    deleteChar() {
      this.$store.dispatch("api/deleteChar", this.nickCharForDelete);
      this.hideModal();
    },
    hideModal() {
      this.$emit("update:isShowDel", false);
    },
  },
};
</script>

<style scoped>
h4 {
  font-family: "Ktf";
}
.modalreg {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}
.modalcontent {
  margin: auto;
  background: white;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
