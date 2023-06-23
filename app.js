let tg = window.Telegram.WebApp;

tg.expand()

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let room = document.getElementById("choose").value;
let hours = document.getElementById("numberinput").value;
let datetime = document.getElementById("start").value;


tg.MainButton.show()
Telegram.WebApp.onEvent('mainButtonClicked',function(){
    tg.sendData(room,hours,datetime);
});

