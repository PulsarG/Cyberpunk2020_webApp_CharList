<template>
  <div>
    <input type="text" id="primcode" placeholder="Ввести код" />
    <button @click="sendCode">Отправить</button>
  </div>
</template>

<script>
export default {
  methods: {
    sendCode() {
      this.$store.dispatch(
        "api/checkCode",
        document.getElementById("primcode").value
      );
    },
  },
};
</script>

<style scope>
input {
  font-size: 15px;
  text-align: center;
}
</style>
