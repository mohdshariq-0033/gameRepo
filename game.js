let user_score = 0;
let comp_score = 0;
let choises = document.querySelectorAll(".choise");
const msg = document.getElementById("msg");
const userScore =document.getElementById("user-score");
const compScore =document.getElementById("comp-score");
choises.forEach((choise) => {
choise.addEventListener("click", ( ) => {
let userChoise = choise.getAttribute("id");
playGame(userChoise);
});
});

const result = (userWin) => {
    if(userWin){
        user_score++;
        console.log("You Win!");
        msg.innerText = "You win!";
        userScore.innerText = user_score;
    }
    else {
        comp_score++;
        console.log("You Lose!");
        msg.innerText = "computer win!";
        compScore.innerText = comp_score;
    }
}

const playGame = (userChoise) => {
    console.log(userChoise);
// const option =["rock","paper","scissor"];
// Math
const compChoise = gencompChoise();
console.log(compChoise);
if(compChoise === userChoise){
    console.log("match draw");
    msg.innerText = "match draw! Try again";
}
else{
    let userWin = true;
    if(userChoise === "rock"){
        userWin = compChoise === "paper"? false : true ; 
    }
    else if(userChoise === "paper"){
       userWin = compChoise === "scissor" ? false : true ;
    }
    else {
        userWin = compChoise === "scissor" ? false : true ;
    }
result(userWin);
}
};

const gencompChoise = () => {
 const option =["rock","paper","scissor"];
 const indx = Math.floor(Math.random() * 3);
//  console.log(option[indx]);
 return option[indx];
};