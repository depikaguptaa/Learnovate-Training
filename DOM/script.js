let para = document.getElementById('para');
let btn = document.querySelector('button');

btn.addEventListener('click', () => {
    if (btn.style.color == "red") {
        para.style.color = "black";
    } else {
        para.style.color = "red";
    }
})