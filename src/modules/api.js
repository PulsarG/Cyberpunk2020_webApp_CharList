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
            Gear: store.state.Gear,

            BioText: store.state.BioText,
            LookText: store.state.LookText,
          });

          alert("Сохранено");
          dispatch("getChars");
        } catch (e) {
          alert("Ой, что-то поло не так");
          console.log(e);
        }
      }
    },

    async saveCustomItems({ state }) {
      try {
        await setDoc(doc(db, store.state.login, "CustomShop"), {
          Customcybernetics: store.state.customs.Customcybernetics,
          Customweapons: store.state.customs.Customweapons,
          Customarmor: store.state.customs.Customarmor,
          Customgear: store.state.customs.Customgear,
        });
        alert("Сохранено");
      } catch (e) {
        console.log(e);
      }
    },

    async getCustoms({ state }) {
      try {
        const docRef = doc(db, store.state.login, "CustomShop");
        const docSnap = await getDoc(docRef);

        let c = docSnap.data().Customcybernetics.length;
        for (let i = 0; i < c; i++) {
          let X = docSnap.data().Customcybernetics[i];
          store.commit("addCustomCybernetics", X);
        }

        let w = docSnap.data().Customweapons.length;
        for (let i = 0; i < w; i++) {
          let Y = docSnap.data().Customweapons[i];
          store.commit("addCustomWeapons", Y);
        }

        let a = docSnap.data().Customarmor.length;
        for (let i = 0; i < a; i++) {
          let Y = docSnap.data().Customarmor[i];
          store.commit("addCustomArmor", Y);
        }

        let g = docSnap.data().Customgear.length;
        for (let i = 0; i < g; i++) {
          let Y = docSnap.data().Customgear[i];
          store.commit("addCustomGear", Y);
        }
      } catch (e) {
        console.log(e);
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

    async checkUser({ dispatch }, user) {
      try {
        const q = query(
          collection(db, "User"),
          where("login", "==", user.login)
        );

        const querySnapshot = await getDocs(q);
        let items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });

        if (items[0].isLogin) alert("Такой пользователь существует");
      } catch (e) {
        console.log(e);
        dispatch("regUser", user);
      }
    },

    async regUser({ state }, user) {
      try {
        addDoc(collection(db, "User"), {
          login: user.login,
          pass: user.pass,
          email: user.email,
          isLogin: true,
        });
        alert("Регистрация прошла успешно");
      } catch (e) {
        console.log(e);
      }
    },
  },

  namespaced: true,
};
