let tg = window.Telegram.WebApp;

tg.expand()

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let room = "";
let hour = 0;

let room1 = document.getElementById('room1');
let room2 = document.getElementById('room2');
let room3 = document.getElementById('room3');
let room4 = document.getElementById('room4');

room1.addEventListener('click', function(){
        tg.MainButton.setText("Выбрано комната - WorkSpace ");
        room = '1';
        tg.MainButton.show();
});
room2.addEventListener('click', function(){
        tg.MainButton.setText("Выбрано комната - IventZone ");
        room = '2';
        tg.MainButton.show();
});
room3.addEventListener('click', function(){
        tg.MainButton.setText("Выбрано комната - BigMiting ");
        room = '3';
        tg.MainButton.show();
});
room4.addEventListener('click', function(){
        tg.MainButton.setText("Выбрано комната - SmallMiting ");
        room = '4';
        tg.MainButton.show();
});

let counter = document.getElementById("counter");

function increment() {
if (hour < 23 ){
    hour++;
    counter.innerHTML = hour;
}}

function decrement() {
if (hour > 0 ){
    hour--;
    counter.innerHTML = hour;
}}


let input = document.getElementById("datetime");

function getData() {
    let ordertime = input.value;
    alert(ordertime);
}




Telegram.WebApp.onEvent('mainButtonClicked',function(){
    tg.sendData(room+"_"+hour+"_"+ordertime);
});
