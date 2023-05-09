let type_button = document.getElementById("type");
let reset_button = document.getElementById("reset");
let p = document.getElementById("text");
let text="چیزی را بنویسید ...";
let i = 0;
let speed = 120;

function type_write() {
    if (i < p_text.length) {
        p.innerHTML += p_text.charAt(i);
        i++;
        setTimeout(type_write, speed);
    }
}

function reset() {
    p.innerHTML = "";
    i = 0;
}

type_button.addEventListener('click', type_write);
reset_button.addEventListener('click', reset);
