let para1 = document.getElementById('para1');
let para2 = document.getElementById('para2');
let btn = document.getElementById('btn');

const handleOver = () => {
    para1.style.fontSize = '30px';
    para1.style.backgroundColor = 'cyan';
}

btn.addEventListener('click', () => {
    para1.style.dispaly = "none";
    para2.style.color = "blue";
})