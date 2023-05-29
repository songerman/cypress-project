// Получаем ссылки на элементы счетчика, полей ввода и кнопок
const counterElement = document.getElementById('counter');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const increaseButton = document.getElementById('increaseBtn');
const decreaseButton = document.getElementById('decreaseBtn');
const resetButton = document.getElementById('resetBtn');
const confirmButton = document.getElementById('confirmBtn');
const errorText = document.getElementById('errorText');
const successText = document.getElementById('successText');

let count = 0;

// Функция для обновления значения счетчика на странице
function updateCounter() {
    counterElement.textContent = count;
}

// Функция для проверки заполненности полей ввода
function checkInputFields() {
    const value1 = input1.value.trim();
    const value2 = input2.value.trim();

    if (value1 !== '' && value2 !== '') {
        confirmButton.removeAttribute('disabled');
        errorText.textContent = '';
    } else {
        confirmButton.setAttribute('disabled', 'disabled');
        errorText.textContent = 'Заполните все поля ввода.';
    }
}

// Обработчик для кнопки "Увеличить"
increaseButton.addEventListener('click', () => {
    count++;
    updateCounter();
});

// Обработчик для кнопки "Уменьшить"
decreaseButton.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateCounter();
    }
});

// Обработчик для кнопки "Сбросить"
resetButton.addEventListener('click', () => {
    count = 0;
    updateCounter();
});

// Обработчик для полей ввода
input1.addEventListener('input', checkInputFields);
input2.addEventListener('input', checkInputFields);

// Обработчик для кнопки "Confirm"
confirmButton.addEventListener('click', () => {
    const value1 = input1.value.trim();
    const value2 = input2.value.trim();

    if (value1 !== '' && value2 !== '') {
        // Действия при нажатии кнопки "Confirm"
        // Здесь ваш код...

        // Очистка полей ввода
        input1.value = '';
        input2.value = '';
        confirmButton.setAttribute('disabled', 'disabled');
        errorText.textContent = '';
        successText.textContent = 'Успешно!';
    }
});

// Обработчики для полей ввода при наведении фокуса
input1.addEventListener('focus', () => {
    successText.textContent = '';
});

input2.addEventListener('focus', () => {
    successText.textContent = '';
});

