<template>
  <button class="neonbtn">
    <p class="neonp">
      
        <slot></slot>
      
    </p>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.neonbtn {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  background-color: white;
  transition: all 0.5s;
}
.neonbtn:hover {
  color: yellow;
}

</style>
