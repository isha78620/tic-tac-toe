let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let new_button=document.querySelector("#new-game");
let msg_container=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;
// let turnX=false;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGme=()=>{
turnO=true;
enableBoxes();
msg_container.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was click");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
             box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        
        checkWinner();
    });
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(Winner)=>{
    msg.innerText="Congratulations , Winner is : "+ Winner;
    msg_container.classList.remove("hide");
}
const checkWinner=()=>{
    for(pattern of winpatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[1]].innerText);

        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val==pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};
new_button.addEventListener("click",resetGme);
resetbtn.addEventListener("click",resetGme);


