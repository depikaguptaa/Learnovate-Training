let a = 1;

const handleAdd() {
    a++;

    let para = document.getElementById("para");
    para.innerHTML = "The value of a: " + a;
}

const handleMinus() {

    if (a > 0) {
        a--;
    }

    let para = document.getElementById("para");
    para.innerHTML = "The value of a: " + a;
}

document.getElementById("handleadd").addEventListener("click", handleAdd);
document.getElementById("handleminus").addEventListener("click", handleMinus);