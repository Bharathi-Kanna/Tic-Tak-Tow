let btn = document.querySelectorAll(".button-option");
let popup = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msg = document.getElementById("message");
let turn = document.getElementById("turn");
 

let winningPatten = [[0,1,2],[0,3,6],[2,5,8],[6,7,8],[3,4,5],[1,4,7],[0,4,8],[2,4,6]];
let xTurn = true;
let count=0;
const enableButtons = ()=>{
    btn.forEach((elements)=>{
        elements.innerText="";
        elements.disabled=false;
        xTurn=true;
        turn.innerText="Player 'X'";
    })
    popup.classList.add("hide");
    count=0;
}
const winChecker =()=>{
      for(let i of winningPatten){
            let element1 = btn[i[0]].innerText;
            let element2 = btn[i[1]].innerText; 
            let element3 = btn[i[2]].innerText;

            if(element1==="" || element2==="" || element3==="") continue;

            if(element1===element2 && element2===element3) return element1;

      }
}
newgameBtn.addEventListener("click",()=>{
    enableButtons();

})
restartBtn.addEventListener("click",()=>{
    enableButtons();
    
})
btn.forEach((elements)=>{
    elements.addEventListener("click",()=>{
        if(xTurn){
            xTurn = false;
            elements.innerText="X";
            elements.disabled = true;
            turn.innerText="Player 'O'";
        }
        else{
            xTurn=true;
            elements.innerText="O";
            elements.disabled=true;
            turn.innerText="Player 'X'";
        }
        count++;
       let winner = winChecker();

       if(winner==="X"||winner==="O"){
           popup.classList.remove("hide");
           msg.innerText="Player '"+winner +"' Wins";
       }
       if(count===9 && (winner!=="X"&&winner!=="O")){
        popup.classList.remove("hide");
        msg.innerText="Match Draw";
       }
    })

})