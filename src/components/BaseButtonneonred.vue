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
  /* height: 25px; */
  color: red;
  background: none;
  /* background-color: aliceblue; */
  transition: all 0.5s;
  /* transform: skewX(-50deg); */
  border-radius: 50%;
  /* width: 25px; */
}
.neonbtn:hover {
  border-color: red;
  box-shadow: 0px 0px 30px red;
  color: red;
}
p {
  /* transform: skewX(50deg); */
}
</style>
