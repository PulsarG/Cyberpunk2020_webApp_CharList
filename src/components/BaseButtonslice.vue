<template>
  <button class="btnslice">
    <p>
      <slot></slot>
    </p>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.btnslice {
  border: 1px solid black;
  position: relative;
  transition: 0.5s;
  overflow: hidden;
  color: red;
  background-color: aliceblue;
  z-index: 1;
  transform: skewX(-50deg);
}
.btnslice::before,
.btnslice::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: orange;
  top: 0;
  left: -100%;
  opacity: 0.5;
  z-index: -1;
  transition: 0.3s;
}
.btnslice::after {
  opacity: 1;
  transition-delay: 0.2s;
}

.btnslice:hover {
  color: blue;
}

.btnslice:hover::before,
.btnslice:hover::after {
  left: 0;
}

p {
  transform: skewX(50deg);
  font-size: 15px;
}
</style>
