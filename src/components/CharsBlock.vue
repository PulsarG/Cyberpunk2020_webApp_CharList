<template>
  <div class="mainmenu">
    <!-- <button class="btn" @click="openSettings">Ваши персонажи:</button> -->
    <modale-deletechar
      class="moddel"
      v-model:isShowDel="isShowDel"
      :nickCharForDelete="nickCharForDelete"
    >
    </modale-deletechar>
    <div class="charslist" v-show="isOpenSettings">
      <div class="urchars" v-show="isEmptyList">
        <h2 style="color: orange">Список ваших Персонажей</h2>
      </div>
      <div
        v-for="i in this.$store.state.api.Chars"
        :key="i.nick"
      >
        <div class="onechar">
          <base-buttonslice class="btnchars" @click="setChar(i)"
            >{{ i.Char.nick }} ( {{ i.Role }} )</base-buttonslice
          >

          <!-- <button class="btnchars" @click="setChar(i)">
            <p style="color: red; font-size: 15px">{{ i.Char.nick }}.....{{ i.Role }}</p>
          </button> -->

          <base-buttonneonred class="deletebtn" @click="deleteChar(i)"
            >X</base-buttonneonred
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
      isEmptyList: true,
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
    Chars() {
      return this.$store.state.api.Chars;
    },
    CharsLength() {
      return this.$store.state.api.Chars.length;
    },
  },
  watch: {
    CharsLength(v) {
      if (v != 0) {
        this.isEmptyList = false;
      } else {
        this.isEmptyList = true;
      }
    },
  },
};
</script>

<style scoped>
.mainmenu {
  display: flex;
  flex-direction: column;
}

.btn {
  height: 30px;
}

.btnchars {
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 550px;
  /* border: none; */
  font-family: "Qore";
  text-transform: uppercase;
  z-index: initial;
}

.deletebtn {
  margin-left: 30px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  border: none;
  /* border-radius: 50%; */
}
.moddel {
  z-index: 1;
}
.settings {
}

.charslist {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: auto;
  height: 50vh;
 /*  z-index: 2; */
}
.charslist::-webkit-scrollbar {
  width: 0;
}

.onechar {
  display: flex;
  flex-direction: row;
}

.urchars {
  text-align: center;
}
.charslist::-webkit-scrollbar {
  width: 10px;
}

.charslist::-webkit-scrollbar-track {
  -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
  background-color: rgb(255, 0, 0);
  border-radius: 10px;
}

.charslist::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: orange;
}
</style>
