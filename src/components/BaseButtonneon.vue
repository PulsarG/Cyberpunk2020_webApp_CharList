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
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  background-color: white;
  transition: all 0.5s;
}
.neonbtn:hover {
  border-color: blue;
  box-shadow: 0px 0px 15px blue;
  color: blue;
}

</style>
