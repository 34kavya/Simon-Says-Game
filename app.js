let gameSeq=[];
let userSeq=[];

let Color=["red","blue","green","yellow"];

let  level=0;
let started=false;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    console.log("Game started");
    started=true;
    levelup();}

)

let button=document.querySelector("button")

function btnFlash(button){
    button.classList.add("Flash");
    setTimeout(function(){
        button.classList.remove("Flash")
    },250)
}


function levelup(){
     userSeq=[];
    level++;
h2.innerText=`level ${level}`;
let randIdx=Math.floor(Math.random()*3);
let randColor=Color[randIdx];
let randBtn=document.querySelector(`.${randColor}`)
gameSeq.push(randColor);
console.log(gameSeq)
btnFlash(randBtn);
}

function checkAns(idx){

    if(userSeq[idx]===gameSeq[idx]){
        if((userSeq.length==gameSeq.length)){
           setTimeout(levelup,1000) ;
        }
    }

    else{
              h2.innerHTML=(`Game Over ! your score was <b> ${level}<b> <br>Press Any key to start`);
                document.querySelector("body").style.backgroundColor="red";
                setTimeout(function(){
                                    document.querySelector("body").style.backgroundColor="white";

                },150)
              reset();

    }
}


function  buttonPress(){
let btn=this;
btnFlash(btn);
let usercolor=btn.getAttribute("id");
console.log(usercolor);
userSeq.push(usercolor);
checkAns(userSeq.length-1);
}

let allButtons=document.querySelectorAll(".box")
for(button of  allButtons){
    button.addEventListener("click",buttonPress);
}


function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}