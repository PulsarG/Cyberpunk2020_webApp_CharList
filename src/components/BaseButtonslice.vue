<template>
  <button class="btnslice">
    <p>
      <slot></slot>
    </p>
  </button>
</template>

<script>
</script>

<style scoped>
.btnslice {
  border: none;
  position: relative;
  transition: 0.5s;
  overflow: hidden;
  color: orange;
  background: none;
  z-index: 1;
  transform: skewX(-50deg);
}
.btnslice {
  border: none;
  position: relative;
  transition: 0.5s;
  overflow: hidden;
  color: orange;
  background: none;
  z-index: 1;
  transform: skewX(-50deg);
}
.btnslice {
  border: none;
  position: relative;
  transition: 0.5s;
  overflow: hidden;
  color: orange;
  background: none;
  z-index: 1;
  transform: skewX(-50deg);
}
.btnslice {
  border: none;
  position: relative;
  transition: 0.5s;
  overflow: hidden;
  color: orange;
  background: none;
  z-index: 1;
  transform: skewX(-50deg);
}
.btnslice {
  border: none;
  position: relative;
  transition: 0.5s;
  overflow: hidden;
  color: orange;
  background: none;
  z-index: 1;
  transform: skewX(-50deg);
}
.btnslice {
  border: none;
  position: relative;
  transition: 0.5s;
  overflow: hidden;
  color: orange;
  background: none;
  z-index: 1;
  transform: skewX(-50deg);
}
.btnslice {
  border: none;
  position: relative;
  transition: 0.5s;
  overflow: hidden;
  color: orange;
  background: none;
  z-index: 1;
  transform: skewX(-50deg);
}
.btnslice {
  border: none;
  position: relative;
  transition: 0.5s;
  overflow: hidden;
  color: orange;
  background: none;
  z-index: 1;
  transform: skewX(-50deg);
}
.btnslice {
  border: none;
  position: relative;
  transition: 0.5s;
  overflow: hidden;
  color: orange;
  background: none;
  z-index: 1;
  transform: skewX(-50deg);
}
.btnslice::before,
.btnslice::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: red;
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
  color: yellow;
}

.btnslice:hover::before,
.btnslice:hover::after {
  left: 0;
}

p {
  transform: skewX(50deg);
  font-size: 18px;
}
</style>
