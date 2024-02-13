
const butty = document.getElementById("funnyhaha")
let boredom = 0;
butty.textContent = "Click me or else"

butty.addEventListener("click", () => {
    boredom++;
    localStorage.setItem("score", boredom);
    butty.textContent = localStorage.getItem("score");
})
