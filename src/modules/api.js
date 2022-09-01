import { db } from "@/main";
import {
  collection,
  getDocs,
  setDoc,
  addDoc,
  doc,
  getDoc,
  deleteDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import store from "@/store/store";

export default {
  state() {
    return {
      isLoginIn: false,
      Chars: [],
    };
  },

  mutations: {
    setIsLoginIn(state, b) {
      state.isLoginIn = b;
    },
  },

  actions: {
    async LoginIn({ state }, l) {
      try {
        const q = query(
          collection(db, "User"),
          where("pass", "==", l.pass),
          where("login", "==", l.login)
        );

        const querySnapshot = await getDocs(q);
        let items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });

        if (items[0].isLogin) {
          state.isLoginIn = true;
        }
      } catch (e) {
        alert("Не верные данные");
        console.log(e);
      }
    },

    async getChars({ state, commit }) {
      try {
        state.Chars.length = 0;
        const querySnapshot = await getDocs(collection(db, store.state.login));
        querySnapshot.forEach((doc) => {
          if (doc.id == "CustomShop") {
            return;
          }
          state.Chars.push(doc.data());
        });
      } catch (e) {
        alert(e);
        console.log(e);
      }
    },

    async saveChar({ dispatch }) {
      if (store.state.Char.nick === "") {
        alert("Введине имя персонажа");
      } else {
        try {
          await setDoc(doc(db, store.state.login, store.state.Char.nick), {
            Char: store.state.Char,
            Role: store.state.role,

            Stats: store.state.Stats,
            Morestats: store.state.Morestats,
            Armor: store.state.Armor,

            savePoint: store.state.savePoint,
            DmgChecks: store.state.DmgChecks,

            Skills: store.state.skills,

            Cybernetics: store.state.Cybernetics,
            Weapons: store.state.Weapons,

            BioText: store.state.BioText,
            LookText: store.state.LookText,
          });

          alert("Сохранено");
          dispatch("getChars");
        } catch (e) {
          alert(e);
          console.log(e);
        }
      }
    },

    async saveCustomItems({ state }) {
      try {
        await setDoc(doc(db, store.state.login, "CustomShop"), {
          Customcybernetics: store.state.customs.Customcybernetics,
          Customweapons: store.state.customs.Customweapons,
        });
        alert("Сохранено");
      } catch (e) {
        alert(e);
      }
    },

    async getCustoms({ state }) {
      try {
        const docRef = doc(db, store.state.login, "CustomShop");
        const docSnap = await getDoc(docRef);

        let j = docSnap.data().Customcybernetics.length;
        for (let i = 0; i < j; i++) {
          let X = docSnap.data().Customcybernetics[i];
          store.commit("addCustomCybernetics", X);
        }

        let k = docSnap.data().Customweapons.length;
        for (let i = 0; i < k; i++) {
          let Y = docSnap.data().Customweapons[i];
          store.commit("addCustomWeapons", Y);
        }
      } catch (e) {
        alert(e);
      }
    },

    async deleteChar({ dispatch }, nick) {
      try {
        await deleteDoc(doc(db, store.state.login, nick));
        alert("Персонаж удален!");
      } catch (e) {
        console.log(e);
      }
      dispatch("getChars");
    },
  },

  namespaced: true,
};
