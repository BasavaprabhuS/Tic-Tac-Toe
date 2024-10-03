let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn= document.querySelector("#new-btn")
let para=document.getElementById("demo");

let turnO=true; //player O turn

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turnO==true)
        {
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
        newGameBtn.classList.remove("hide");
    })
    
})
newGameBtn.addEventListener("click",()=>{
    newGameBtn.classList.add("hide");
    for(let box of boxes){
        box.innerText="";
        box.disabled=false;
    }
    para.innerHTML="";

})
resetBtn.addEventListener("click",()=>{
    newGameBtn.classList.add("hide");
    for(let box of boxes){
        box.innerText="";
        box.disabled=false;
    }
    para.innerHTML="";

})

function checkWinner(){
    let count;
    for(let pattern of winPatterns){
        let temp="";
        count=0;
        temp=boxes[pattern[0]].innerText;
        for(let x=0;x<pattern.length;x++)
        {
            
            if(boxes[pattern[x]].disabled==false){
                break;
            }
            else{
                if(boxes[pattern[x]].innerText==temp){
                    count++;
                }
            }
        }
        if(count==pattern.length)
        {
            para.innerHTML= `${temp}` + " wins";
            boxes.forEach((box)=>{
                box.disabled=true;
            })
            break;
        }
    
    }
    let flag=0;
    for(let box of boxes){
        if(box.disabled==true){
            flag++;
        }
    }
    if(flag==9 && count!=3){
        para.innerHTML="It's a draw!!"
    }
}