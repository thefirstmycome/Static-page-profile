let bk = document.querySelector('.bk');
let num = Math.floor(Math.random() * 6 + 1);
bk.style.backgroundImage = `url(./images/bk${num}.jpg)`;

let dateleft = document.querySelector('.date-left');
let dateright = document.querySelector('.date-right');
let week = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
function refresh() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    dateleft.innerText = `${year}-${month}-${day} ${hour}:${minute}:${second}`
}

let date2 = new Date();
let weeknow = date2.getDay();
dateright.innerText = week[weeknow - 1];
setInterval(refresh, 500);

document.addEventListener('mousewheel', function (e) {
    let x = ~~(document.documentElement.scrollTop)
    let value = 70 - ~~(x / 100) - 30
    console.log(value);
    if (value < 30) value = 30;
    value = value + '%';
    bk.style.filter = `brightness(${value})`;
})

// 点击img时停止播放音乐
let music_icon = document.querySelector('.music_icon');
let music = document.querySelector('#mu');

let statu = 1

music_icon.onclick = function () {
    if (statu == 1) {
        music.pause();
        music_icon.style.animation = 'None'
        statu = 0;
    }else if (statu == 0) {
        music.play();
        statu = 1;
        music_icon.style.animation = '5s zd linear infinite'
        
    }
}

// 设置5个音量档次 0 25 50 75 100
let voice = document.querySelector('.voice');

let vol = 100;
let model = 24;

voice.onclick = function () {
    vol = vol - 25;
    model = model + 10
    music.volume = vol / 100;
    voice.style.top = model + '%'
    voice.innerText = vol + '%';
    if (vol == 0) {
        vol = 125;
        model = 14;
    }
}