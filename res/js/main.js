const play = document.getElementById("play");
const menu = document.getElementById("menu");
const preference = document.getElementById("preference");
const back = document.getElementById("back");
const man = document.getElementById("man");
const name = document.getElementById("player-name")

play.onclick = () => {
    menu.style.display="none";
    preference.style.display="block";
}


back.onclick = () => {
    menu.style.display="block";
    preference.style.display="none";
}


man.onclick = () => {
    preference.style.display="none";
    name.style.display="block";
}
