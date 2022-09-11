<template>
  <div class="modalreg" v-show="isShowDel" @click.stop="hideModal">
    <div @click.stop class="modalcontent">
      <div>
        <h4>УДАЛИТЬ</h4>
      </div>
      <div class="nick">
        <h4 style="color: red">{{ nickCharForDelete }}</h4>
      </div>
      <div class="btns">
        <div>
          <base-buttonneonred
            class="btn"
            style="color: orange"
            @click="deleteChar"
            >ДА</base-buttonneonred
          >
        </div>
        <div>
          <base-buttonneonred
            class="btn"
            style="color: orange"
            @click.stop="hideModal"
            >НЕТ</base-buttonneonred
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButtonneonred from "@/components/BaseButtonneonred.vue";
export default {
  components: { BaseButtonneonred },
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
.nick {
  margin-top: -30px;
}
h4 {
  font-family: "Ktf";
  font-size: 30px;
  color: orange;
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
  background: black;
  height: 300px;
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 10px solid red;
  box-shadow: 0 0 50px red;
}

.btns {
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.btn {
  font-family: "Ktf";
  width: 50px;
  height: 50px;
  font-size: 20px;
}
</style>
