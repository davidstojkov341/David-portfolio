function toggleMenu() {
    var menu = document.getElementById("kopcinja_menu");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}






const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワ";
const lettersArray = letters.split("");

const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function draw() {

    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "rgba(255,255,255,0.15)";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {

        const text = lettersArray[Math.floor(Math.random() * lettersArray.length)];

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
            drops[i] = 0;

        drops[i]++;

    }

}

setInterval(draw, 33);




const text = "Силата започнува во умот, а се докажува на дело.";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing_text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50); // брзина
    }
}

typing();








function openPregled(pregledId, el) {

    // скриј сите табови
    let tabs = document.querySelectorAll(".tab_content");
    tabs.forEach(tab => {
        tab.classList.remove("active");
    });

    // покажи избран
    document.getElementById(pregledId).classList.add("active");

    // тргни active од сите копчиња
    let links = document.querySelectorAll(".kopcinja_menu a");
    links.forEach(link => link.classList.remove("active"));

    // стави active на кликнато
    el.classList.add("active");


    // 🔥 НОВО: затвори hamburger после клик
    let menu = document.getElementById("kopcinja_menu");
    if (window.innerWidth <= 1024) {
        menu.style.display = "none";
    }
}


window.addEventListener("load", () => {
    document.body.classList.remove("loading");
    document.body.classList.add("loaded");
});




function openLightbox(src) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox_img").src = src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
