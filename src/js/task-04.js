// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

    // Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
    // Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
    // Оновлюй інтерфейс новим значенням змінної counterValue.


const decBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]');
const counterValue = document.getElementById("value");
counterValue.textContent = 0;

function getCount() {
    let count = 0
    function dec() {
        return (count -= 1)
    };
    function inc() {
        return (count += 1)
    };
    return {dec, inc}
};

const c = getCount();

decBtn.addEventListener('click', () => {
    let result = c.dec();
    return counterValue.textContent = result;
})
incBtn.addEventListener('click', () => {
    let result = c.inc();
    return counterValue.textContent = result;
})
