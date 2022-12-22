let dommes = document.getElementsByClassName("after");
let current = 0;

for (let a of dommes) {
  a.setAttribute("hidden", true);
}

function reveal_next() {
  if (current < dommes.length) {
    dommes[current].removeAttribute("hidden");
    current += 1;

    // scroll to bottom
    document.body.scrollTop = document.body.scrollHeight;
  }
}

function clicked_show_all(event) {
  for (let a of dommes) {
    a.removeAttribute("hidden");
  }
  event.stopImmediatePropagation();
}

document.body.onkeydown = reveal_next;
document.body.onclick = reveal_next;
