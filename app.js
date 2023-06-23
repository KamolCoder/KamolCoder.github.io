let tg = window.Telegram.WebApp;

tg.expand()

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let room = "";
let hour = "";

let room1 = document.getElementById('room1');
let room2 = document.getElementById('room2');
let room3 = document.getElementById('room3');
let room4 = document.getElementById('room4');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');

room1.addEventListener('click', function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Выбрано комната - WorkSpace ");
        room = '1';
        tg.MainButton.show();
    }
});
room2.addEventListener('click', function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Выбрано комната - IventZone ");
        room = '2';
        tg.MainButton.show();
    }
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

let myData = 0;
let myHeading = document.getElementById('myHeading');
myHeading.innerHTML = myData;

plus.addEventListener('click',function(){
    myData +=1
})

minus.addEventListener('click',function(){
    myData -=1
})



Telegram.WebApp.onEvent('mainButtonClicked',function(){
    tg.sendData(room+"_"+hour);
});
