<template>
  <div class="codefield">
    <input
      class="inputcode"
      type="text"
      id="primcode"
      placeholder="Ввести код"
    />
    <button class="btncodesend" @click="sendCode">Отправить</button>
  </div>
</template>

<script>
export default {
  methods: {
    sendCode() {
      let code = document.getElementById("primcode").value;
      if (code == "theme77") {
        this.$store.commit("setUnlockTheme");
        return;
      } else {
        this.checkUnlockMoreCharsCode();
      }
      code = "";
    },
    unlockTheme() {
      if (document.getElementById("primcode").value == "theme77") {
        this.$store.commit("setUnlockTheme");
      }
    },
    checkUnlockMoreCharsCode() {
      this.$store.dispatch(
        "api/checkCode",
        document.getElementById("primcode").value
      );
    },
  },
};
</script>

<style scope>
.codefield {
  display: flex;
  align-items: center;
}
.inputcode {
  font-size: 15px;
  font-family: "Qore";
  text-align: center;
  border: none;
  background: none;
  border-left: 1px solid orange;
  border-bottom: 1px solid orange;
  color: orange;
}

.btncodesend {
  font-family: "Ktf";
  height: 25px;
  margin-left: 7px;
  border: none;
  background: none;
  border-right: 1px solid orange;
  border-bottom: 1px solid orange;
  color: orange;
  cursor: pointer;
}
</style>
