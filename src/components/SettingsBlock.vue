<template>
  <div class="settings">
    <button>Авторасчет СТАТов от урона</button>
    <button>Auto-armor</button>
  </div>
</template>

<script>
export default {
  methods: {
    openSettings() {
      if (!this.isOpenSettings) {
        this.isOpenSettings = true;
      } else {
        this.isOpenSettings = false;
      }
    },
  },
};
</script>

<style scoped>
.settings {
 /*  width: 100%;
  display: flex;
  align-items: center; */
}
.btn {
  height: 30px;
  width: 100%;
}
</style>
