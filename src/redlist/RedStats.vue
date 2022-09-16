<template>
  <div class="block">
    <button class="btnblock" @click="showList"><h2>STATS</h2></button>
    <div class="blockbody" id="1id">
      <div class="stat">
        <button class="btnstat">+</button>
        <button class="btnstat btncountstat">{{ this.int }}</button>
        <button class="btnstat">-</button>
      </div>
      <div class="stat">
        <button class="btnstat">+</button>
        <button class="btnstat btncountstat">{{ this.int }}</button>
        <button class="btnstat">-</button>
      </div>
      <div class="stat">
        <button class="btnstat">+</button>
        <button class="btnstat btncountstat">{{ this.int }}</button>
        <button class="btnstat">-</button>
      </div>
      <div class="stat">
        <button class="btnstat">+</button>
        <button class="btnstat btncountstat">{{ this.int }}</button>
        <button class="btnstat">-</button>
      </div>
      <div class="stat">
        <button class="btnstat">+</button>
        <button class="btnstat btncountstat">{{ this.int }}</button>
        <button class="btnstat">-</button>
      </div>
      <div class="stat">
        <button class="btnstat">+</button>
        <button class="btnstat btncountstat">{{ this.int }}</button>
        <button class="btnstat">-</button>
      </div>
      <div class="stat">
        <button class="btnstat">+</button>
        <button class="btnstat btncountstat">{{ this.int }}</button>
        <button class="btnstat">-</button>
      </div>
      <div class="stat">
        <button class="btnstat">+</button>
        <button class="btnstat btncountstat">{{ this.int }}</button>
        <button class="btnstat">-</button>
      </div>
      <div class="stat">
        <button class="btnstat">+</button>
        <button class="btnstat btncountstat">{{ this.int }}</button>
        <button class="btnstat">-</button>
      </div>
      <div class="stat">
        <button class="btnstat">+</button>
        <button class="btnstat btncountstat">{{ this.int }}</button>
        <button class="btnstat">-</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      int: 5,
    };
  },
  methods: {
    showList() {
      document.getElementById("1id").classList.toggle("show");
    },
  },
};
</script>

<style scoped>
.stat {
  display: flex;
  flex-direction: column;
}
.btnstat {
  width: 90px;
  height: 50px;
  background-color: inherit;
  border: none;
  cursor: pointer;
}
.btnstat:hover {
  box-shadow: 0 0 10px red;
  font-size: 30px;
}
.btncountstat {
  border-top: 1px solid brown;
  border-bottom: 1px solid brown;
  font-size: 20px;
  font-family: "Ktf";
}

.block {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  width: 1000px;
  border: 3px solid red;
}
.btnblock {
  border: none;
  width: 100%;
  background: red;
  cursor: pointer;
  color: white;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 3px;
}
h2 {
  font-family: "Qore";
}
.blockbody {
  max-height: 500px;
  transition: 1s;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.show {
  max-height: 0px;
  overflow: hidden;
}
</style>
