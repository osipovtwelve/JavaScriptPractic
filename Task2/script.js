// Обработчик событий через addEventListener

// При нажатии на кнопку с идентификатором #consoleLog, выводится сразу и сообщение в консоли, и поп-ап окно 
document.querySelector('#consoleLog').addEventListener ('click', function(){
console.log('Сообщение в консоли');
alert('Метод для вывода сообщения в веб-консоль, откройте консоль');
// Замена текста для идентификатора #renameText1 при нажатии на кнопку с идентификатором #consoleLog
const renameFirstText = document.querySelector('#renameText1');
renameFirstText.textContent = 'Для вывода сообщения в консоль, пропишите: console.log(\'Сообщение в консоли\');';
});

// Вывод окна на странице
document.querySelector('#alert').addEventListener ('click', function(){
alert('Вывод Pop-up окна на странице, сейчас вы смотрите на него');
// Замена текста для идентификатора #renameText2 при нажатии на кнопку с идентификатором #alert
const renameSecondText = document.querySelector('#renameText2');
renameSecondText.textContent = 'Для вывода Pop-up окна, пропишите: alert(\'Текст окна\');"';
});

// Вывод Pop-up окна с возможность ввода текста
document.querySelector('#prompt').addEventListener ('click', function(){
// Задаем константу year
const year = 2024;
// Задаем константу textYear, которая будет принимать значение введенное пользователем
const textYear = prompt('Введите какой сейчас год?', '');
// Выведем значения пользователя в консоль
console.log('Пользователь ввел значение ' +textYear);
// Задаем условие проверки, если textYear равна year 
if (textYear == year)
{
// То вывододим окно с правильным ответом
    alert('Правильно, сейчас ' + year + ' год');
// Если textYear не равна year
} else if (textYear !== year) {
// Выводи окно с неправильным ответом
    alert('Неправильно, сейчас ' + year + ' год');
}
});