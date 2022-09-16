<template>
  <div class="mainredlist">
    <red-stats></red-stats>
  </div>
</template>

<script>
import RedStats from "@/redlist/RedStats.vue";
export default {
  components: {
    RedStats,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.mainredlist {
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  align-self: center;
  margin: auto;
  height: 100vh;
}
</style>
