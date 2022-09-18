export default {
  state() {
    return {
      Cool: [
        {
          name: "Актёрское мастерство (COOL)",
          count: 0,
        },
        {
          name: "Гардероб и стиль (COOL)",
          count: 0,
        },
        {
          name: "Убеждение (COOL)",
          count: 0,
        },
        {
          name: "Подкуп (COOL)",
          count: 0,
        },
        {
          name: "Допрос (COOL)",
          count: 0,
        },
        {
          name: "Уличное чутьё (COOL)",
          count: 0,
        },
      ],
      Emp: [
        {
          name: "Переговоры (EMP)",
          count: 0,
        },
        {
          name: "Проницательность (EMP)",
          count: 0,
        },
      ],
      Int: [
        {
          name: "Бюрократия (INT)",
          count: 0,
        },
        {
          name: "Дедукция (INT)",
          count: 0,
        },
        {
          name: "Сочинение (INT)",
          count: 0,
        },
        {
          name: "Криминология (INT)",
          count: 0,
        },
        {
          name: "Криптография (INT)",
          count: 0,
        },
        {
          name: "Бухгалтерский учёт (INT)",
          count: 0,
        },
        {
          name: "Внимательность (INT)",
          count: 0,
        },
        {
          name: "Поиск информации (INT)",
          count: 0,
        },
        {
          name: "Бизнес (INT)",
          count: 0,
        },
        {
          name: "Тактика (INT)",
          count: 0,
        },
        {
          name: "Выслеживание (INT)",
          count: 0,
        },
        {
          name: "Знание местности (INT)",
          count: 0,
        },
        {
          name: "Эрудиция (INT)",
          count: 0,
        },
      ],
      Ref: [
        {
          name: "Длинноствольное оружие (REF)",
          count: 0,
        },
        {
          name: "Короткоствольное оружие (REF)",
          count: 0,
        },
        {
          name: "Вождение (REF)",
          count: 0,
        },
      ],
      Will: [
        {
          name: "Концентрация (WILL)",
          count: 0,
        },
        {
          name: "Сопротивление пыткам/наркотикам (WILL)",
          count: 0,
        },
      ],
      Tech: [
        {
          name: "Электроника/взлом (x2) (TECH)",
          count: 0,
        },
        {
          name: "Фальсификация (TECH)",
          count: 0,
        },
        {
          name: "Фотограф/режиссёр (TECH)",
          count: 0,
        },
        {
          name: "Игра на муз. инструментах (TECH)",
          count: 0,
        },
        {
          name: "Карманная кража (TECH)",
          count: 0,
        },
        {
          name: "Взлом замков (TECH)",
          count: 0,
        },
        {
          name: "Первая помощь (TECH)",
          count: 0,
        },
        {
          name: "Парамедик (x2) (TECH)",
          count: 0,
        },
        {
          name: "Сопротивление пыткам/наркотикам (WILL)",
          count: 0,
        },
      ],
      Dex: [
        {
          name: "Атлетика (DEX)",
          count: 0,
        },
        {
          name: "Драка (DEX)",
          count: 0,
        },
        {
          name: "Оружие ближнего боя (DEX)",
          count: 0,
        },
        {
          name: "Скрытность (DEX)",
          count: 0,
        },
        {
          name: "Танец (DEX)",
          count: 0,
        },
        {
          name: "Уклонение (DEX)",
          count: 0,
        },
      ],
      Skillsother: [
        {
          name: "",
          count: "",
        },
      ],
    };
  },

  mutations: {
    addOtherSkill(state) {
      state.Skillsother.push({ name: "", count: "", chekbox: false });
    },
  },
};
