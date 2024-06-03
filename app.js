let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;
 
let btns=["yellow","red","green","purple"];

h3=document.querySelector("h3");

document.addEventListener("keypress",(event)=>{
    if(started==false)
    {
        started=true;
        // console.log("Game is started!");

        levelUp()
    }
});

function levelUp()
{
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`#${randColor}`);

    // console.log(randIdx);
    // console.log(randColor);

    gameFlash(randBtn);

    gameSeq.push(randColor);
    console.log(gameSeq);
}

function gameFlash(btn)
{
    btn.classList.add("flash");
    
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function userFlash(btn)
{
    btn.classList.add("userFlash");
    
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },250);
}

function checkAns(idx)
{
    // let idx=level-1;

    if(userSeq[idx] === gameSeq[idx])
    {
        // console.log("same value");
        if(gameSeq.length == userSeq.length)
        {
            setTimeout(levelUp,1000);
        }
    }
    else
    {
        h3.innerHTML=`Game Over! Your score was <b>${level}</b> <br>Press any key to start.`;

        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor="white";
        },1000);
        reset();
    }

}

function btnPress()
{
    // console.log(this);
    gameFlash(this); 
    userFlash(this)

    userColor=this.getAttribute("id");             //here this refere to the button whic was oressed by the user
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".box");
// console.dir(allBtns);
for(btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}

function reset()
{
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;

}