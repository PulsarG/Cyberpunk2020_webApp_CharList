<template>
  <button>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 280px;
  font-size: 15px;
  padding: 5% 5%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  font-family: "Ktf";
}
button:before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  bottom: 3px;
  width: 5%;
  background-color: rgba(255, 255, 255, 0.05);
}

button span:nth-child(1),
button span:nth-child(2),
button span:nth-child(3),
button span:nth-child(4) {
  position: absolute;
}

button span:nth-child(1) {
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, #2f0000, black, #2f0000);
  animation: animateTop 1s linear infinite paused;
}

button span:nth-child(2) {
  top: 0;
  right: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(0, #2f0000, black, #2f0000);
  animation: animateRight 1s linear infinite paused;
}

button span:nth-child(3) {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, #2f0000, black, #2f0000);
  animation: animateBottom 1s linear infinite paused;
}

button span:nth-child(4) {
  top: 0;
  left: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(0, #2f0000, black, #2f0000);
  animation: animateLeft 1s linear infinite paused;
}

button:hover span {
  animation-play-state: running;
}

@keyframes animateTop {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes animateRight {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}

@keyframes animateBottom {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes animateLeft {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
}
</style>
