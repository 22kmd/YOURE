let dommes = document.getElementsByClassName("after");
let current = 0;

for (let a of dommes) {
    a.setAttribute("hidden", true);
    console.log(a);
}

function reveal_next() {
    if (current < dommes.length) {
        dommes[current].removeAttribute("hidden");
        current += 1;
        document.body.scrollTop = document.body.scrollHeight;
    }
}

document.body.onkeydown = reveal_next;
document.body.onclick = reveal_next;