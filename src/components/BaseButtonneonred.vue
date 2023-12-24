<template>

<button class="neonbtn">

  <p class="neonp">
      <div>
        <slot></slot>
      </div>
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
  color: red;
  background: none;
  transition: all 0.5s;
}
.neonbtn:hover {
  border-color: red;
  box-shadow: 0px 0px 30px red;
  color: red;
}
</style>
