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
  updateDoc,
} from "firebase/firestore";
import store from "@/store/store";

export default {
  state() {
    return {
      isLoginIn: false,
      Chars: [],
      CONTROL_Chars: [],
      isPondsmith: false,
      userId: "",
      redForNick: "(RED)",
    };
  },

  mutations: {
    setIsLoginIn(state, b) {
      state.isLoginIn = b;
    },
    setUserId(state, id) {
      state.userId = id;
    },
    setPondsmith(state) {
      state.isPondsmith = true;
    },
  },

  actions: {
    async updateCode({ state }) {
      try {
        const codeRef = doc(db, "User", state.userId);

        await updateDoc(codeRef, {
          isPondsmith: true,
        });
      } catch (e) {
        console.log(e);
        alert("Упс, неполадки");
      }
    },

    async checkCode({ state, dispatch, commit }, c) {
      try {
        const q = query(collection(db, "Code"), where("Code", "==", c));

        const querySnapshot = await getDocs(q);
        let items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });

        if (items[0].isCode) {
          commit("setPondsmith");
          dispatch("updateCode");
        }
      } catch (e) {
        alert("Не верные данные");
        console.log(e);
      }
    },

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
          state.userId = doc.id;
          items.push(doc.data());
        });

        if (items[0].isLogin) {
          state.isLoginIn = true;
          if (items[0].isPondsmith) state.isPondsmith = true;
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
          if (doc.id == "CustomShop" || doc.id == "Code") {
            return;
          }
          state.Chars.push(doc.data());
          state.CONTROL_Chars.push(doc.data().Char.nick);
        });
      } catch (e) {
        alert("ЧТо-то пошло не так с загрузкой персонажей");
        console.log(e);
      }
    },

    async saveChar({ dispatch }) {
      if (store.state.Char.nick === "") {
        alert("Введине имя персонажа");
      } else {
        try {
          await setDoc(doc(db, store.state.login, store.state.Char.nick), {
            isRed: false,
            Char: store.state.Char,

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

    async saveRedChar({ dispatch }) {
      if (store.state.red.Char.nick === "") {
        alert("Введите имя персонажа");
      } else {
        try {
          await setDoc(doc(db, store.state.login, store.state.red.Char.nick), {
            isRed: true,
            Char: store.state.red.Char,
            Stats: store.state.red.Stats,
            Savestats: store.state.red.Savestats,
            Bio: store.state.red.Bio,
          });

          alert("Сохранено");
          dispatch("getChars");
        } catch (e) {
          alert("Ой, что-то пошло не так");
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
          Customcheap: store.state.customs.Customcheap,
          Customspec: store.state.customs.Customspec,
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

        let cp = docSnap.data().Customcheap.length;
        for (let i = 0; i < cp; i++) {
          let Y = docSnap.data().Customcheap[i];
          store.commit("addCustomCheap", Y);
        }

        let sp = docSnap.data().Customspec.length;
        for (let i = 0; i < sp; i++) {
          let Y = docSnap.data().Customspec[i];
          store.commit("addCustomSpec", Y);
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
          isPondsmith: false,
        });
        alert("Регистрация прошла успешно");
      } catch (e) {
        console.log(e);
      }
    },
  },

  namespaced: true,
};
