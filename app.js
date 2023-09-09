let tg = window.Telegram.WebApp;

tg.expand()

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let room = "";
let filial = "";
let hour = 1;

let room1 = document.getElementById('room1');
let room2 = document.getElementById('room2');
let room3 = document.getElementById('room3');
let room4 = document.getElementById('room4');

let filial1 = document.getElementById('f1');
let filial2 = document.getElementById('f2');
let filial3 = document.getElementById('f3');
let filial4 = document.getElementById('f4');

filial1.addEventListener('click', function(){
        filial = '4';
        filial1.style.backgroundColor = 'rgb(248,168,24)';
        filial2.style.backgroundColor = '#111180';
        filial3.style.backgroundColor = '#111180';
});

filial2.addEventListener('click', function(){
        filial = '5';
        filial2.style.backgroundColor = 'rgb(248,168,24)';
        filial1.style.backgroundColor = '#111180';
        filial3.style.backgroundColor = '#111180';
});

filial3.addEventListener('click', function(){
        filial = '3';
        filial3.style.backgroundColor = 'rgb(248,168,24)';
        filial2.style.backgroundColor = '#111180';
        filial1.style.backgroundColor = '#111180';
});

room1.addEventListener('click', function(){
        tg.MainButton.setText("Выбрано комната - Open Space ");
        room = '1';
        room1.style.backgroundColor = 'rgb(248,168,24)';
        room2.style.backgroundColor = '#111180';
        room3.style.backgroundColor = '#111180';
        room4.style.backgroundColor = '#111180';
        tg.MainButton.show();
});
room2.addEventListener('click', function(){
        tg.MainButton.setText("Выбрано комната - Event-Zone ");
        room = '2';
        room1.style.backgroundColor = '#111180';
        room2.style.backgroundColor = 'rgb(248,168,24)';
        room3.style.backgroundColor = '#111180';
        room4.style.backgroundColor = '#111180';
        tg.MainButton.show();
});
room3.addEventListener('click', function(){
        tg.MainButton.setText("Выбрано комната - BigMiting ");
        room = '3';
        room1.style.backgroundColor = '#111180';
        room2.style.backgroundColor = '#111180';
        room3.style.backgroundColor = 'rgb(248,168,24)';
        room4.style.backgroundColor = '#111180';
        tg.MainButton.show();
});
room4.addEventListener('click', function(){
        tg.MainButton.setText("Выбрано комната - SmallMiting ");
        room = '4';
        room1.style.backgroundColor = '#111180';
        room2.style.backgroundColor = '#111180';
        room3.style.backgroundColor = '#111180';
        room4.style.backgroundColor = 'rgb(248,168,24)';
        tg.MainButton.show();
});

let counter = document.getElementById("counter");

function increment() {
if (hour < 23 ){
    hour++;
    counter.innerHTML = hour;
}}

function decrement() {
if (hour > 1 ){
    hour--;
    counter.innerHTML = hour;
}}


let input = document.getElementById("input");

input.addEventListener("input", function() {
    localStorage.setItem("data", input.value);
});

if (localStorage.getItem("data")) {
    input.value = localStorage.getItem("data");
}

window.addEventListener("beforeunload", function() {
    localStorage.removeItem("data");
});

Telegram.WebApp.onEvent('mainButtonClicked',function(){
    tg.sendData(room+"_"+hour+"_"+input.value+"_"+filial);
});
