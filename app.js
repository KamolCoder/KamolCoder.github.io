let tg = window.Telegram.WebApp;

tg.expand()

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let room = "";
let hour = 0;
let date = "";

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
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Выбрано комната - BigMiting ");
        room = '3';
        tg.MainButton.show();
    }
});
room4.addEventListener('click', function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Выбрано комната - SmallMiting ");
        room = '4';
        tg.MainButton.show();
    }
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

let datetime = document.getElementById("datetime");

function setDatetime() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (month < 10) {
        month = "0" + month;
    }

    if (day < 10) {
        day = "0" + day;
    }

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    datetime.value = year + "-" + month + "-" + day + "T" + hours + ":" + minutes;
}

setDatetime();

date = document.getElementById("datetime").value;
Telegram.WebApp.onEvent('mainButtonClicked',function(){
    tg.sendData(room+"_"+hour+"_"+date);
});
