const play = document.getElementById("play");
const menu = document.getElementById("menu");
const preference = document.getElementById("preference");
const name_c = document.getElementById("player-name");
const game = document.getElementById("game");
const nwm = document.getElementById("nwm");
const body = document.getElementById("body");
const phone = document.getElementById("phone");
const con = document.getElementById("c1");
const conv = document.getElementById("c2");
const next = document.getElementById("next");
const stage = document.getElementById("stage");
const room = document.getElementById("room");
const bus = document.getElementById("bus");
const station = document.getElementById("station");
const croom = document.getElementById("croom");
const classroom = document.getElementById("classroom");
const out = document.getElementById("out");
const bs= document.getElementById("bs");
const fsbs= document.getElementById("fs");
const front_school = document.getElementById("front_school");
const back_school = document.getElementById("back_school");
let enter = document.getElementById("enter");
let firstClick = true
let secondClick = true

play.onclick = () => {
    menu.style.display="none";
    name_c.style.display="block";
}


enter.onclick = () => {
    if(nwm.value.length > 0){
        name_c.style.display="none";
        game.style.display="block";
        body.style.backgroundColor="black"
    }
}


next.onclick = () => {
    if (firstClick) {
        con.style.display="none";
        phone.style.display="block";
        firstClick = false;
    }else if (secondClick){
        phone.style.display="none";
        conv.style.display="block";
        secondClick = false;
   }else{
    stage.style.display="none";
    body.style.backgroundImage="url(./res/img/room.jpg)";
    room.style.display="block";
   }
}


bus.onclick = () =>{
    room.style.display="none";
    body.style.backgroundImage="url(./res/img/school.jpg)";
    front_school.style.display="block";
}

croom.onclick = () =>{
    front_school.style.display="none";
    body.style.backgroundImage="url(./res/img/croom.jpg)";
    classroom.style.display="block";
}



bs.onclick = () =>{
    front_school.style.display="none";
    body.style.backgroundImage="url(./res/img/school2.jpg)";
    back_school.style.display="block";
}


fs.onclick = () =>{
    front_school.style.display="block";
    body.style.backgroundImage="url(./res/img/school.jpg)";
    back_school.style.display="none";
}

out.onclick = () =>{
    front_school.style.display="block";
    body.style.backgroundImage="url(./res/img/school.jpg)";
    classroom.style.display="none";
}
