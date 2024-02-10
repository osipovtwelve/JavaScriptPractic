// Создаем константу trafficLightChange и определяем ее к идентификатору trafficLight
const trafficLightChange = document.querySelector('#trafficLight');
// При нажатии на круг будет запускаться функция makeGreen
document.querySelector('#trafficLight').onclick = function makeGreen(){
// Изменить цвет на зеленый
    trafficLightChange.style.background = ('green');
// При повторном нажатии удалить события в makeGreen и добавить функцию makeYellow
    trafficLightChange.removeEventListener('click', makeGreen);
    trafficLightChange.addEventListener('click', makeYellow);
}

function makeYellow(){
    trafficLightChange.style.background = ('yellow');
    trafficLightChange.removeEventListener('click', makeYellow);
    trafficLightChange.addEventListener('click', makeRed);
}

function makeRed(){
    trafficLightChange.style.background = ('red');
    trafficLightChange.removeEventListener('click', makeRed);
    trafficLightChange.removeEventListener('click', makeYellow);
}