document.querySelector('#changeText').addEventListener ('click', function(event){
const linkText = document.querySelector('#changeText');
const newText = prompt('Введите новый текст');
linkText.textContent = newText;
event.preventDefault();
});