const play = document.getElementById("play");
const menu = document.getElementById("menu");
const preference = document.getElementById("preference")
const back = document.getElementById("back")


play.onclick = () => {
    menu.style.display="none"
    preference.style.display="block"
}


back.onclick = () => {
    menu.style.display="block"
    preference.style.display="none"
}