/*
 * Content for inner pages (services and case studies), RU + UZ.
 * Case task / solution / stack come from assets/js/i18n.js (I18N[lang].cases[id]);
 * everything else for the inner pages lives here.
 */
"use strict";

const SERVICES = {
  web: { slug: "services/web", cases: ["timkon", "delivery", "corpsite", "crm"], art: "web" },
  mobile: { slug: "services/mobile", cases: ["timkon", "delivery", "car"], art: "mobile" },
  desktop: { slug: "services/desktop", cases: ["timkon", "finance"], art: "desktop" },
  integration: { slug: "services/1c-integration", cases: ["timkon", "finance", "loyalty", "delivery"], art: "integration" }
};

const CASES = {
  timkon: { slug: "projects/timkon", services: ["mobile", "web", "desktop", "integration"], platforms: ["Mobile", "Web", "Desktop", "API"], link: "https://timkon.uz", gallery: [["main", 1304], ["tasks", 1304], ["stock", 1304], ["expiry", 1304], ["rating", 1304], ["tsd-list", 1200], ["tsd-check", 1200]], icon: "⭐" },
  delivery: { slug: "projects/delivery-app", services: ["mobile", "web", "integration"], platforms: ["Mobile", "Web"], icon: "🛵" },
  corpsite: { slug: "projects/retail-website", services: ["web"], platforms: ["Web"], icon: "🌐" },
  car: { slug: "projects/car-launcher", services: ["mobile"], platforms: ["Android"], icon: "🚗" },
  finance: { slug: "projects/finance-automation", services: ["integration", "desktop"], platforms: ["Desktop", "1С"], icon: "📊" },
  crm: { slug: "projects/crm", services: ["web"], platforms: ["Web"], icon: "🗂️" },
  loyalty: { slug: "projects/loyalty-bot", services: ["integration"], platforms: ["Telegram"], icon: "☕" }
};

const TEXT = {
  ru: {
    ui: {
      home: "Главная",
      services: "Услуги",
      projects: "Проекты",
      whatIBuild: "Что я делаю",
      whyMe: "Почему со мной удобно",
      stack: "Технологии",
      relatedCases: "Проекты по этому направлению",
      relatedServices: "Направления",
      faq: "Частые вопросы",
      task: "Задача",
      solution: "Решение",
      value: "Что это дало бизнесу",
      screens: "Экраны приложения",
      visit: "Открыть сайт",
      allProjects: "Все проекты",
      caseLabel: "Кейс",
      serviceLabel: "Услуга",
      discuss: "Обсудить проект",
      more: "Подробнее",
      footerServices: "Услуги",
      footerProjects: "Проекты",
      nda: "Название клиента скрыто по договорённости о конфиденциальности."
    },
    services: {
      web: {
        name: "Веб-разработка",
        title: "Разработка сайтов и веб-сервисов в Ташкенте — Django, FastAPI | Kamol",
        description: "Разработка веб-сервисов, CRM, личных кабинетов, REST API и корпоративных сайтов на Django и FastAPI. Многоязычие RU/UZ/EN, интеграция с 1С, Payme и Click. Ташкент.",
        h1: "Разработка сайтов и веб-сервисов для бизнеса",
        lead: "Делаю веб-продукты, которые работают на бизнес: от корпоративного сайта с CMS до CRM, личных кабинетов и API для мобильных приложений. Бэкенд на Django и FastAPI, данные — из вашей 1С, оплата — через Payme и Click.",
        offer: [
          ["Веб-сервисы и SaaS", "Многопользовательские системы с ролями, изоляцией данных организаций, отчётами и подпиской — как Timkon."],
          ["CRM и внутренние системы", "Учёт клиентов, заявок, филиалов и сотрудников вместо разрозненных Excel-таблиц и чатов."],
          ["Личные кабинеты и админ-панели", "Удобные интерфейсы для клиентов, партнёров и сотрудников с правами доступа и журналом действий."],
          ["REST API", "Бэкенд для мобильных приложений, касс и партнёров: JWT-авторизация, документация, версионирование."],
          ["Корпоративные сайты с CMS", "Сайты на трёх языках, которые маркетинг обновляет сам: акции, новости, вакансии, карта магазинов."],
          ["Интеграции", "Синхронизация с 1С по OData, Telegram-уведомления, платёжные системы, SMS-шлюзы, службы доставки."]
        ],
        why: [
          ["Один подрядчик на всё", "Бэкенд, фронтенд, сервер и деплой делает один человек — никаких потерь на стыках."],
          ["Понимаю бизнес-процессы", "Работаю финансовым аналитиком в рознице: знаю, как устроены учёт, остатки и отчётность."],
          ["Надёжность по умолчанию", "Резервные копии, мониторинг, тесты на критичных местах и понятная документация."],
          ["Локальный контекст", "Payme, Click, Eskiz, Яндекс Доставка и интерфейс на узбекском — без сюрпризов."]
        ],
        stack: ["Python", "Django", "DRF", "FastAPI", "Wagtail", "PostgreSQL", "SQLite", "Docker", "Nginx", "Jinja2"],
        faq: [
          ["Сколько стоит разработка веб-сервиса?", "Зависит от объёма: лендинг и корпоративный сайт стоят на порядок дешевле CRM или SaaS. После разбора задачи и прототипа я даю фиксированную смету, которая не меняется без вашего согласия."],
          ["Сколько времени занимает разработка?", "Корпоративный сайт — от 2–3 недель, веб-сервис или CRM — от 1,5–3 месяцев. Работаю короткими итерациями: каждую неделю вы видите рабочую версию."],
          ["Можно ли подключить сайт к 1С?", "Да. Я подключаюсь к 1С через OData или выгрузки, забираю товары, цены и остатки и отправляю обратно заказы и документы."],
          ["Кто будет заниматься сервером и поддержкой?", "Я разворачиваю проект на вашем или моём сервере, настраиваю резервные копии и мониторинг и остаюсь на поддержке после запуска."]
        ]
      },
      mobile: {
        name: "Мобильные приложения",
        title: "Разработка мобильных приложений для iOS и Android в Ташкенте — Flutter | Kamol",
        description: "Разработка мобильных приложений на Flutter для iOS и Android: доставка, онлайн-оплата Payme и Click, push-уведомления, офлайн-режим, сканеры штрихкодов, интеграция с 1С. Ташкент.",
        h1: "Разработка мобильных приложений для iOS и Android",
        lead: "Делаю мобильные приложения на Flutter: одна кодовая база для iOS и Android, нативная скорость и в два раза меньше затрат, чем при отдельной разработке под каждую платформу. Приложения для клиентов, сотрудников и складов — с оплатой, push-уведомлениями и работой без интернета.",
        offer: [
          ["Приложения для клиентов", "Каталог, корзина, доставка из ближайшего филиала, онлайн-оплата, программа лояльности и push-уведомления."],
          ["Приложения для сотрудников", "Отметка прихода и ухода, графики, задачи и чек-листы, KPI и рейтинги — всё, что сейчас живёт в чатах."],
          ["Складские приложения и ТСД", "Приёмка, перемещения и инвентаризация со сканером штрихкодов, в том числе без интернета, с записью в 1С."],
          ["Android-решения под железо", "Лаунчеры для планшетов, киоски, приложения для специализированных устройств."],
          ["Бэкенд и админка", "Сервер, API и панель управления для приложения — тоже моя работа, отдельный подрядчик не нужен."],
          ["Публикация в сторах", "Подготовка к App Store и Google Play, подписание, flavors для тестовой и боевой версии."]
        ],
        why: [
          ["Flutter — одна база для двух платформ", "Быстрее запуск и дешевле поддержка: исправление сразу попадает и в iOS, и в Android."],
          ["Работает без интернета", "Офлайн-режим для складов и филиалов с плохой связью: данные отправятся, когда сеть появится."],
          ["Реальные данные из 1С", "Цены, остатки и документы — из вашей учётной системы, а не из ручных выгрузок."],
          ["От прототипа до стора", "Быстрые прототипы на FlutterFlow, затем полноценная разработка на Flutter и Bloc."]
        ],
        stack: ["Flutter", "Dart", "FlutterFlow", "Bloc", "Riverpod", "Firebase", "FCM", "Kotlin", "go_router", "Dio"],
        faq: [
          ["Сколько стоит мобильное приложение?", "Цена зависит от количества экранов, интеграций и бэкенда. Простое приложение-каталог и приложение с доставкой, оплатой и 1С отличаются в разы. Фиксированную смету даю после прототипа."],
          ["Почему Flutter, а не нативная разработка?", "Одна кодовая база для iOS и Android экономит время и бюджет, а по скорости и внешнему виду Flutter-приложения не уступают нативным."],
          ["Поможете опубликовать приложение в App Store и Google Play?", "Да, я готовлю сборки, описания и скриншоты и прохожу модерацию. Аккаунты разработчика оформляются на вашу компанию."],
          ["Можно ли принимать оплату через Payme и Click?", "Да, у меня есть готовый опыт интеграции Payme Merchant API и Click SHOP API."]
        ]
      },
      desktop: {
        name: "Десктоп-программы",
        title: "Разработка программ для Windows на заказ — Python, PySide6 | Kamol",
        description: "Разработка десктоп-программ для Windows: рабочие места сотрудников, фоновые сервисы в трее, синхронизация с 1С по расписанию, автообновление и установщик. Python, PySide6. Ташкент.",
        h1: "Разработка программ для Windows на заказ",
        lead: "Некоторые задачи удобнее решать на компьютере: работа с большими таблицами, печать, сканеры, доступ к локальной сети и базам 1С. Делаю десктоп-программы на Python и PySide6 — с установщиком, автообновлением и понятным интерфейсом.",
        offer: [
          ["Рабочие места сотрудников", "Программы для офиса и склада: заказы поставщикам, графики, справочники, отчёты и печать."],
          ["Фоновые сервисы в трее", "Программы, которые по расписанию синхронизируют 1С с сайтом, приложением или API и шлют уведомления в Telegram."],
          ["Автоматизация рутины", "Загрузка банковских выписок, сверки, перенос данных между базами — то, что сейчас делают руками."],
          ["Работа с локальными ресурсами", "Сканеры, принтеры, файлы, локальная сеть, PostgreSQL и базы 1С внутри компании."],
          ["Установщик и автообновление", "Программа ставится в пару кликов и сама обновляется до новой версии."],
          ["Настройки без программиста", "Подключения, токены и расписания задаются в окне программы, а не в коде."]
        ],
        why: [
          ["Связка с вебом и мобайлом", "Десктоп-программа работает с тем же API, что и ваше приложение и сайт."],
          ["Надёжная работа в фоне", "Повторные попытки при обрывах связи, журнал запусков, защита от двойного запуска."],
          ["Безопасность", "Пароли и токены не хранятся в открытом виде, доступ по ролям."],
          ["Знаю 1С изнутри", "Работаю с OData, документами и справочниками 1С каждый день."]
        ],
        stack: ["Python", "PySide6", "Qt", "SQLite", "PostgreSQL", "requests", "PyInstaller", "1С OData"],
        faq: [
          ["Почему десктоп, а не веб?", "Если нужна работа с локальной сетью, оборудованием, большими объёмами данных или фоновые задачи по расписанию — десктоп-программа проще и надёжнее."],
          ["Под какие системы делаете программы?", "В первую очередь под Windows. Python и Qt позволяют собрать версию и для macOS, если это нужно."],
          ["Как программа обновляется?", "Встраиваю автообновление: при запуске программа проверяет новую версию и предлагает обновиться."],
          ["Можно ли связать программу с 1С?", "Да, это одна из моих основных задач: синхронизация по OData или напрямую через базу, по расписанию."]
        ]
      },
      integration: {
        name: "Интеграции с 1С и боты",
        title: "Интеграция 1С с сайтом, приложением и Telegram в Ташкенте | Kamol",
        description: "Интеграция 1С с сайтом, мобильным приложением, кассой и Telegram: обмен по OData, реальные остатки, автоматическая загрузка документов, Telegram-боты. Frontol, Payme, Click. Ташкент.",
        h1: "Интеграция 1С с сайтом, приложением и Telegram",
        lead: "Связываю 1С с остальными системами бизнеса: сайтом, мобильным приложением, кассами, банком и Telegram. Остатки, цены, продажи и документы обновляются сами — без ручного переноса, Excel и ошибок.",
        offer: [
          ["1С ⇄ сайт и приложение", "Товары, цены, штрихкоды и остатки выгружаются автоматически, заказы возвращаются в 1С."],
          ["Реальные остатки", "Остаток 1С минус продажи кассы, ещё не проведённые в учёте, — клиент видит то, что есть на полке."],
          ["Автоматическая загрузка документов", "Банковские выписки, расходы, зарплата, аренда и списания попадают в 1С без ручного ввода."],
          ["Сверки и контроль", "Автоматическая сверка кассы, магазинов и поставщиков с отчётом о расхождениях."],
          ["Telegram-боты", "Уведомления, программы лояльности, приём заявок и отчёты прямо в мессенджере."],
          ["Кассы и ТСД", "Обмен с Frontol, проверка перемещений сканером и запись результата в 1С."]
        ],
        why: [
          ["Финансист и разработчик", "Понимаю учёт, себестоимость и отчётность — не нужно объяснять, зачем нужна каждая проводка."],
          ["Безопасный обмен", "Перед записью документ перечитывается, повторная обработка исключена, все операции в журнале."],
          ["Работает по расписанию", "Синхронизация идёт сама, а при ошибке приходит уведомление в Telegram."],
          ["Без переписывания 1С", "Интегрируюсь через стандартный OData-интерфейс, не ломая вашу конфигурацию."]
        ],
        stack: ["1С OData", "Frontol", "Python", "FastAPI", "PostgreSQL", "Telegram Bot API", "Payme", "Click", "Eskiz"],
        faq: [
          ["С какими конфигурациями 1С вы работаете?", "С любыми, где доступен стандартный интерфейс OData: Управление торговлей, Розница, Бухгалтерия и собственные конфигурации."],
          ["Нужно ли дорабатывать 1С?", "Чаще всего нет: я работаю через OData и не трогаю конфигурацию. Если доработка нужна, согласовываем её заранее."],
          ["Что будет, если связь с 1С пропадёт?", "Обмен повторится автоматически, а если ошибка не уходит — вы получите уведомление в Telegram с понятным описанием."],
          ["Можно сделать Telegram-бота для бизнеса?", "Да: уведомления для руководителя, программы лояльности, приём заявок и отчёты по продажам."]
        ]
      }
    },
    cases: {
      timkon: {
        title: "Timkon — SaaS для розничных сетей: кейс разработки | Kamol",
        description: "Кейс Timkon: мобильное приложение для сотрудников, Django-бэкенд, десктоп-программы и синхронизация с 1С для розничных сетей. Web, Mobile и Desktop в одной экосистеме.",
        h1: "Timkon — экосистема для управления розничной сетью",
        lead: "Мой собственный SaaS-продукт: сотрудники, смены, задачи, остатки и сроки годности сети — в одном сервисе вместо пяти. Шесть связанных приложений на трёх платформах.",
        value: [
          "Руководство видит посещаемость, задачи и остатки по всем филиалам в одном месте",
          "Сотрудники отмечают приход и уход в приложении, штрафы и бонусы считаются автоматически",
          "Контроль сроков годности снижает списания просроченного товара",
          "Остатки, которые видят сотрудники, совпадают с реальностью на полке",
          "Продукт продаётся другим сетям как SaaS с изоляцией данных"
        ]
      },
      delivery: {
        title: "Приложение доставки для сети зоомагазинов: кейс | Kamol",
        description: "Кейс: мобильное приложение доставки на Flutter для сети зоомагазинов — каталог, реальные остатки из 1С, оплата Payme и Click, Яндекс Доставка, панель сборщика.",
        h1: "Приложение доставки для сети зоомагазинов",
        lead: "Мобильное приложение и бэкенд, через которые покупатели заказывают корм и товары для питомцев из ближайшего филиала с доставкой и онлайн-оплатой.",
        value: [
          "Новый канал продаж без сторонних маркетплейсов и их комиссий",
          "Заказ собирается в ближайшем филиале, где товар реально есть",
          "Оплата онлайн через популярные в Узбекистане Payme и Click",
          "Собственная база клиентов и их питомцев для персональных предложений"
        ]
      },
      corpsite: {
        title: "Корпоративный сайт розничной сети на Django и Wagtail: кейс | Kamol",
        description: "Кейс: корпоративный сайт сети магазинов на Django и Wagtail — RU/UZ/EN, CMS для маркетинга, карта магазинов, акции, вакансии и заявки партнёров.",
        h1: "Корпоративный сайт розничной сети",
        lead: "Трёхъязычный сайт сети магазинов, который маркетинг обновляет сам: акции, новости, вакансии и карта всех филиалов с поиском ближайшего.",
        value: [
          "Маркетинг публикует акции и новости без программиста",
          "Покупатели находят ближайший магазин в пару касаний",
          "Отклики на вакансии и заявки партнёров приходят в одну систему",
          "Сайт быстрый и не зависит от внешних CDN"
        ]
      },
      car: {
        title: "Car Launcher — лаунчер для планшета в автомобиле на Flutter: кейс | Kamol",
        description: "Кейс: Android-лаунчер на Flutter, который превращает планшет в мультимедийную систему автомобиля — Яндекс Музыка, скорость по GPS, навигатор, автозапуск с зажиганием.",
        h1: "Car Launcher — планшет как мультимедиа автомобиля",
        lead: "Android-приложение, которое превращает обычный планшет в головное устройство автомобиля: включается вместе с машиной и показывает музыку, скорость и навигатор.",
        value: [
          "Полноценная мультимедиа в машине без покупки дорогой магнитолы",
          "Крупный интерфейс, которым удобно пользоваться за рулём",
          "Планшет просыпается сам при включении зажигания"
        ]
      },
      finance: {
        title: "Автоматизация финансового учёта в 1С: кейс | Kamol",
        description: "Кейс: автоматическая загрузка банковских выписок, себестоимости, зарплаты и аренды в управленческую 1С, сверки кассы и поставщиков. Python, 1С OData.",
        h1: "Автоматизация финансового учёта в 1С",
        lead: "Набор модулей, которые загружают финансовые данные в управленческую базу 1С и сверяют их автоматически, а не руками в Excel.",
        value: [
          "Часы ручного ввода в неделю заменены запуском одной команды",
          "Меньше ошибок при переносе данных между системами",
          "Сверки показывают расхождения сразу, а не в конце месяца",
          "Переход на новую базу 1С прошёл с переносом истории"
        ]
      },
      crm: {
        title: "CRM для сети с филиалами на Django: кейс | Kamol",
        description: "Кейс: CRM на Django для компании с филиалами — справочники компаний, филиалов и помещений, прайс-листы, админка и REST API.",
        h1: "CRM для сети с филиалами",
        lead: "Веб-система, которая собрала данные о компаниях, филиалах, помещениях и прайс-листах в одном месте вместо разрозненных таблиц.",
        value: [
          "Единый источник данных вместо нескольких таблиц",
          "Прайс-листы привязаны к филиалам и не расходятся",
          "API позволяет подключать другие системы"
        ]
      },
      loyalty: {
        title: "Telegram-бот лояльности для кофейни: кейс | Kamol",
        description: "Кейс: Telegram-бот программы лояльности для кофейни — QR-коды с покупок, защита от повторного использования, бесплатный кофе после 6 чашек.",
        h1: "Telegram-бот лояльности для кофейни",
        lead: "Цифровая замена бумажным карточкам с печатями: гость копит покупки в Telegram и получает бесплатный кофе.",
        value: [
          "Не нужно печатать карточки и ставить печати",
          "Гостю не нужно ставить отдельное приложение — достаточно Telegram",
          "Кофейня видит базу постоянных гостей"
        ]
      }
    }
  },

  uz: {
    ui: {
      home: "Bosh sahifa",
      services: "Xizmatlar",
      projects: "Loyihalar",
      whatIBuild: "Nima qilaman",
      whyMe: "Nega men bilan qulay",
      stack: "Texnologiyalar",
      relatedCases: "Ushbu yo‘nalishdagi loyihalar",
      relatedServices: "Yo‘nalishlar",
      faq: "Ko‘p beriladigan savollar",
      task: "Vazifa",
      solution: "Yechim",
      value: "Biznesga nima berdi",
      screens: "Ilova ekranlari",
      visit: "Saytni ochish",
      allProjects: "Barcha loyihalar",
      caseLabel: "Keys",
      serviceLabel: "Xizmat",
      discuss: "Loyihani muhokama qilish",
      more: "Batafsil",
      footerServices: "Xizmatlar",
      footerProjects: "Loyihalar",
      nda: "Mijoz nomi maxfiylik kelishuviga ko‘ra ko‘rsatilmagan."
    },
    services: {
      web: {
        name: "Veb-dasturlash",
        title: "Toshkentda sayt va veb-servislar yaratish — Django, FastAPI | Kamol",
        description: "Django va FastAPI’da veb-servislar, CRM, shaxsiy kabinetlar, REST API va korporativ saytlar yaratish. RU/UZ/EN, 1C, Payme va Click bilan integratsiya. Toshkent.",
        h1: "Biznes uchun sayt va veb-servislar yaratish",
        lead: "Biznes uchun ishlaydigan veb-mahsulotlar yarataman: CMS’li korporativ saytdan tortib CRM, shaxsiy kabinetlar va mobil ilovalar uchun API’gacha. Backend — Django va FastAPI’da, ma’lumotlar — sizning 1C bazangizdan, to‘lov — Payme va Click orqali.",
        offer: [
          ["Veb-servislar va SaaS", "Rollar, tashkilotlar ma’lumotlarini ajratish, hisobotlar va obunaga ega ko‘p foydalanuvchili tizimlar — Timkon kabi."],
          ["CRM va ichki tizimlar", "Tarqoq Excel jadvallar va chatlar o‘rniga mijozlar, arizalar, filiallar va xodimlar hisobi."],
          ["Shaxsiy kabinetlar va admin panellar", "Mijozlar, hamkorlar va xodimlar uchun kirish huquqlari va harakatlar jurnaliga ega qulay interfeyslar."],
          ["REST API", "Mobil ilovalar, kassalar va hamkorlar uchun backend: JWT avtorizatsiya, hujjatlar, versiyalash."],
          ["CMS’li korporativ saytlar", "Marketing o‘zi yangilaydigan uch tilli saytlar: aksiyalar, yangiliklar, vakansiyalar, do‘konlar xaritasi."],
          ["Integratsiyalar", "OData orqali 1C bilan sinxronlash, Telegram bildirishnomalari, to‘lov tizimlari, SMS-shlyuzlar, yetkazib berish xizmatlari."]
        ],
        why: [
          ["Hammasi uchun bitta pudratchi", "Backend, frontend, server va deployni bitta odam qiladi — oraliqda yo‘qotishlar yo‘q."],
          ["Biznes jarayonlarini tushunaman", "Chakana savdoda moliyaviy tahlilchi bo‘lib ishlayman: hisob, qoldiqlar va hisobotlar qanday tuzilganini bilaman."],
          ["Sukut bo‘yicha ishonchlilik", "Zaxira nusxalar, monitoring, muhim joylarda testlar va tushunarli hujjatlar."],
          ["Mahalliy kontekst", "Payme, Click, Eskiz, Yandex Dostavka va o‘zbek tilidagi interfeys — kutilmagan holatlarsiz."]
        ],
        stack: ["Python", "Django", "DRF", "FastAPI", "Wagtail", "PostgreSQL", "SQLite", "Docker", "Nginx", "Jinja2"],
        faq: [
          ["Veb-servis yaratish qancha turadi?", "Hajmga bog‘liq: lending va korporativ sayt CRM yoki SaaS’dan ancha arzon. Vazifani tahlil qilib, prototip tayyorlagandan keyin sizning roziligingizsiz o‘zgarmaydigan qat’iy smeta beraman."],
          ["Ishlab chiqish qancha vaqt oladi?", "Korporativ sayt — 2–3 haftadan, veb-servis yoki CRM — 1,5–3 oydan. Qisqa iteratsiyalar bilan ishlayman: har hafta ishlaydigan versiyani ko‘rasiz."],
          ["Saytni 1C ga ulash mumkinmi?", "Ha. 1C ga OData yoki eksport orqali ulanaman, tovarlar, narxlar va qoldiqlarni olaman, buyurtma va hujjatlarni esa qaytarib yuboraman."],
          ["Server va qo‘llab-quvvatlash bilan kim shug‘ullanadi?", "Loyihani sizning yoki mening serverimga joylashtiraman, zaxira nusxalar va monitoringni sozlayman va ishga tushirilgandan keyin ham qo‘llab-quvvatlayman."]
        ]
      },
      mobile: {
        name: "Mobil ilovalar",
        title: "Toshkentda iOS va Android mobil ilovalar yaratish — Flutter | Kamol",
        description: "Flutter’da iOS va Android uchun mobil ilovalar: yetkazib berish, Payme va Click orqali onlayn to‘lov, push-bildirishnomalar, oflayn rejim, shtrix-kod skanerlari, 1C integratsiyasi. Toshkent.",
        h1: "iOS va Android uchun mobil ilovalar yaratish",
        lead: "Flutter’da mobil ilovalar yarataman: iOS va Android uchun bitta kod bazasi, native tezlik va har bir platforma uchun alohida ishlab chiqishga qaraganda ikki baravar kam xarajat. Mijozlar, xodimlar va omborlar uchun — to‘lov, push-bildirishnomalar va internetsiz ishlash bilan.",
        offer: [
          ["Mijozlar uchun ilovalar", "Katalog, savat, eng yaqin filialdan yetkazib berish, onlayn to‘lov, sodiqlik dasturi va push-bildirishnomalar."],
          ["Xodimlar uchun ilovalar", "Kelish va ketishni belgilash, jadvallar, vazifalar va chek-listlar, KPI va reytinglar — hozir chatlarda yurgan hamma narsa."],
          ["Ombor ilovalari va TSD", "Shtrix-kod skaneri bilan qabul qilish, ko‘chirish va inventarizatsiya, internetsiz ham, 1C ga yozish bilan."],
          ["Qurilmalar uchun Android yechimlar", "Planshetlar uchun launcherlar, kiosklar, maxsus qurilmalar uchun ilovalar."],
          ["Backend va admin panel", "Ilova uchun server, API va boshqaruv paneli — bu ham mening ishim, alohida pudratchi kerak emas."],
          ["Do‘konlarga joylash", "App Store va Google Play’ga tayyorlash, imzolash, test va asosiy versiya uchun flavor’lar."]
        ],
        why: [
          ["Flutter — ikki platforma uchun bitta baza", "Tezroq ishga tushirish va arzonroq qo‘llab-quvvatlash: tuzatish darhol iOS’ga ham, Android’ga ham tushadi."],
          ["Internetsiz ishlaydi", "Aloqa yomon bo‘lgan omborlar va filiallar uchun oflayn rejim: tarmoq paydo bo‘lganda ma’lumotlar yuboriladi."],
          ["1C dan haqiqiy ma’lumotlar", "Narxlar, qoldiqlar va hujjatlar — qo‘lda eksportdan emas, sizning hisob tizimingizdan."],
          ["Prototipdan do‘kongacha", "FlutterFlow’da tezkor prototiplar, so‘ng Flutter va Bloc’da to‘liq ishlab chiqish."]
        ],
        stack: ["Flutter", "Dart", "FlutterFlow", "Bloc", "Riverpod", "Firebase", "FCM", "Kotlin", "go_router", "Dio"],
        faq: [
          ["Mobil ilova qancha turadi?", "Narx ekranlar soni, integratsiyalar va backendga bog‘liq. Oddiy katalog ilovasi va yetkazib berish, to‘lov va 1C bilan ilova bir necha baravar farq qiladi. Qat’iy smetani prototipdan keyin beraman."],
          ["Nega native emas, Flutter?", "iOS va Android uchun bitta kod bazasi vaqt va byudjetni tejaydi, tezlik va ko‘rinish bo‘yicha esa Flutter ilovalari native’dan qolishmaydi."],
          ["Ilovani App Store va Google Play’ga joylashga yordam berasizmi?", "Ha, yig‘malar, tavsiflar va skrinshotlarni tayyorlayman va moderatsiyadan o‘taman. Dasturchi akkauntlari sizning kompaniyangiz nomiga rasmiylashtiriladi."],
          ["Payme va Click orqali to‘lov qabul qilish mumkinmi?", "Ha, Payme Merchant API va Click SHOP API integratsiyasi bo‘yicha tayyor tajribam bor."]
        ]
      },
      desktop: {
        name: "Desktop dasturlar",
        title: "Buyurtma asosida Windows dasturlari yaratish — Python, PySide6 | Kamol",
        description: "Windows uchun desktop dasturlar: xodimlar ish o‘rinlari, traydagi fon xizmatlari, jadval bo‘yicha 1C bilan sinxronlash, avtoyangilanish va o‘rnatuvchi. Python, PySide6. Toshkent.",
        h1: "Buyurtma asosida Windows dasturlari yaratish",
        lead: "Ba’zi vazifalarni kompyuterda hal qilish qulayroq: katta jadvallar, chop etish, skanerlar, lokal tarmoq va 1C bazalariga kirish. Python va PySide6’da desktop dasturlar yarataman — o‘rnatuvchi, avtoyangilanish va tushunarli interfeys bilan.",
        offer: [
          ["Xodimlar ish o‘rinlari", "Ofis va ombor uchun dasturlar: yetkazib beruvchilarga buyurtmalar, jadvallar, ma’lumotnomalar, hisobotlar va chop etish."],
          ["Traydagi fon xizmatlari", "Jadval bo‘yicha 1C ni sayt, ilova yoki API bilan sinxronlaydigan va Telegram’ga bildirishnoma yuboradigan dasturlar."],
          ["Rutinani avtomatlashtirish", "Bank ko‘chirmalarini yuklash, solishtirishlar, bazalar o‘rtasida ma’lumot ko‘chirish — hozir qo‘lda qilinadigan ishlar."],
          ["Lokal resurslar bilan ishlash", "Kompaniya ichidagi skanerlar, printerlar, fayllar, lokal tarmoq, PostgreSQL va 1C bazalari."],
          ["O‘rnatuvchi va avtoyangilanish", "Dastur bir necha bosishda o‘rnatiladi va o‘zi yangi versiyaga yangilanadi."],
          ["Dasturchisiz sozlamalar", "Ulanishlar, tokenlar va jadvallar kodda emas, dastur oynasida beriladi."]
        ],
        why: [
          ["Veb va mobil bilan bog‘liqlik", "Desktop dastur sizning ilovangiz va saytingiz ishlatadigan API bilan ishlaydi."],
          ["Fonda ishonchli ishlash", "Aloqa uzilganda qayta urinishlar, ishga tushirishlar jurnali, ikki marta ishga tushishdan himoya."],
          ["Xavfsizlik", "Parol va tokenlar ochiq holda saqlanmaydi, kirish rollar bo‘yicha."],
          ["1C ni ichidan bilaman", "Har kuni OData, 1C hujjatlari va ma’lumotnomalari bilan ishlayman."]
        ],
        stack: ["Python", "PySide6", "Qt", "SQLite", "PostgreSQL", "requests", "PyInstaller", "1C OData"],
        faq: [
          ["Nega veb emas, desktop?", "Agar lokal tarmoq, uskunalar, katta hajmdagi ma’lumotlar bilan ishlash yoki jadval bo‘yicha fon vazifalari kerak bo‘lsa — desktop dastur oddiyroq va ishonchliroq."],
          ["Qaysi tizimlar uchun dastur qilasiz?", "Avvalo Windows uchun. Python va Qt kerak bo‘lsa macOS uchun ham versiya yig‘ish imkonini beradi."],
          ["Dastur qanday yangilanadi?", "Avtoyangilanishni o‘rnataman: ishga tushganda dastur yangi versiyani tekshiradi va yangilashni taklif qiladi."],
          ["Dasturni 1C bilan bog‘lash mumkinmi?", "Ha, bu mening asosiy vazifalarimdan biri: jadval bo‘yicha OData orqali yoki to‘g‘ridan-to‘g‘ri baza orqali sinxronlash."]
        ]
      },
      integration: {
        name: "1C integratsiyasi va botlar",
        title: "Toshkentda 1C ni sayt, ilova va Telegram bilan integratsiya qilish | Kamol",
        description: "1C ni sayt, mobil ilova, kassa va Telegram bilan integratsiya qilish: OData orqali almashinuv, haqiqiy qoldiqlar, hujjatlarni avtomatik yuklash, Telegram-botlar. Frontol, Payme, Click. Toshkent.",
        h1: "1C ni sayt, ilova va Telegram bilan integratsiya qilish",
        lead: "1C ni biznesning boshqa tizimlari bilan bog‘layman: sayt, mobil ilova, kassalar, bank va Telegram. Qoldiqlar, narxlar, sotuvlar va hujjatlar o‘zi yangilanadi — qo‘lda ko‘chirish, Excel va xatolarsiz.",
        offer: [
          ["1C ⇄ sayt va ilova", "Tovarlar, narxlar, shtrix-kodlar va qoldiqlar avtomatik yuklanadi, buyurtmalar 1C ga qaytadi."],
          ["Haqiqiy qoldiqlar", "1C qoldig‘i minus hisobda hali o‘tkazilmagan kassa sotuvlari — mijoz javonda bor narsani ko‘radi."],
          ["Hujjatlarni avtomatik yuklash", "Bank ko‘chirmalari, xarajatlar, ish haqi, ijara va hisobdan chiqarishlar qo‘lda kiritmasdan 1C ga tushadi."],
          ["Solishtirish va nazorat", "Kassa, do‘konlar va yetkazib beruvchilarni farqlar hisoboti bilan avtomatik solishtirish."],
          ["Telegram-botlar", "Bildirishnomalar, sodiqlik dasturlari, arizalarni qabul qilish va hisobotlar to‘g‘ridan-to‘g‘ri messenjerda."],
          ["Kassalar va TSD", "Frontol bilan almashinuv, ko‘chirishlarni skaner bilan tekshirish va natijani 1C ga yozish."]
        ],
        why: [
          ["Moliyachi va dasturchi", "Hisob, tannarx va hisobotlarni tushunaman — har bir provodka nima uchun kerakligini tushuntirish shart emas."],
          ["Xavfsiz almashinuv", "Yozishdan oldin hujjat qayta o‘qiladi, takroriy ishlov berish istisno qilingan, barcha operatsiyalar jurnalda."],
          ["Jadval bo‘yicha ishlaydi", "Sinxronlash o‘zi ketadi, xato bo‘lsa Telegram’ga bildirishnoma keladi."],
          ["1C ni qayta yozmasdan", "Standart OData interfeysi orqali integratsiya qilaman, konfiguratsiyangizni buzmayman."]
        ],
        stack: ["1C OData", "Frontol", "Python", "FastAPI", "PostgreSQL", "Telegram Bot API", "Payme", "Click", "Eskiz"],
        faq: [
          ["Qaysi 1C konfiguratsiyalari bilan ishlaysiz?", "Standart OData interfeysi mavjud bo‘lgan har qanday konfiguratsiya bilan: Savdoni boshqarish, Chakana savdo, Buxgalteriya va o‘z konfiguratsiyalaringiz."],
          ["1C ni qayta ishlash kerakmi?", "Ko‘pincha yo‘q: OData orqali ishlayman va konfiguratsiyaga tegmayman. Agar o‘zgartirish kerak bo‘lsa, uni oldindan kelishib olamiz."],
          ["1C bilan aloqa uzilsa nima bo‘ladi?", "Almashinuv avtomatik takrorlanadi, xato ketmasa — tushunarli tavsif bilan Telegram’ga bildirishnoma olasiz."],
          ["Biznes uchun Telegram-bot qilish mumkinmi?", "Ha: rahbar uchun bildirishnomalar, sodiqlik dasturlari, arizalarni qabul qilish va sotuvlar bo‘yicha hisobotlar."]
        ]
      }
    },
    cases: {
      timkon: {
        title: "Timkon — chakana tarmoqlar uchun SaaS: ishlab chiqish keysi | Kamol",
        description: "Timkon keysi: chakana tarmoqlar uchun xodimlar mobil ilovasi, Django-backend, desktop dasturlar va 1C bilan sinxronlash. Web, Mobile va Desktop bitta ekotizimda.",
        h1: "Timkon — chakana tarmoqni boshqarish ekotizimi",
        lead: "Mening shaxsiy SaaS-mahsulotim: tarmoqning xodimlari, smenalari, vazifalari, qoldiqlari va yaroqlilik muddatlari — beshta o‘rniga bitta servisda. Uch platformadagi oltita bog‘liq ilova.",
        value: [
          "Rahbariyat barcha filiallar bo‘yicha davomat, vazifalar va qoldiqlarni bir joyda ko‘radi",
          "Xodimlar kelish va ketishni ilovada belgilaydi, jarima va bonuslar avtomatik hisoblanadi",
          "Yaroqlilik muddatlarini nazorat qilish muddati o‘tgan tovarlar hisobdan chiqarilishini kamaytiradi",
          "Xodimlar ko‘radigan qoldiqlar javondagi haqiqat bilan mos keladi",
          "Mahsulot boshqa tarmoqlarga ma’lumotlar ajratilgan SaaS sifatida sotiladi"
        ]
      },
      delivery: {
        title: "Zoodo‘konlar tarmog‘i uchun yetkazib berish ilovasi: keys | Kamol",
        description: "Keys: zoodo‘konlar tarmog‘i uchun Flutter’da yetkazib berish ilovasi — katalog, 1C dan haqiqiy qoldiqlar, Payme va Click orqali to‘lov, Yandex Dostavka, yig‘uvchi paneli.",
        h1: "Zoodo‘konlar tarmog‘i uchun yetkazib berish ilovasi",
        lead: "Xaridorlar eng yaqin filialdan uy hayvonlari uchun ozuqa va tovarlarni yetkazib berish va onlayn to‘lov bilan buyurtma qiladigan mobil ilova va backend.",
        value: [
          "Uchinchi tomon marketpleyslari va ularning komissiyalarisiz yangi savdo kanali",
          "Buyurtma tovar haqiqatan mavjud bo‘lgan eng yaqin filialda yig‘iladi",
          "O‘zbekistonda mashhur Payme va Click orqali onlayn to‘lov",
          "Shaxsiy takliflar uchun mijozlar va ularning uy hayvonlari bazasi"
        ]
      },
      corpsite: {
        title: "Django va Wagtail’da chakana tarmoqning korporativ sayti: keys | Kamol",
        description: "Keys: Django va Wagtail’da do‘konlar tarmog‘ining korporativ sayti — RU/UZ/EN, marketing uchun CMS, do‘konlar xaritasi, aksiyalar, vakansiyalar va hamkorlar arizalari.",
        h1: "Chakana tarmoqning korporativ sayti",
        lead: "Marketing o‘zi yangilaydigan do‘konlar tarmog‘ining uch tilli sayti: aksiyalar, yangiliklar, vakansiyalar va eng yaqinini qidirish imkoniga ega barcha filiallar xaritasi.",
        value: [
          "Marketing aksiya va yangiliklarni dasturchisiz e’lon qiladi",
          "Xaridorlar eng yaqin do‘konni bir necha bosishda topadi",
          "Vakansiyalarga javoblar va hamkorlar arizalari bitta tizimga tushadi",
          "Sayt tez va tashqi CDN’larga bog‘liq emas"
        ]
      },
      car: {
        title: "Car Launcher — Flutter’da avtomobil planshet launcheri: keys | Kamol",
        description: "Keys: oddiy planshetni avtomobil multimedia tizimiga aylantiradigan Flutter’dagi Android launcher — Yandex Musiqa, GPS tezlik, navigator, o‘t oldirilganda avtomatik ishga tushish.",
        h1: "Car Launcher — planshet avtomobil multimediasi sifatida",
        lead: "Oddiy planshetni avtomobilning bosh qurilmasiga aylantiradigan Android ilova: mashina bilan birga yonadi va musiqa, tezlik hamda navigatorni ko‘rsatadi.",
        value: [
          "Qimmat magnitola sotib olmasdan mashinada to‘liq multimedia",
          "Haydash paytida foydalanish qulay bo‘lgan yirik interfeys",
          "Planshet o‘t oldirilganda o‘zi uyg‘onadi"
        ]
      },
      finance: {
        title: "1C da moliyaviy hisobni avtomatlashtirish: keys | Kamol",
        description: "Keys: bank ko‘chirmalari, tannarx, ish haqi va ijarani boshqaruv 1C bazasiga avtomatik yuklash, kassa va yetkazib beruvchilarni solishtirish. Python, 1C OData.",
        h1: "1C da moliyaviy hisobni avtomatlashtirish",
        lead: "Moliyaviy ma’lumotlarni boshqaruv 1C bazasiga yuklaydigan va ularni Excel’da qo‘lda emas, avtomatik solishtiradigan modullar to‘plami.",
        value: [
          "Haftasiga soatlab qo‘lda kiritish bitta buyruqni ishga tushirish bilan almashtirildi",
          "Tizimlar o‘rtasida ma’lumot ko‘chirishda kamroq xatolar",
          "Solishtirishlar farqlarni oy oxirida emas, darhol ko‘rsatadi",
          "Yangi 1C bazasiga o‘tish tarix ko‘chirilishi bilan amalga oshirildi"
        ]
      },
      crm: {
        title: "Django’da filiallar tarmog‘i uchun CRM: keys | Kamol",
        description: "Keys: filiallarga ega kompaniya uchun Django’da CRM — kompaniyalar, filiallar va xonalar ma’lumotnomalari, narxlar ro‘yxati, admin panel va REST API.",
        h1: "Filiallar tarmog‘i uchun CRM",
        lead: "Kompaniyalar, filiallar, xonalar va narxlar ro‘yxati haqidagi ma’lumotlarni tarqoq jadvallar o‘rniga bir joyga jamlagan veb-tizim.",
        value: [
          "Bir nechta jadval o‘rniga yagona ma’lumot manbai",
          "Narxlar ro‘yxati filiallarga bog‘langan va farqlanmaydi",
          "API boshqa tizimlarni ulash imkonini beradi"
        ]
      },
      loyalty: {
        title: "Qahvaxona uchun Telegram sodiqlik boti: keys | Kamol",
        description: "Keys: qahvaxona uchun Telegram sodiqlik boti — xariddagi QR-kodlar, qayta foydalanishdan himoya, 6 chashkadan keyin bepul qahva.",
        h1: "Qahvaxona uchun Telegram sodiqlik boti",
        lead: "Muhrli qog‘oz kartochkalarning raqamli o‘rnini bosuvchi: mehmon xaridlarni Telegram’da to‘playdi va bepul qahva oladi.",
        value: [
          "Kartochka chop etish va muhr bosish shart emas",
          "Mehmonga alohida ilova o‘rnatish kerak emas — Telegram yetarli",
          "Qahvaxona doimiy mehmonlar bazasini ko‘radi"
        ]
      }
    }
  }
};

module.exports = { SERVICES, CASES, TEXT };
