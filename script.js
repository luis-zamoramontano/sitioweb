const btnRandom = document.querySelector("#random-btn")

function moverAleatoreamente(btn) {
    btn.style.fontWeight = "bolder";
    btn.style.positio = "absolute";
    btn.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    btn.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

btnRandom.addEventListener("mouseenter", function (e) {
    moverAleatoreamente(e. target)
    
})