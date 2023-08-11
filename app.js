let myInput = document.getElementById("inp");
let myGuess = document.getElementById("para");
let myButton = document.getElementById("btn");
let myChances = document.getElementById("chances");
myInput.focus();
let myRand = Math.floor(Math.random()*100);
// console.log(inputValue);
console.log(myRand);
let chance = 10;
myButton.addEventListener("click",() => {
    chance--;
    let inputValue = myInput.value;
    if(inputValue == myRand){
        [myGuess.textContent,myInput.disabled] = ["Congratulations",true];
        [myButton.textContent,myGuess.style.color] = ["Replay","#55efc4"];
        setTimeout(() => {
            window.location.reload();
        }, 3000);
        
    }else if(inputValue > myRand && inputValue < 100){
        [myGuess.textContent,myChances.textContent] = ["You Guess is High",chance];
        myGuess.style.color = "crimson";
    }else if(inputValue < myRand && inputValue > 0){
        [myGuess.textContent,myChances.textContent] = ["You Guess is Low",chance];
        myGuess.style.color = "crimson";
    }else{
        [myGuess.textContent,myChances.textContent] = ["Your Number is Invalid",chance];
        myGuess.style.color = "crimson";
    }
    if(chance == 0){
        [myGuess.textContent,myGuess.style.color] = ["You lost the Game","crimson"];
        [myButton.textContent,myInput.disabled,inputValue] = ["Replay",true,""];
    }
    if(chance < 0){
        window.location.reload();
    }
});
