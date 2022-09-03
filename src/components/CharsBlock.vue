<template>
  <div class="mainmenu">
    <!-- <button class="btn" @click="openSettings">Ваши персонажи:</button> -->
    <modale-deletechar
      v-model:isShowDel="isShowDel"
      :nickCharForDelete="nickCharForDelete"
    >
    </modale-deletechar>
    <div class="settings" v-show="isOpenSettings">
      <div>
        <h2 style="color: orange">Ваши Персонажи:</h2>
      </div>
      <div v-for="i in this.$store.state.api.Chars" :key="i.nick">
        <div class="charslist" >
          <base-buttonslice class="btnchars" @click="setChar(i)"
            >{{ i.Char.nick }} ( {{ i.Role }} )</base-buttonslice
          >

          <!-- <button class="btnchars" @click="setChar(i)">
            <p style="color: red; font-size: 15px">{{ i.Char.nick }}.....{{ i.Role }}</p>
          </button> -->

          <base-buttonneonred class="deletebtn" @click="deleteChar(i)"
            >Удалить</base-buttonneonred
          >

          <!-- <button class="deletebtn" @click="deleteChar(i)">Delete char</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButtonslice from "@/components/BaseButtonslice.vue";
import ModaleDeletechar from "@/components/ModaleDeletechar";
import BaseButtonneonred from "@/components/BaseButtonneonred.vue";
export default {
  components: { ModaleDeletechar, BaseButtonneonred, BaseButtonslice },
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
}

.btnchars {
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* border: none; */
  font-family: "Qore";
  text-transform: uppercase;
}

.deletebtn {
  margin-left: 5px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
}

.settings {
  width: 70%;
}

.charslist {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>
