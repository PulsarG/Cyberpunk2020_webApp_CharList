<template>
  <div class="newsmain">
    <div class="newsborder">
      <div class="title">
        <h2 class="newstitle">НОВОСТИ</h2>
      </div>
      <button
        class="tohome"
        @click="
          $router.push('/');
          this.$store.commit('setShowMenu', true);
        "
      >
        <h2>На главную</h2>
      </button>
    </div>
    <news-block :date="date3" :title="title3"
      >- Теперь Вы можете играть с друзьями в режиме Сессии (на данный момент
      актуально только для Cyberpunk 2020)<br />
      - Вы можете открыть своего персонажа для Вашего Рефери (Гейм-Мастера) с
      помощью кнопки Сессии ( [S] ) возле ника персонажа в списке Ваших
      персонажей <br />
      - Рефери видит всех персонажей, которых для него открыли игроки во вкладке
      "Session" в окне Меню <br />- После добавления нового персонажа в Сессию
      Рефери необходимо Обновить список одноименной кнопкой <br />- Рефери
      способен изменять персонажа Игрока. После внесения изменений в лист
      персонажа Игрока необходимо нажать кнопку "Обновить персонажа Сессии"
      <br />- Игроку же, чтобы увидеть изменения в листе своего Персонажа,
      необходимо обновить список своих Персонажей и вновь открыть игрового
      Персонажа (вскоре все автоматизируем, не волнуйтесь) <br />- И, конечно
      же, Рефери может удалять Персонажей из Сессии прожав Крестик рядом с ником
      Персонажа в Списке Сессии <br />- Мелкие дизайнерские
      изменения</news-block
    >
    <news-block :date="date2" :title="title2"
      >- Добавлен тестовый лист персонажа для версии RED <br />- На данный
      момент в нем не реализованы функционал Предметов, Имплантов, Брони и
      Оружия <br />- В остальном лист полностью рабочий и поддерживает
      сохранение персонажей системы RED под отдельным ярлыком в списке ваших
      персонажей</news-block
    >
    <news-block :date="date" :title="title"
      >- Версия поддерживает Сохранение персонажей и Кастомных вещей на Аккаунт
      <br />
      - Лист персонажа полностью функционирует <br />
      - Дека ожидается в ближайшее время <br />
      - Лист персонажа для Cyberpunk RED будет реализован в последнюю очередь
      <br />
      - Раздел FAQ (Справка) ожидается после реализации Деки <br />
      - Вы можете оценить концепт Темы2077 запросив Промокод в сообществе (ВК,
      Дискорд) <br />
      - Промокод для снятия ограничения в 5 персонажей выдается по запросу в
      сообществе (ВК, Дискорд) <br />
      - Так же в сообществе Вы можете смело предлагать идеи, вносить критику и
      всячески способствовать развитию проекта идейно и морально <br />
      - Функции Авторасчета Брони и Статов находятся в очереди после реализации
      раздела Справки <br />
      - Спасибо, что нашли время ознакомится с данным приложением</news-block
    >
  </div>
</template>

<script>
import NewsBlock from "@/components/NewsBlock.vue";
export default {
  components: {
    NewsBlock,
  },
  data() {
    return {
      date: "08/09/2022 ver 0.9.020.4",
      title: "Релиз Бета-версии",

      date2: "18/09/2022 ver 0.9.025.1",
      title2: "Тестовый лист персонажа RED",

      date3: "21/09/2022 ver 0.9.026.4",
      title3: "Встречайте! Сессии!",
    };
  },
};
</script>

<style scoped>
.onenews {
  margin-top: 20px;
}

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
@media (max-width: 655px) {
  h2 {
    font-size: 15px;
  }
}

.newsmain {
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
  height: 100vh;
  padding: 0 15px;
}
@media (max-width: 1000px;) {
  .newsmain {
    max-width: 970px;
  }
}
@media (max-width: 992px;) {
  .newsmain {
    max-width: 750px;
  }
}
@media (max-width: 767px;) {
  .newsmain {
    max-width: none;
  }
}

.newstitle {
  margin-left: 15px;
}
</style>
