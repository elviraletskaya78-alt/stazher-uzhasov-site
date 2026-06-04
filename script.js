// ===== ДАННЫЕ ДЛЯ САЙТА =====

// Данные персонажей (имя, ранг, номер, описание, путь к фото)
const characters = [
    {
        name: "№1, Дьявол, Мефисто",
        rank: "S+",
        number: "№1",
        description: "Главный антагонист, загадочный глава шоу. Проявляет нездоровый интерес к Магу, вступая с ним в игру на грани жизни и смерти. Владелец гигантской золотой клетки и лепестков роз. Испытывает одержимость Магом.",
        image: "№1.jpg"
    },
    {
        name: "Ван Чжо",
        rank: "S",
        number: "№2",
        description: "Участник с вампирской внешностью (тёмно-красные зрачки). Наблюдателен и скрытен, замечает детали, которые упускают другие.",
        image: "Ван Чжо.jpg"
    },
    {
        name: "Чжугэ Ань",
        rank: "S",
        number: "№3",
        description: "Стратег и тактик. После финального инстанса СС-ранга был потрясён и озадачен исходом, но высоко оценил действия Мага.",
        image: "Чжугэ Ань.jpg"
    },
    {
        name: "Экзорцист",
        rank: "S",
        number: "№4",
        description: "Экзорцист, обладающий древними техниками. Один из сильнейших участников, заинтригованный методами Мага. В финальном инстансе выжил благодаря помощи Цзун Цзю.",
        image: "Экзорцист.jpg"
    },
    {
        name: "Темный колдун",
        rank: "S",
        number: "№5",
        description: "Загадочный колдун, использующий тёмную магию. Его методы часто находятся на грани дозволенного правилами.",
        image: "Темный колдун.jpg"
    },
    {
        name: "Посейдон",
        rank: "S",
        number: "№6",
        description: "Мощный участник, контролирующий водные стихии. Его сила и спокойствие внушают страх другим стажёрам.",
        image: "Посейдон.jpg"
    },
    {
        name: "Му Бэй, Мессия, Святой сын",
        rank: "S",
        number: "№7",
        description: "Загадочная фигура, известная как Мессия. Обладает уникальными способностями, которые выделяют его среди других участников.",
        image: "Му Бэй.jpg"
    },
    {
        name: "Азан в черной мантии",
        rank: "S",
        number: "№8",
        description: "Таинственный персонаж, скрывающий лицо под капюшоном чёрной мантии. Его мотивы и истинная сила остаются загадкой.",
        image: "Азан.jpg"
    },
    {
        name: "Цзун Цзю, маг",
        rank: "С → А",
        number: "№9",
        description: "Главный герой. Фокусник, потерявший возможность выступать. Хладнокровный гений ловкости рук и психологии. Вместо страха использует иллюзии и сценарное мышление.",
        image: "Цзун Цзю.jpg"
    },
    {
        name: "Юй Лэюань, мастер инь-ян, Цучимикадо",
        rank: "S",
        number: "№10",
        description: "Мастер Инь-Ян, обладающий древними техниками. Во время ожидания результатов инстанса переживал за Мага, надеясь, что Дьявол поможет тому выбраться.",
        image: "Юй Лэюань.jpg"
    }
];

// Данные для карты испытаний (ИНСТАНСЫ)
const instances = [
    {
        name: "Психиатрическая больница",
        rank: "A",
        description: "Заброшенная психиатрическая лечебница, где участники сталкиваются с безумием пациентов и медперсонала. Каждый коридор хранит страшные тайны, а звуки шагов за спиной могут оказаться последними, что вы услышите. Чтобы выжить, нужно не только сражаться с монстрами, но и сохранить рассудок в этом аду."
    },
    {
        name: "Горная деревня объятия голодом",
        rank: "S",
        description: "Затерянная в горах деревня, где голод породил древнее зло. Местные жители обратились к каннибализму, а их проклятые души до сих пор бродят по улицам. Участникам предстоит выяснить причину проклятия и найти способ выбраться, пока они сами не стали частью этого жуткого пира."
    },
    {
        name: "Первая старшая школа",
        rank: "B",
        description: "Обычная с виду школа, но с наступлением темноты она превращается в ловушку для выживших. Классные комнаты меняются местами, призраки учеников повторяют последние мгновения своей жизни, а учителя ведут уроки, где цена ошибки — смерть. Главное правило: никогда не оставайтесь в школе после полуночи."
    },
    {
        name: "Судный день",
        rank: "SS",
        description: "Апокалиптический инстанс, где участники оказываются в мире после ядерной катастрофы. Радиация, мутанты, банды выживших и ограниченные ресурсы — всё это проверка на прочность. В этом инстансе нет правил, а доверять нельзя никому. Выжить здесь — значит превзойти самого себя."
    },
    {
        name: "Безумный цирк",
        rank: "SS",
        description: "Финальный инстанс, который едва не убил всех участников. Гигантская золотая клетка, лепестки роз, зеркала от пола до потолка. Связь с Системой была потеряна, и только вмешательство Дьявола и хитрость Мага позволили кому-то выжить. Именно здесь Мастер Инь-Ян понял истинные намерения №1 относительно Мага. Клоуны здесь не шутят — они убивают."
    },
    {
        name: "Инстанс наказания",
        rank: "S+",
        description: "Особый тип инстанса, куда попадают нарушители правил или те, кто проиграл голосование зрителей. Здесь нет возможности выбраться стандартным путём — только пройти испытание до конца. Уровень сложности завышен, а монстры обладают интеллектом. Мало кто возвращается из Инстанса наказания живым."
    },
    {
        name: "Фауст",
        rank: "S",
        description: "Инстанс, основанный на сделках с дьяволом. Участникам предлагают исполнить желание в обмен на нечто равноценное — память, годы жизни или часть души. Но каждое желание имеет скрытую цену, и Фауст никогда не играет по-честному. Главное здесь — не поддаться искушению и сохранить себя."
    }
];

// Данные для карты испытаний (ИВЕНТЫ от Системы)
const events = [
    {
        name: "Лас-Вегас",
        rank: "Ивент",
        description: "Участников переносят в город грехов и азарта. Казино, игровые автоматы, покер и рулетка. Ставки идут не на деньги, а на жизнь и очки. Каждая игра может принести могущественный артефакт или отправить вас на верную смерть. Помните: в Лас-Вегасе всегда выигрывает казино."
    },
    {
        name: "Королевская игра",
        rank: "Ивент",
        description: "Психологический ивент, где участники становятся пешками в игре таинственного Короля. Каждому выдаются карты с заданиями, которые могут касаться других игроков. Предательство, альянсы, манипуляции — только хитрейшие выживут в этой игре. Правила меняются каждый раунд, а Король наблюдает из тени."
    },
    {
        name: "Парк развлечений 'Радуга'",
        rank: "Ивент",
        description: "На первый взгляд безобидный парк аттракционов превращается в смертельную ловушку. Американские горки, комната страха, колесо обозрения — каждый аттракцион — это отдельное испытание. Улыбающиеся аниматоры на самом деле — безжалостные убийцы, а сладкая вата может оказаться ядовитой. Получить удовольствие не получится — только выжить."
    },
    {
        name: "Бал-маскарад",
        rank: "Ивент",
        description: "Роскошный бал в старинном особняке, где все участники скрывают лица под масками. Здесь нельзя снимать маску до окончания ивента — нарушителя ждёт мгновенная смерть. Среди гостей прячутся убийцы, и каждые полчаса кто-то умирает. Задача участников — вычислить убийц, оставаясь в тени и не раскрывая свою истинную личность."
    }
];

// ===== ВСПОМОГАТЕЛЬНАЯ ФУНКЦИЯ =====
// Защита от специальных символов (чтобы не ломался код)
function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// ===== МОДАЛЬНОЕ ОКНО =====
function showModal(title, description) {
    // Удаляем старое окно, если оно есть
    const existingModal = document.querySelector('.modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <h3>${escapeHtml(title)}</h3>
            <p>${escapeHtml(description)}</p>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Закрытие по крестику
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => modal.remove());
    
    // Закрытие по клику на фон
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// ===== СОЗДАНИЕ КАРТОЧЕК ПЕРСОНАЖЕЙ =====
function createCharactersGrid() {
    const grid = document.getElementById('charactersGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    characters.forEach(char => {
        const card = document.createElement('div');
        card.className = 'character-card';
        
        // Создаем HTML для изображения
        let imageHtml = '';
        if (char.image) {
            imageHtml = `<img src="${escapeHtml(char.image)}" alt="${escapeHtml(char.name)}" class="character-img__photo" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\'character-img__placeholder\'>🎭</div>';">`;
        } else {
            imageHtml = `<div class="character-img__placeholder">🎭</div>`;
        }
        
        card.innerHTML = `
            <div class="character-img">
                ${imageHtml}
            </div>
            <div class="character-info">
                <h3 class="character-name">${escapeHtml(char.name)}</h3>
                <span class="character-rank">${escapeHtml(char.rank)} | ${escapeHtml(char.number)}</span>
                <p class="character-desc">${escapeHtml(char.description)}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ===== СОЗДАНИЕ КАРТЫ ИНСТАНСОВ =====
function createInstancesMap() {
    const mapContainer = document.getElementById('instancesMap');
    if (!mapContainer) return;
    
    mapContainer.innerHTML = '';
    
    instances.forEach(instance => {
        const card = document.createElement('div');
        card.className = 'trial-card';
        card.innerHTML = `
            <span class="trial-rank">${escapeHtml(instance.rank)}-ранг</span>
            <h3>${escapeHtml(instance.name)}</h3>
            <p>Нажми для подробностей →</p>
        `;
        
        card.addEventListener('click', () => {
            showModal(instance.name, instance.description);
        });
        
        mapContainer.appendChild(card);
    });
}

// ===== СОЗДАНИЕ КАРТЫ ИВЕНТОВ =====
function createEventsMap() {
    const mapContainer = document.getElementById('eventsMap');
    if (!mapContainer) return;
    
    mapContainer.innerHTML = '';
    
    events.forEach(event => {
        const card = document.createElement('div');
        card.className = 'trial-card';
        card.innerHTML = `
            <span class="trial-rank">${escapeHtml(event.rank)}</span>
            <h3>${escapeHtml(event.name)}</h3>
            <p>Нажми для подробностей →</p>
        `;
        
        card.addEventListener('click', () => {
            showModal(event.name, event.description);
        });
        
        mapContainer.appendChild(card);
    });
}

// ===== БУРГЕР-МЕНЮ =====
function initBurgerMenu() {
    const burgerBtn = document.getElementById('burgerBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (burgerBtn && navMenu) {
        burgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

// ===== ЗАПУСК ВСЕХ ФУНКЦИЙ ПРИ ЗАГРУЗКЕ =====
document.addEventListener('DOMContentLoaded', () => {
    // Запускаем функции в зависимости от того, какие элементы есть на странице
    createCharactersGrid();
    createInstancesMap();
    createEventsMap();
    initBurgerMenu();
    
    console.log('Сайт "Стажёр ужасов" успешно загружен и работает!');
});