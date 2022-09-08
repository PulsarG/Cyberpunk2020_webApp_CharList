<template>
  <div class="menu">
    <div class="title">
      <h2>
        M <br />
        E <br />
        N <br />
        U
      </h2>
    </div>

    <div class="mainmenu">
      <div class="hero-container">
        <h1 class="hero glitch layers">
          <span>CYBERPUNK</span>
        </h1>
      </div>
      <div class="btnsmenu">
        <div>
          <base-buttonglitch class="btn" @click="this.showChars = true"
            >2020</base-buttonglitch
          >
        </div>
        <!-- <h1>CYBERPUNK</h1> -->
        <!--  <base-buttonneon class="btn" @click="this.showChars = true"
          >2020</base-buttonneon
        > -->
        <div>
          <base-buttonglitch class="btn bred">.RED</base-buttonglitch>
        </div>
        <!-- <button class="btn" disabled>RED (soon)</button>
        <base-buttonneon class="btn" @click="this.showChars = false"
          >SHOP</base-buttonneon -->
        <div>
          <base-buttonglitch class="btn bshop" @click="this.showChars = false"
            >SHOP</base-buttonglitch
          >
        </div>
        <div>
          <base-buttonglitch class="btn bred">F.A.Q.</base-buttonglitch>
        </div>
        <!-- <button class="btn" @click="this.showChars = true">2020</button> -->
        <!-- <button class="btn" disabled>RED (soon)</button> -->
        <!-- <button class="btn" @click="this.showChars = false">SHOP</button> -->
      </div>
    </div>

    <!-- <div v-show="this.showChars"> -->
    <chars-block class="cb" v-show="this.showChars"></chars-block>

    <div style="margin-top: 15px" v-show="!this.showChars">
      <shop-menu class="shopmenu"></shop-menu>
    </div>

    <!-- </div> -->
  </div>
  <settings-block class="sett" v-show="this.showChars"></settings-block>
  <!-- <div class="foott">
    <div class="footer">
      <a href="" style="color: white">by Github.com/PulsarG / 2022</a>
    </div>
  </div> -->
</template>

<script>
import BaseButtonglitch from "@/components/BaseButtonglitch.vue";
import BaseButtonneon from "@/components/BaseButtonneon.vue";
import SettingsBlock from "@/components/SettingsBlock.vue";
import ShopMenu from "@/components/ShopMenu.vue";
import CharsBlock from "@/components/CharsBlock.vue";

export default {
  components: {
    SettingsBlock,
    CharsBlock,
    ShopMenu,
    BaseButtonneon,
    BaseButtonglitch,
  },
  data() {
    return {
      showChars: true,
      showShop: false,
      showFaq: false,
    };
  },
};
</script>

<style scoped>
.shopmenu {
  height: 90%;
}
h1 {
  font-family: "Cyberpunk";
  animation: color 10s infinite;
  font-size: 50px;
}

@keyframes color {
  0% {
    color: red;
  }
  25% {
    color: gold;
  }
  /* 50% {
    color: blue;
  } */
  75% {
    color: blueviolet;
  }
  100% {
    color: red;
  }
}
.title {
  position: absolute;
  right: -50px;
  top: 40%;
  width: auto;
  font-family: "Qore";
}

.menu {
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  height: 100vh;
}

.btn {
  width: 100px;
  height: 5vh;
  font-size: 30px;
  color: yellow;
  text-shadow: 0 0 20px yellow;
  /*  color: blue;
  text-shadow: 0 0 20px blue; */
  font-family: "Qore";
  margin-top: 15px;
  cursor: pointer;
}
.bred {
  color: red;
  text-shadow: 0 0 20px red;
}
.bshop {
  color: yellow;
  text-shadow: 0 0 20px yellow;
}
.mainmenu {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: -80px;
}
.btnsmenu {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 90%;
}

.footer {
  /* position: absolute;
    bottom: 5%; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.foott {
  display: flex;
  justify-self: flex-end;
  align-items: flex-end;
  /* position: absolute; */
  width: 100%;
}

.cb {
  margin-top: 90px;
  display: flex;
  align-self: center;
}

.sett {
  position: absolute;
  width: 100%;
  bottom: 3%;
}

.layers {
  position: relative;
}

.layers::before,
.layers::after {
  content: attr(data-text);
  position: absolute;
  width: 110%;
  z-index: -1;
}

.layers::before {
  top: 10px;
  left: 15px;
  color: #e0287d;
}

.layers::after {
  top: 5px;
  left: -10px;
  color: #1bc7fb;
}

.single-path {
  clip-path: polygon(
    0% 12%,
    53% 12%,
    53% 26%,
    25% 26%,
    25% 86%,
    31% 86%,
    31% 0%,
    53% 0%,
    53% 84%,
    92% 84%,
    92% 82%,
    70% 82%,
    70% 29%,
    78% 29%,
    78% 65%,
    69% 65%,
    69% 66%,
    77% 66%,
    77% 45%,
    85% 45%,
    85% 26%,
    97% 26%,
    97% 28%,
    84% 28%,
    84% 34%,
    54% 34%,
    54% 89%,
    30% 89%,
    30% 58%,
    83% 58%,
    83% 5%,
    68% 5%,
    68% 36%,
    62% 36%,
    62% 1%,
    12% 1%,
    12% 34%,
    60% 34%,
    60% 57%,
    98% 57%,
    98% 83%,
    1% 83%,
    1% 53%,
    91% 53%,
    91% 84%,
    8% 84%,
    8% 83%,
    4% 83%
  );
}

.paths {
  animation: paths 10s step-end infinite;
}

@keyframes paths {
  0% {
    clip-path: polygon(
      0% 43%,
      83% 43%,
      83% 22%,
      23% 22%,
      23% 24%,
      91% 24%,
      91% 26%,
      18% 26%,
      18% 83%,
      29% 83%,
      29% 17%,
      41% 17%,
      41% 39%,
      18% 39%,
      18% 82%,
      54% 82%,
      54% 88%,
      19% 88%,
      19% 4%,
      39% 4%,
      39% 14%,
      76% 14%,
      76% 52%,
      23% 52%,
      23% 35%,
      19% 35%,
      19% 8%,
      36% 8%,
      36% 31%,
      73% 31%,
      73% 16%,
      1% 16%,
      1% 56%,
      50% 56%,
      50% 8%
    );
  }

  5% {
    clip-path: polygon(
      0% 29%,
      44% 29%,
      44% 83%,
      94% 83%,
      94% 56%,
      11% 56%,
      11% 64%,
      94% 64%,
      94% 70%,
      88% 70%,
      88% 32%,
      18% 32%,
      18% 96%,
      10% 96%,
      10% 62%,
      9% 62%,
      9% 84%,
      68% 84%,
      68% 50%,
      52% 50%,
      52% 55%,
      35% 55%,
      35% 87%,
      25% 87%,
      25% 39%,
      15% 39%,
      15% 88%,
      52% 88%
    );
  }

  30% {
    clip-path: polygon(
      0% 53%,
      93% 53%,
      93% 62%,
      68% 62%,
      68% 37%,
      97% 37%,
      97% 89%,
      13% 89%,
      13% 45%,
      51% 45%,
      51% 88%,
      17% 88%,
      17% 54%,
      81% 54%,
      81% 75%,
      79% 75%,
      79% 76%,
      38% 76%,
      38% 28%,
      61% 28%,
      61% 12%,
      55% 12%,
      55% 62%,
      68% 62%,
      68% 51%,
      0% 51%,
      0% 92%,
      63% 92%,
      63% 4%,
      65% 4%
    );
  }

  45% {
    clip-path: polygon(
      0% 33%,
      2% 33%,
      2% 69%,
      58% 69%,
      58% 94%,
      55% 94%,
      55% 25%,
      33% 25%,
      33% 85%,
      16% 85%,
      16% 19%,
      5% 19%,
      5% 20%,
      79% 20%,
      79% 96%,
      93% 96%,
      93% 50%,
      5% 50%,
      5% 74%,
      55% 74%,
      55% 57%,
      96% 57%,
      96% 59%,
      87% 59%,
      87% 65%,
      82% 65%,
      82% 39%,
      63% 39%,
      63% 92%,
      4% 92%,
      4% 36%,
      24% 36%,
      24% 70%,
      1% 70%,
      1% 43%,
      15% 43%,
      15% 28%,
      23% 28%,
      23% 71%,
      90% 71%,
      90% 86%,
      97% 86%,
      97% 1%,
      60% 1%,
      60% 67%,
      71% 67%,
      71% 91%,
      17% 91%,
      17% 14%,
      39% 14%,
      39% 30%,
      58% 30%,
      58% 11%,
      52% 11%,
      52% 83%,
      68% 83%
    );
  }

  76% {
    clip-path: polygon(
      0% 26%,
      15% 26%,
      15% 73%,
      72% 73%,
      72% 70%,
      77% 70%,
      77% 75%,
      8% 75%,
      8% 42%,
      4% 42%,
      4% 61%,
      17% 61%,
      17% 12%,
      26% 12%,
      26% 63%,
      73% 63%,
      73% 43%,
      90% 43%,
      90% 67%,
      50% 67%,
      50% 41%,
      42% 41%,
      42% 46%,
      50% 46%,
      50% 84%,
      96% 84%,
      96% 78%,
      49% 78%,
      49% 25%,
      63% 25%,
      63% 14%
    );
  }

  90% {
    clip-path: polygon(
      0% 41%,
      13% 41%,
      13% 6%,
      87% 6%,
      87% 93%,
      10% 93%,
      10% 13%,
      89% 13%,
      89% 6%,
      3% 6%,
      3% 8%,
      16% 8%,
      16% 79%,
      0% 79%,
      0% 99%,
      92% 99%,
      92% 90%,
      5% 90%,
      5% 60%,
      0% 60%,
      0% 48%,
      89% 48%,
      89% 13%,
      80% 13%,
      80% 43%,
      95% 43%,
      95% 19%,
      80% 19%,
      80% 85%,
      38% 85%,
      38% 62%
    );
  }

  1%,
  7%,
  33%,
  47%,
  78%,
  93% {
    clip-path: none;
  }
}

.movement {
  position: relative;
  animation: movement 8s step-end infinite;
}

@keyframes movement {
  0% {
    top: 0px;
    left: -20px;
  }

  15% {
    top: 10px;
    left: 10px;
  }

  60% {
    top: 5px;
    left: -10px;
  }

  75% {
    top: -5px;
    left: 20px;
  }

  100% {
    top: 10px;
    left: 5px;
  }
}

.opacity {
  animation: opacity 10s step-end infinite;
}

@keyframes opacity {
  0% {
    opacity: 0.1;
  }

  5% {
    opacity: 0.7;
  }

  30% {
    opacity: 0.4;
  }

  45% {
    opacity: 0.6;
  }

  76% {
    opacity: 0.4;
  }

  90% {
    opacity: 0.8;
  }

  1%,
  7%,
  33%,
  47%,
  78%,
  93% {
    opacity: 0;
  }
}

.glitch span {
  animation: paths 10s step-end infinite;
}

.glitch::before {
  animation: paths 10s step-end infinite, opacity 5s step-end infinite,
    font 8s step-end infinite, movement 10s step-end infinite;
}

.glitch::after {
  animation: paths 5s step-end infinite, opacity 5s step-end infinite,
    font 7s step-end infinite, movement 8s step-end infinite;
}
</style>
