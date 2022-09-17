<template>
  <div class="mainredlist">
    <div class="save">
      <h3 v-show="!this.$store.state.api.isLoginIn">
        Зарегистрируйтесь, чтобы сохранить персонажей и кастомные вещи
      </h3>
      <base-buttonborder
        class="bbsave"
        id="savebtn"
        v-show="this.$store.state.api.isLoginIn"
        @click="saveRedChar"
      ></base-buttonborder>
    </div>
    <div class="ruls">
      <h4>Cyberpunk RED Easy Mode</h4>
      <a href="https://vk.com/@cyberpunk2020-cyberpunk-red-easy-mode"
        >Руководство на русском</a
      >
    </div>

    <redname-role></redname-role>
    <red-stats></red-stats>
    <red-morestats></red-morestats>
    <red-bio></red-bio>
    <red-style></red-style>
  </div>
</template>

<script>
import BaseButtonborder from "@/components/BaseButtonborder.vue";
import RedStats from "@/redlist/RedStats.vue";
import RedMorestats from "@/redlist/RedMorestats.vue";
import RedBio from "@/redlist/RedBio.vue";
import RedStyle from "@/redlist/RedStyle.vue";
import RednameRole from "@/redlist/RednameRole.vue";
export default {
  components: {
    RedStats,
    BaseButtonborder,
    RednameRole,
    RedMorestats,
    RedBio,
    RedStyle,
  },
  data() {
    return {};
  },
  computed: {
    AmountChars() {
      return this.$store.state.api.Chars.length;
    },
  },
  methods: {
    saveRedChar() {
      if (
        this.$store.state.api.isPondsmith ||
        this.AmountChars < 5 ||
        this.checkCanSave()
      ) {
        this.$store.dispatch("api/saveRedChar");
      } else if (this.AmountChars >= 5 && !this.$store.state.api.isPondsmith) {
        alert("Нет свободных ячеек для персонажей");
        this.$store.dispatch("api/getChars");
      }
      this.disableButtonSave();
    },
    checkCanSave() {
      for (let i = 0; i < this.$store.state.api.Chars.length; i++) {
        if (
          this.$store.state.api.CONTROL_Chars[i] == this.$store.state.Char.nick
        )
          return true;
      }
      return false;
    },
    disableButtonSave() {
      let btn = document.getElementById("savebtn");
      btn.setAttribute("disabled", true);

      setTimeout(() => {
        btn.removeAttribute("disabled");
      }, 5000);
    },
  },
};
</script>

<style scoped>
.mainredlist {
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  align-self: center;
  margin: auto;
  align-items: center;
  /*  height: 100vh; */
}
.bbsave {
  background: none;
}
.save {
  margin: auto;
  margin-bottom: 3px;
  margin-top: 15px;
}
.ruls {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
