//Выводим текст в консоль, присваеваем переменные
let finalText;
let inputText = document.querySelector('input');
let renameText = document.querySelector('#dublicateField');
inputText.onkeyup = function(){
    finalText = inputText.value;
    renameText.textContent = finalText;
};
// Событие нажатие по кнопки
document.querySelector('button').addEventListener ('click', function(event){
//Отменяем действие по умолчанию, не даем пользователю отправить форму
event.preventDefault();
//Выводи в консоль значение, которое пользователь вводит в поле ввода
console.log(inputText.value);
//Ранее по нажатию кнопки, поле ввода текста очищается
inputText.value = null;
//Ранее по нажатию кнопки, поле дублирования вывода текста очищается
renameText.textContent = '';
});



