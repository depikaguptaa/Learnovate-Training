let para1 = document.getElementById('para1');
let para2 = document.getElementById('para2');
let btn = document.getElementById('button');
let form = document.getElementById('form');

const clickEvent = () => {
    alert("button clicked");
}

const mouseOver = () => {
    para2.style.background = "green";
}

const mouseOut = () => {
    para2.style.background = "white";
}

const keydown = (event) => {
    console.log('${event.key} is pressed');
}

form.addEventListener('keydown', keydown);