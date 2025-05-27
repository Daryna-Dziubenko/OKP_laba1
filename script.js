const colors = ['#ffb3ba', '#ffdfba', '#ffffba', '#baffc9', '#bae1ff'];
let isColorChanging = false;

function showPrompt() {
    const name = prompt("Введіть своє ім'я:", "Супер-кодер");
    if (name) {
        const confirmMsg = `Підтвердити ім'я: ${name}?`;
        if(confirm(confirmMsg)) {
            showFloatingMessage(`Вітаємо, ${name}!`);
        } else {
            showFloatingMessage('Спробуй ще раз!');
        }
    } else {
        showFloatingMessage('Ім\'я обов\'язкове!');
    }
}

function dialogPass() {
    let isValid = false;
    let attempts = 0;
    
    while (!isValid && attempts < 5) {
        const password = prompt(`Спроб ${attempts+1}/5: Введіть пароль (мінімум 8 символів, великі/малі літери, цифри):`);
        const result = checkPassword(password);
        
        if (result.isValid) {
            isValid = true;
            showFloatingMessage('Пароль прийнято!');
        } else {
            alert(result.message);
            attempts++;
        }
    }
    
    if (!isValid) {
        showFloatingMessage('Спробуй пізніше!');
    }
}

function checkPassword(password) {
    const requirements = [
        {test: p => p?.length >= 8, message: "Мінімум 8 символів"},
        {test: p => /[A-Z]/.test(p), message: "Потрібна велика літера"},
        {test: p => /[a-z]/.test(p), message: "Потрібна мала літера"},
        {test: p => /\d/.test(p), message: "Потрібна цифра"}
    ];

    for (const req of requirements) {
        if (!req.test(password)) {
            return {isValid: false, message: req.message};
        }
    }
    return {isValid: true, message: "Успіх!"};
}

function showDeveloperInfo() {
    const devInfo = `Розробник: Дзюбенко Дарина\nПосада: Студентка`;
    showFloatingMessage(devInfo);
}

function twoStr() {
    const str1 = prompt("Введіть перший рядок:");
    const str2 = prompt("Введіть другий рядок:");
    
    const resultElement = document.createElement('div');
    resultElement.className = 'string-comparison';
    
    if (str1 === str2) {
        resultElement.innerHTML = 'Рядки ідентичні!';
        resultElement.style.color = '#2ecc71';
    } else {
        const longerStr = str1.length > str2.length ? str1 : str2;
        resultElement.innerHTML = `Найдовший рядок: <span>${longerStr}</span>`;
        resultElement.querySelector('span').style.color = '#e74c3c';
    }
    
    document.body.appendChild(resultElement);
    setTimeout(() => resultElement.remove(), 3000);
}

function changeBg() {
    if (isColorChanging) return;
    isColorChanging = true;
    
    const body = document.body;
    let i = 0;
    
    const interval = setInterval(() => {
        body.style.backgroundColor = colors[i % colors.length];
        i++;
    }, 500);
    
    setTimeout(() => {
        clearInterval(interval);
        body.style.backgroundColor = '';
        isColorChanging = false;
    }, 3000);
}

function goTo() {
    if (confirm("Перейти на Wikipedia про JavaScript?")) {
        window.open("https://uk.wikipedia.org/wiki/JavaScript", "_blank");
    }
}

function writeToDoc() {
    if (confirm("Очистити всю сторінку?")) {
        document.body.innerHTML = '<h1>Новий початок</h1>';
    }
}

function insertNode() {
    const createInteractiveElement = (text, color) => {
        const elem = document.createElement('p');
        elem.textContent = text;
        elem.style.cssText = `
            cursor: pointer;
            color: ${color};
            padding: 10px;
            border-radius: 5px;
            background: rgba(255,255,255,0.9);
            margin: 5px;
        `;
        return elem;
    };

    const elements = [
        createInteractiveElement('Натисни мене, щоб зникнути!', '#e74c3c'),
        createInteractiveElement('Я зникаю при кліку!', '#2ecc71'),
        createInteractiveElement('Видалити мене', '#3498db')
    ];

    elements.forEach(el => {
        el.onclick = () => el.remove();
        document.body.append(el);
    });
}

// Утиліти
function showFloatingMessage(text) {
    const msg = document.createElement('div');
    msg.className = 'floating-message';
    msg.textContent = text;
    msg.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: white;
        padding: 15px 25px;
        border-radius: 30px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        color: #333;
        font-weight: bold;
    `;

    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 3000);
}

// Стилі без анімацій
const style = document.createElement('style');
style.textContent = `
.string-comparison {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.2em;
    background: white;
    padding: 15px 30px;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}
`;
document.head.appendChild(style);

function replaceAboutText() {
    const aboutText = document.querySelector('.about-text');
    
    if (aboutText) {
        const newContent = `
            <p>Ми - сучасна платформа для навчання дітей програмуванню через інтерактивні завдання та ігри.</p>
            <p>Наші курси розроблені спеціалістами з урахуванням вікових особливостей дітей.</p>
            <p>CodeKids — це школа програмування для дітей та підлітків, яка допомагає розвивати логіку, креативність та навички роботи в команді.</p>
        `;
        
        aboutText.innerHTML = newContent;
        alert("Опис успішно оновлено!");
    } else {
        alert("Помилка: блок з описом не знайдено");
    }
}

let testimonials = JSON.parse(localStorage.getItem('testimonials')) || [
    {
        id: 1,
        text: "Вибір CodeKids для нашої дитини був неймовірно вдалим. Програма дуже цікава, кожен урок проходить в інтерактивній формі, і син відчуває себе справжнім розробником.",
        author: "Тетяна, мама Андрія"
    },
    {
        id: 2,
        text: "Моя донька в захваті від занять! Вона вже зробила свою першу гру, і ми дуже раді, що обрали CodeKids.",
        author: "Олена, мама Софії"
    },
    {
        id: 3,
        text: "Дуже професійний підхід! Мій син не просто навчився програмувати, а ще й знайшов нових друзів!",
        author: "Ігор, тато Максима"
    }
];

function saveTestimonials() {
    localStorage.setItem('testimonials', JSON.stringify(testimonials));
}

function renderTestimonials() {
    const testimonialList = document.querySelector('.testimonial-list');
    if (!testimonialList) return;

    testimonialList.innerHTML = testimonials.map(t => `
        <div class="testimonial" data-testimonial-id="${t.id}">
            <p>«${t.text}»</p>
            <span> - ${t.author}</span>
            <button class="delete-btn" data-action="deleteTestimonial" data-testimonial-id="${t.id}">🗑️ Видалити</button>
        </div>
    `).join('');
}

function addTestimonial() {
    const text = prompt("Введіть ваш відгук:");
    const author = prompt("Введіть ваше ім'я та статус (наприклад, Анна, мама Івана):");
    
    if (text && author) {
        const newTestimonial = {
            id: Date.now(), 
            text,
            author
        };
        testimonials.push(newTestimonial);
        saveTestimonials();
        
        const testimonialList = document.querySelector('.testimonial-list');
        const newElement = document.createElement('div');
        newElement.className = 'testimonial fade-in';
        newElement.dataset.testimonialId = newTestimonial.id;
        newElement.innerHTML = `
            <p>«${text}»</p>
            <span> - ${author}</span>
            <button class="delete-btn" data-action="deleteTestimonial" data-testimonial-id="${newTestimonial.id}">🗑️ Видалити</button>
        `;
        testimonialList.appendChild(newElement);
        showFloatingMessage('Відгук додано! 🎉');
    } else {
        showFloatingMessage('Заповніть усі поля! 😔');
    }
}

document.querySelector('.testimonials')
        .addEventListener('click', e => {
    const btn = e.target.closest('[data-action="deleteTestimonial"]');
    if (!btn) return;                           

    const id = btn.dataset.testimonialId;       
    deleteTestimonial(id);                      
});

function deleteTestimonial(id) {
    if (!confirm('Ви впевнені, що хочете видалити цей відгук?')) return;

    const el = document.querySelector(`[data-testimonial-id="${id}"]`);
    if (el) el.classList.add('fade-out');        

    setTimeout(() => {
        testimonials = testimonials.filter(t => t.id !== +id); 
        saveTestimonials();          
        renderTestimonials();        
        showFloatingMessage('Відгук видалено! 🗑️');
    }, 500);
}
function deleteTestimonial(id) {
    if (confirm('Ви впевнені, що хочете видалити цей відгук?')) {
        const testimonialElement = document.querySelector(`.testimonial[data-testimonial-id="${id}"]`);
        testimonialElement.classList.add('fade-out');
        setTimeout(() => {
            testimonials = testimonials.filter(t => t.id !== parseInt(id));
            saveTestimonials();
            renderTestimonials();
            showFloatingMessage('Відгук видалено! 🗑️');
        }, 500);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderTestimonials();
});

function sayWelcome() {
    alert("Ласкаво просимо до CodeKids! 🎉");
};

document.getElementById("opportunities").onclick = function() {
    alert("Привіт від властивості!");
};

let btn = document.getElementById("multiBtn");

btn.addEventListener("click", function() {
    console.log("Перший обробник");
});

btn.addEventListener("click", function() {
    console.log("Другий обробник");
});

let handler = {
    handleEvent(event) {
        console.log("Об’єкт обробив подію");
        console.log("Елемент:", event.currentTarget); 
    }
};

let objBtn = document.getElementById("objBtn");
objBtn.addEventListener("click", handler);

function handlerByAttribute() {
    alert('Обробник через атрибут onclick!');
}

document.getElementById("teacher-list").onclick = function(event) {
    if(event.target.tagName === 'LI') {
        event.target.style.backgroundColor = "yellow";
    }
};

document.getElementById("menu-saved").onclick = function(event) {
    if (event.target.tagName !== 'BUTTON') return;

    let action = event.target.dataset.action;
    if (action) {
        methods[action](); 
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const NOTE_KEY = 'codekids-note';

    const style = document.createElement('style');
    style.textContent = '.teacher.highlighted { background:#ffe082 }';
    document.head.append(style);

    const methods = {
        save() {
            const txt = document.getElementById('notes').value.trim();
            if (!txt) { alert('Нічого зберігати 😅'); return; }
            localStorage.setItem(NOTE_KEY, txt);
            alert('✅ Нотатку збережено');
        },

        search() {
            const q = prompt('Введіть ім’я викладача:')
                      ?.trim()?.toLowerCase();
            if (!q) return;

            let found = 0;
            document.querySelectorAll('#teacher-list .teacher')
                .forEach(li => {
                    const hit = li.textContent.toLowerCase().includes(q);
                    li.classList.toggle('highlighted', hit);
                    if (hit) found++;
                });

            alert(found ? `Знайдено: ${found}` : 'Збігів не знайдено');
        }
    };

    document.getElementById('menu-saved').addEventListener('click', e => {
        const btn = e.target.closest('button');
        if (!btn) return;

        const act = btn.dataset.action;
        if (methods[act]) methods[act]();
    });
});

