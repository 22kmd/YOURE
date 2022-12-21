let dommes = document.getElementsByClassName("after");
let current = 0;

for (let a of dommes) {
    a.setAttribute("hidden", true);
}

function reveal_next() {
    if (current < dommes.length) {
        dommes[current].removeAttribute("hidden");
        current += 1;
        document.body.scrollTop = document.body.scrollHeight;
    }
}

function on_body_click() {
    reveal_next();
}

function clicked_show_all() {
    for (let a of dommes) {
        a.removeAttribute("hidden");
    }
    this.stopPropagation();
}

document.body.onkeydown = reveal_next;
document.body.onclick = on_body_click;