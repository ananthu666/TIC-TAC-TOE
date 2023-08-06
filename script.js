console.log("Welcome to Tic Tac Toe")

let music=new Audio("music.mp3")
let audioturn=new Audio("touch.wav")
let gameover=new Audio("win.wav")

let isgameover=false
let turn="X"
// music.play();
const checkWin =()=>{
    if(!isgameover){
        // document.getElementsByClassName("line")[0].style.display = "inline";
    let boxtext=document.getElementsByClassName("boxtext");
    let wins=[
        [0,1,2,2.5,5,0],
        [3,4,5,2.5,15,0],
        [6,7,8,2.5,25,0],
        [0,3,6,-7.5,15,90],
        [1,4,7,2.5,15,90],
        [2,5,8,11.5,15.90],
        [0,4,8,2.5,15,45],
        [2,4,6,2.5,15,-45],
        
    ]
    wins.forEach(e=>
        {
            if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[1]].innerText !==""))
            {
                document.getElementsByClassName("info")[0].innerText=boxtext[e[0]].innerText +"won";
                document.getElementsByTagName('img')[0].style.width="186px" ;
                if(!isgameover)
                    {
                        gameover.play();
                    }
                isgameover=true;
                // document.querySelector(".line").style.border="0px solid rgb(184, 31, 184)";
                
                // document.getElementsByClassName('line')[0].style.width='25vw';
                // document.getElementsByClassName('line')[0].style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
                
            }
        })

}
}
const changeturn=()=>
{
    return turn==="X"?"0":"X"
}

// function changeturn()
// {
//     return turn==="X"?"0":"X"
// }

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    // document.getElementById("demo").innerHTML=boxtext
    element.addEventListener('click',()=>{
        if(boxtext.innerHTML==='')
        {
            boxtext.innerHTML=turn;
            turn=changeturn();
            audioturn.play();
            checkWin();
            if(!isgameover)
            {
                document.getElementsByClassName("info")[0].innerHTML="Turn for "+turn;
                
            }
        }
    })

})

reset.addEventListener("click",()=>{
    let boxtext=document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>
        {
            element.innerText='';
        })
        turn="X";
        document.getElementsByClassName("info")[0].innerHTML="Turn for "+turn;
    if(isgameover)
    {
        
        isgameover=false;
        document.getElementsByTagName('img')[0].style.width="0px" ;
        document.querySelector(".line").style.width='0vw';
        // document.querySelector(".line").style.border="0px solid white";
        document.getElementsByClassName("line")[0].style.display = "none";
        
    }

})

