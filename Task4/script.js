// Определяем нажатие по ссылке с идентификатором changeText
document.querySelector('#changeText').addEventListener('click', function (event) {
    // Отменяем действие по умолчанию, то есть не даем пользователю перейти на страницу Яндекса
    event.preventDefault();
    // Создаем константу linkText, которая присваевается для ссылки с идентификатором changeText
    const linkText = document.querySelector('#changeText');
    // Создаем константу newText, которая принимает значение введенное в поле prompt
    const newText = prompt('Введите новый текст');
    // Меняем значение linkText на значение, которое ввел пользователь newText
    linkText.textContent = newText;
});