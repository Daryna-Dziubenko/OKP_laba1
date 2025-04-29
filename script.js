function showPrompt() {
    const name = prompt("Введіть своє ім'я:", "Ім'я");
    if (name != null && name !== "") {
        confirm("Підтвердити ім'я: " + name)
            ? alert("Вітаємо, " + name)
            : alert("Ім'я не підтверджено");
    } else {
        alert("Ви не ввели ім’я!");
    }
}

function dialogPass() {
    let password = prompt("Введіть пароль:");
    let [alertText, isValid] = ["", false];

    while (!isValid) {
        [alertText, isValid] = checkPassword(password);
        alert(alertText);
        if (!isValid) password = prompt("Пароль некоректний. Введіть ще раз:");
    }
}

function checkPassword(password) {
    if (password.length < 8) return ["Мінімум 8 символів", false];
    if (!/[A-Z]/.test(password)) return ["Має бути хоча б одна велика літера", false];
    if (!/[a-z]/.test(password)) return ["Має бути хоча б одна мала літера", false];
    if (!/[0-9]/.test(password)) return ["Має бути хоча б одна цифра", false];
    return ["Пароль задовольняє всі умови", true];
}

function showDeveloperInfo(lastName, firstName, position = "Web Developer") {
    alert(`Розробник: ${lastName} ${firstName}, посада: ${position}`);
}

function twoStr() {
    let str1 = prompt("Введіть рядок 1:");
    let str2 = prompt("Введіть рядок 2:");
    if (str1.length === str2.length) {
        alert("Рядки однакові");
    } else {
        alert(str1.length > str2.length ? str1 : str2);
    }
}

function changeBg() {
    const body = document.body;
    body.style.backgroundColor = '#32154c';
    setTimeout(() => {
        body.style.backgroundColor = '';
    }, 3000);
}

function goTo() {
    if (confirm("Перейти на Wikipedia?")) {
        location.href = "https://uk.wikipedia.org/wiki/JavaScript";
    }
}

function writeToDoc() {
    document.write("123");
}

function insertNode() {
    const newP = document.createElement('p');
    const text = document.createTextNode('Додано елемент через JS');
    newP.appendChild(text);
    document.body.append(newP);

    const delP = document.createElement('p');
    delP.setAttribute('id', 'delEl');
    delP.setAttribute('onclick', "document.getElementById('delEl').remove()");
    delP.appendChild(document.createTextNode('Натисни, щоб видалити мене'));
    document.body.append(delP);

    const firstP = document.querySelector('p');
    const insertBeforeP = document.createElement('p');
    insertBeforeP.textContent = 'Перед першим параграфом';
    document.body.insertBefore(insertBeforeP, firstP);

    const afterP = document.createElement('p');
    afterP.textContent = 'Після елемента';
    firstP.after(afterP);

    setTimeout(() => {
        const replacement = document.createElement('span');
        replacement.textContent = '🔄 Цей елемент замінив попередній';
        afterP.replaceWith(replacement);
    }, 5000);
}