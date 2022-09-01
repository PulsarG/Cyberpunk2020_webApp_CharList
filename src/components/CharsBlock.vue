<template>
  <div>
    <button class="btn" @click="openSettings">Ваши персонажи:</button>
    <modale-deletechar v-model:isShowDel="isShowDel" :nickCharForDelete="nickCharForDelete">
    </modale-deletechar>
    <div class="settings" v-show="isOpenSettings">
      <div v-for="i in this.$store.state.api.Chars" :key="i.nick">
        <div class="charslist">
          <button class="btnchars" @click="setChar(i)">
            <p style="color: red">{{ i.Char.nick }} * {{ i.Role }}</p>
          </button>
          <button @click="deleteChar(i)">Delete char</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModaleDeletechar from "@/components/ModaleDeletechar";

export default {
  components: { ModaleDeletechar },
  data() {
    return {
      isOpenSettings: true,
      isShowDel: false,
      nickCharForDelete: "",
    };
  },

  methods: {
    openSettings() {
      if (!this.isOpenSettings) {
        this.isOpenSettings = true;
      } else {
        this.isOpenSettings = false;
      }
    },

    setChar(i) {
      this.$store.commit("setChar", i);
    },

    deleteChar(i) {
      this.nickCharForDelete = i.Char.nick;
      this.isShowDel = true;
    },

    /* reloadChars(b) {
      this.$store.commit("reloadChars", b);
    }, */
  },

  computed: {
    /* login() {
      return this.$store.state.login;
    }, */
  },
};
</script>

<style scoped>
.btn {
  height: 30px;
  width: 100%;
}

.btnchars {
  margin-top: 3px;
  /* border: none; */
}

.charslist {
  display: flex;
  justify-self: flex-end;
  align-self: flex-start;
}
</style>
