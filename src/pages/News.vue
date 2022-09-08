<template>
  <div class="newsmain">
    <div class="newsborder">
      <div class="title">
        <h2 class="newstitle">НОВОСТИ</h2>
      </div>
      <button class="tohome" @click="$router.push('/')">
        <h2>На главную</h2>
      </button>
    </div>
    <div class="onenews">
      <h2>Релиз Бета-версии</h2>
      <p class="date">08/09/2022 ver 0.9.021.4</p>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          corporis, necessitatibus quo commodi asperiores similique nostrum
          exercitationem ullam excepturi eius reiciendis culpa eligendi sunt
          iste, consequuntur minima! Quae, consectetur rerum!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.newsborder {
  margin-top: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title {
  height: 100%;
  display: flex;
  justify-self: flex-start;
  align-items: center;
  justify-content: flex-start;
  font-family: "Ktf";
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  width: 70%;
}
.tohome {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-family: "Ktf";
  width: 20%;
  background: none;
  border: none;
  cursor: pointer;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
}
.newsmain {
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  align-self: center;
  margin: auto;
  height: 100vh;
}
.newstitle {
  margin-left: 15px;
}
.date {
  margin-top: -15px;
}
.onenews {
}
</style>
