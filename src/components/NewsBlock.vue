<template>
  <div class="onenews">
    <button class="btnnews" @click="openNews">
      <h2>Релиз Бета-версии</h2>
      <p class="date">08/09/2022 ver 0.9.020.4</p>
    </button>
    <div class="newsbody" id="IDD">
      <p class="textnews">
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.onenews {
  margin-top: 20px;
}

.btnnews {
  width: 100%;
  height: 50px;
  border: none;
  border-left: 1px solid black;
  background-color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
}
.date {
  margin-top: -15px;
}

.newsbody {
  max-height: 1000px;
  transition: 1s;
}
._close {
  max-height: 0px;
  overflow: hidden;
  transition: 1s;
  opacity: 0;
}

.textnews {
  font-size: 18px;
}
</style>
