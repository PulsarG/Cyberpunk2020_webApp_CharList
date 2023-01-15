export default {
    state: () => ({
        Neuro: [
            {
                name: "Базовый процессор",
                code: "M",
                price: 1000,
                humanity: "1d6"
            },
            {
                name: "Биомонитор",
                code: "N",
                price: 100,
                humanity: "1"
            },
            {
                name: "Карезников",
                code: "N",
                price: 500,
                humanity: "1d6 / 2d6"
            },
            {
                name: "Сэндвистэн",
                code: "N",
                price: 1600,
                humanity: "1d6 / 2"
            },
            {
                name: "Тактильное усиление",
                code: "N",
                price: 100,
                humanity: "2"
            },
            {
                name: "Обонятельное усиление",
                code: "N",
                price: 100,
                humanity: "2"
            },
            {
                name: "Редактор боли",
                code: "N",
                price: 200,
                humanity: "2d6"
            },
            {
                name: "Коннектор для кибермодема",
                code: "N",
                price: 100,
                humanity: "1"
            },
            {
                name: "Коннектор для транспорта",
                code: "N",
                price: 100,
                humanity: "3"
            },
            {
                name: "Коннектор для умного оружия",
                code: "N",
                price: 100,
                humanity: "2"
            },
            {
                name: "Коннектор для механизмов/техники",
                code: "N",
                price: 100,
                humanity: "2"
            },
            {
                name: "Коннектор для терминала данных",
                code: "N",
                price: 100,
                humanity: "2"
            },
            {
                name: "Интерфейсные разъемы",
                code: "M",
                price: 200,
                humanity: "1d6/пара"
            },
            {
                name: "Комплект разъемов для чипсета",
                code: "N",
                price: 200,
                humanity: "1d6/2"
            },
        ],

        Body: [
            {
                name: "Назальные фильтры",
                code: "M",
                price: 60,
                humanity: "2"
            },
            {
                name: "Жабры",
                code: "MA",
                price: 400,
                humanity: "3d6"
            },
            {
                name: "Независимая подача кислорода",
                code: "MA",
                price: 300,
                humanity: "2d6"
            },
            {
                name: "Подкожный карман",
                code: "M",
                price: 200,
                humanity: "2d6"
            },
            {
                name: "Усиление надпочечников",
                code: "M",
                price: 400,
                humanity: "2d6"
            },
            {
                name: "Подкожная броня",
                code: "CR",
                price: 1200,
                humanity: "2d6"
            },
            {
                name: "Детектор движения",
                code: "M",
                price: 200,
                humanity: "2d6"
            },
            {
                name: "Цифровой рекордер",
                code: "M",
                price: 200,
                humanity: "2"
            },
            {
                name: "Аудио/Видео магнитофон",
                code: "M",
                price: 300,
                humanity: "2"
            },
            {
                name: "Радарный датчик",
                code: "M",
                price: 200,
                humanity: "2"
            },
            {
                name: "Сонар",
                code: "M",
                price: 300,
                humanity: "2"
            },
            {
                name: "Детектор радиации",
                code: "M",
                price: 200,
                humanity: "2"
            },
            {
                name: "Химический анализатор",
                code: "M",
                price: 200,
                humanity: "2"
            },
            {
                name: "Синтезатор голоса",
                code: "M",
                price: 600,
                humanity: "1d6"
            },
            {
                name: "АудиоВокс",
                code: "M",
                price: 700,
                humanity: "2d6"
            },
        ],

        Bioupgrade: [
            {
                name: "Наращенные мышцы",
                code: "MA",
                price: 1000,
                humanity: "2d6"
            },
            {
                name: "Оплетка мускул и костей",
                code: "N",
                price: 1500,
                humanity: "1d6/2"
            },
            {
                name: "Прошивка кожи",
                code: "N",
                price: 2000,
                humanity: "2d6"
            },
            {
                name: "Усиленные антитела",
                code: "N",
                price: 3000,
                humanity: "1d6 / 2"
            },
            {
                name: "Блокировщики токсинов",
                code: "N",
                price: 3000,
                humanity: "1d6/2"
            },
            {
                name: "Нанохирурги",
                code: "N",
                price: 6000,
                humanity: "1d6/2"
            },
        ],

        Meleeweapons: [
            {
                name: "Коготки",
                code: "N",
                price: 100,
                humanity: "2d6"
            },
            {
                name: "Клыки вампира",
                code: "N",
                price: 200,
                humanity: "3d6"
            },
            {
                name: "Потрошители",
                code: "M",
                price: 400,
                humanity: "3d6"
            },
            {
                name: "Волки",
                code: "M",
                price: 600,
                humanity: "3d6+1"
            },
            {
                name: "Большие костяшки",
                code: "M",
                price: 500,
                humanity: "3d6"
            },
            {
                name: "Моноструна",
                code: "M",
                price: 700,
                humanity: "3d6"
            },
            {
                name: "Кибер-змея",
                code: "MA",
                price: 1200,
                humanity: "4d6"
            },
        ],

        Optica: [
            {
                name: "Базовый глазной модуль",
                code: "MA",
                price: 500,
                humanity: "2d6"
            },
            {
                name: "Улучшитель изображения",
                code: "N",
                price: 300,
                humanity: "1"
            },
            {
                name: "Прицельный видоискатель",
                code: "N",
                price: 400,
                humanity: "2"
            },
            {
                name: "Всплывающее окно",
                code: "N",
                price: 300,
                humanity: "1"
            },
            {
                name: "Телескопическая оптика",
                code: "N",
                price: 150,
                humanity: "0.5"
            },
            {
                name: "Микро-оптика",
                code: "N",
                price: 150,
                humanity: "0.5"
            },
            {
                name: "Защита от ослепления",
                code: "N",
                price: 200,
                humanity: "0.5"
            },
            {
                name: "LL - ночное зрение",
                code: "N",
                price: 200,
                humanity: "0.5"
            },
            {
                name: "Тепловизор",
                code: "N",
                price: 200,
                humanity: "1"
            },
            {
                name: "Инфракрасная оптика",
                code: "N",
                price: 200,
                humanity: "1"
            },
            {
                name: "Ультрафиолетовая оптика",
                code: "N",
                price: 200,
                humanity: "1"
            },
            {
                name: "Микро-видео камера",
                code: "N",
                price: 300,
                humanity: "0.5"
            },
            {
                name: "Цифровая фотокамера",
                code: "N",
                price: 300,
                humanity: "0.5"
            },
            {
                name: "Дротикомет",
                code: "N",
                price: 200,
                humanity: "2"
            },
        ],

        Audio: [
            {
                name: "Базовый слуховой модуль",
                code: "M",
                price: 500,
                humanity: "2d6"
            },
            {
                name: "Усиленный слух",
                code: "N",
                price: 200,
                humanity: "1"
            },
            {
                name: "Радио-коннектор",
                code: "N",
                price: 100,
                humanity: "1"
            },
            {
                name: "Телефонное соединение",
                code: "N",
                price: 150,
                humanity: "1"
            },
            {
                name: "Скремблер",
                code: "N",
                price: 100,
                humanity: "0.5"
            },
            {
                name: "Детектор жучков",
                code: "N",
                price: 200,
                humanity: "0.5"
            },
            {
                name: "Анализатор голосовых паттернов",
                code: "N",
                price: 200,
                humanity: "1"
            },
            {
                name: "Редактор звука",
                code: "N",
                price: 150,
                humanity: "0.5"
            },
            {
                name: "Расширенный слуховой диапозон",
                code: "N",
                price: 150,
                humanity: "2"
            },
            {
                name: "Детектор радара",
                code: "N",
                price: 150,
                humanity: "0.5"
            },
            {
                name: "Трассер обратного пути",
                code: "N",
                price: 200,
                humanity: "0.5"
            },
            {
                name: "Линия радиосвязи по прямому лучу",
                code: "N",
                price: 200,
                humanity: "1"
            },
            {
                name: "Широкополосный радио сканер",
                code: "N",
                price: 100,
                humanity: "2"
            },
            {
                name: "Коннектор микро-рекордера",
                code: "N",
                price: 100,
                humanity: "0.5"
            },
            {
                name: "Коннектор цифрового рекордера",
                code: "N",
                price: 100,
                humanity: "0.5"
            },
            {
                name: "Демпфер уровня",
                code: "N",
                price: 300,
                humanity: "0.5"
            },
        ],

        Handleg: [
            {
                name: "Кибер-рука",
                code: "CR",
                price: 3000,
                humanity: "2d6"
            },
            {
                name: "Кибер-нога",
                code: "CR",
                price: 2000,
                humanity: "2d6"
            },
            {
                name: "Быстросменное крепление",
                code: "N",
                price: 200,
                humanity: "2"
            },
            {
                name: "Гидравлические цилиндры",
                code: "N",
                price: 200,
                humanity: "3"
            },
            {
                name: "Уплотненные миомарные волокна",
                code: "N",
                price: 250,
                humanity: "2"
            },
            {
                name: "Усиленные суставы",
                code: "N",
                price: 200,
                humanity: "1"
            },
            {
                name: "Искусственные плечи",
                code: "CR",
                price: 1500,
                humanity: "2d6"
            },
            {
                name: "Микроволновое и ЭМИ экранирование",
                code: "N",
                price: 300,
                humanity: "1"
            },
            {
                name: "RealSkinn™",
                code: "N",
                price: 200,
                humanity: "-"
            },
            {
                name: "Броня",
                code: "N",
                price: 200,
                humanity: "1d6"
            },
        ],

        Armfoot: [
            {
                name: "Кисть-потрошитель",
                code: "N",
                price: 600,
                humanity: "2d6"
            },
            {
                name: "Кисть-молот",
                code: "N",
                price: 600,
                humanity: "2d6"
            },
            {
                name: "Кисть-триммер",
                code: "N",
                price: 600,
                humanity: "2d6"
            },
            {
                name: "Кисть-инструментарий",
                code: "N",
                price: 200,
                humanity: "2"
            },
            {
                name: "Кисть-грейфер",
                code: "N",
                price: 350,
                humanity: "3"
            },
            {
                name: "Удлиняющаяся кисть",
                code: "N",
                price: 350,
                humanity: "2"
            },
            {
                name: "Кисть с шипом",
                code: "N",
                price: 500,
                humanity: "2d6"
            },
            {
                name: "Модульная кисть",
                code: "N",
                price: 600,
                humanity: "2"
            },
            {
                name: "Когтистая ступня",
                code: "N",
                price: 600,
                humanity: "2d6"
            },
            {
                name: "Ступня-инструментарий",
                code: "N",
                price: 300,
                humanity: "2"
            },
            {
                name: "Перепончатая ступня",
                code: "N",
                price: 500,
                humanity: "2"
            },
            {
                name: "Обхватывающая ступня",
                code: "N",
                price: 500,
                humanity: "2"
            },
            {
                name: "Пяточный шип",
                code: "N",
                price: 500,
                humanity: "2d6"
            },
        ],

        Elementsforlimb: [
            {
                name: "Аудио-видео магнитофон",
                code: "N",
                price: 250,
                humanity: "1"
            },
            {
                name: "Кибер-модем",
                code: "N",
                price: 3000,
                humanity: "1"
            },
            {
                name: "Цифровой рекордер",
                code: "N",
                price: 300,
                humanity: "1"
            },
            {
                name: "Место для хранения",
                code: "N",
                price: 50,
                humanity: "0.5"
            },
            {
                name: "Мини фотоаппарат",
                code: "N",
                price: 200,
                humanity: "2"
            },
            {
                name: "Мини камера",
                code: "N",
                price: 400,
                humanity: "2"
            },
            {
                name: "Потайная кобура",
                code: "N",
                price: 100,
                humanity: "1"
            },
            {
                name: "Считывающий ЖК-экран",
                code: "N",
                price: 200,
                humanity: "1"
            },
            {
                name: "Технический сканер",
                code: "N",
                price: 4000,
                humanity: "3"
            },
        ],

        Rangeweaponforlimb: [
            {
                name: "Гранатомет",
                code: "N",
                price: 500,
                humanity: "2d6"
            },
            {
                name: "Микро-ракетная пусковая установка",
                code: "N",
                price: 900,
                humanity: "2d6"
            },
            {
                name: "Всплывающее оружие",
                code: "N",
                price: "от 2 до 800",
                humanity: "2d6"
            },
            {
                name: "Огнемет",
                code: "N",
                price: 600,
                humanity: "2d6"
            },
            {
                name: "Крепление для оружия и коннектор",
                code: "N",
                price: 100,
                humanity: "3"
            },
            {
                name: "2 зарядный конденсаторный лазер",
                code: "N",
                price: 800,
                humanity: "2d6"
            },
        ],

        Exzoarmor: [
            {
                name: "Капюшон",
                code: "MA",
                price: 200,
                humanity: "1d6"
            },
            {
                name: "Лицевая пластина",
                code: "CR",
                price: 400,
                humanity: "4d6"
            },
            {
                name: "Покрытие торса пластинами",
                code: "MA",
                price: 2000,
                humanity: "3d6"
            },
            {
                name: "Фронтальное оптическое крепление",
                code: "MA",
                price: 1000,
                humanity: "4d6"
            },
            {
                name: "Сенсорный отросток -Кроличьи уши",
                code: "M",
                price: "500 за 1",
                humanity: "3d6"
            },
        ],

        Rama: [
            {
                name: "Рама СИГМА",
                code: "MA",
                price: 6000,
                humanity: "2d6"
            },
            {
                name: "Рама БЕТА",
                code: "MA",
                price: 8000,
                humanity: "2d6"
            },
            {
                name: "Рама ОМЕГА",
                code: "MA",
                price: 10000,
                humanity: "3d6"
            },
        ],
    }),
}